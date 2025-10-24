---
author: Erison Silva
pubDatetime: 2025-10-23T13:28:00+02:00
title: Quickly symfony setup
slug: quickly-symfony-setup
featured: true
draft: false
tags:
  - php
  - developer
  - setup
description: Easily start symfony project with docker on your machine.
---

## Table of contents

The focus of this post is on using the command line to set up a Symfony project and install the services I use for testing.

## Setups

### Symfony

At the moment It needs you have [symfony](https://symfony.com/download) installed on your machine.

```bash
bash <(curl -fsSl https://gist.githubusercontent.com/eerison/78e1158ea624323139991814451bc55b/raw/symfony.sh) project-test 7.3.x
```

[Gist code](https://gist.github.com/eerison/78e1158ea624323139991814451bc55b)

| Argument Position  | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| $1                 | Project folder's name                                                |
| $2                 | Symfony version                                                      |

### Sonata Page Bundle

Execute this in your project folder e.g : `project-test`

```bash
bash <(curl -fsSL https://gist.githubusercontent.com/eerison/78e1158ea624323139991814451bc55b/raw/sonata-page.sh)
```
