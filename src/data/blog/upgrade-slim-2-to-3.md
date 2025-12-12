---
pubDatetime: 2025-12-12T14:00:00+02:00
title: "Upgrade slim framework from 2 to 3"
slug: upgrade-slim-2-to-3
featured: true
draft: false
tags:
  - php
  - upgrade
description: How migrate from slim 2 to 3
---

## Table of contents

## Introdution

If you're stuck on Slim Framework version 2, I think this will help you make progress. During the migration process, you will want to make small changes and validate that they are working, especially in legacy code.

Ideally, we would upgrade together with the framework/lib, but sometimes we are late to the party. Here, I would like to share some insights on how you could approach this migration.

> Try to check/solve your deprecations time to time, it could avoid implement solutions with break changes.

## Make code base compatible


There are more than one way to upgrade. In this article, I will focus on making the code base compatible with the current and next versions. This approach allows you to migrate your code base step by step.

### Compare both versions

Let's start from the beginning with what is perhaps the easiest way.

```php
$app->get('/', function () {
   echo "Hello index";
});
```

and we need to make this looks like in Slim 3

```php
$app->get('/', function ($request, $response) {
    $response->getBody()->write("Hello index");
    
    return $response;
});
```

### Looking into framework code base

Well to make this possible we need to [Decorate][decorator-post] or Inheritance the framework's codebase.

Then looking in slim 2, I saw that response value is handled at

```diff file="Slim/Route.php"
//https://github.com/slimphp/Slim/blob/2.x/Slim/Route.php#L468
public function dispatch()
{
    // ...

    $return = call_user_func_array($this->getCallable(), array_values($this->getParams()));

+   if (is_string($return)) {
+       echo $return;
+   }

    return (false === $return) ? false : true;
}
```

now we can use action like this

```php

$app->get('/', function () {
   return "Hello index";
});
```

### Return response interface

Since slim 3 , they are using [PSR7][psr-7], then we need to make slim 2 request and response compatible.

Then we just need to improve our solution in `Route.php` for something like this

```diff file="Slim/Route.php"
//https://github.com/slimphp/Slim/blob/2.x/Slim/Route.php#L468
    // ...
+    if ($return instanceof ResponseInterface) {
+        $return->getBody()->rewind();
+        echo $return->getBody()->getContents();
+   elseif (is_string($return)) {
-   if (is_string($return)) {
       echo $return;
   }
}
```

Now our action can return **ResponseInterface** like slim 3 

```php
$app->get('/', function () {
    $response = new GuzzleHttp\Psr7\Response();

    $response->getBody()->write(sprintf('Hello Slim %s ', App::VERSION));

    return $response;
});
```

> I am using Guzzle just as example but you could use any lib that implements PSR7

### Changing Slim app

Now we just need to use the class that we modified.

```diff file="Slim/Slim.php"
    //https://github.com/slimphp/Slim/blob/2.x/Slim/Slim.php#L441
    protected function mapRoute($args)
    {
        $pattern = array_shift($args);
        $callable = array_pop($args);
-       $route = new \Slim\Route($pattern, $callable, $this->settings['routes.case_sensitive']);
+       $route = new YourRoute($pattern, $callable, $this->settings['routes.case_sensitive']);
        $this->router->map($route);
        if (count($args) > 0) {
            $route->setMiddleware($args);
        }

        return $route;
    }
```

and also verify if class exist because on Slim 3 it was moved to `App.php`

```php file="src/YourSlimAppModified.php"
use Slim\App as BaseApp;
use Slim\Slim;

if (class_exists(Slim::class)) {
    final class YourSlimAppModified extends Slim
    //...
else {
    final class App extends BaseApp
    {
    }
}
```

### How it looks like

in the end it will look like this

```php file="index.php"
$app = new YourSlimAppModified();

$app->get('/', function () {
    $response = new GuzzleHttp\Psr7\Response();

    $response->getBody()->write(sprintf('Hello Slim %s ', App::VERSION));

    return $response;
});

$app->run();
```

## Final thoughts

After you make classes that make slim 2 compatible with slim 3, you could change your code base in small interations.

I created a package for you test your code base between slim 2 and 3, you can find it [here](https://github.com/erison-work/slim-bump-showcase)

> If you are in the process of migrating and require a version with full support for requests and responses like slim 3, contact me at [slim@erison.work](slim@erison.work).


But you can just run

```
composer require erison-work/slim-bump-showcase
```

### Slim 3

 ```
composer req slim/slim:^3.0
```

![Screenshot using slim framework 3](@/assets/images/slim3.png)

### Slim 2

 ```
composer req slim/slim:^2.0
```

![Screenshot using slim framework 2](@/assets/images/slim2.png)







[decorator-post]: /posts/how-to-enhance-final-classes-from-open-source-code-with-decorator-pattern/
[psr-7]: https://www.php-fig.org/psr/psr-7/
