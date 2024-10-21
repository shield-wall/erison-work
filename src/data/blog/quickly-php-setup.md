---
author: Erison Silva
pubDatetime: 2023-11-28T10:00:00Z
modDatetime: 2025-12-12T09:40:00+02:00
title: Quickly php setup
slug: quickly-php-setup
featured: false
draft: false
tags:
  - php
  - developer
  - beginner
  - setup
description: Easily install and configure the entire PHP stack on your machine in one simple step, perfect for beginners.
---

My goal with this post is to help you set up a PHP environment on your machine quickly and easily.
I've seen people struggle to do this, and tutorials that require you to follow lots of steps.
In the end, you can run PHP with just one command.

## Requirements

Before we start, you **MUST** have two tools already installed on your computer.

1. [Git][git_install_link]
2. [Docker][docker_install_link]

> You must also be able to run docker without **sudo**,
> in case you didn't have setup non root, check this [article][docker_non_root_link].

Check if it is working properly running the commands bellow 👇

```sh
git --version
docker compose version
```

> For **Windows** users I would say that you must install [WSL][wsl_install_link] to have this working.

## Let's make this work 🚀

After you have done the requirements step, we can now run command to have this ready to play with php 🐘.

Copy and past the command bellow inside of your **project folder**.

```sh
bash <(curl -fsSL https://gist.githubusercontent.com/eerison/b79070bf142e4ea301867bd3308dadea/raw/easy-php-setup.sh) easy-php-setup
```
[Gist code](https://gist.github.com/eerison/b79070bf142e4ea301867bd3308dadea)

## Commands

| Command                                  | Description                                                          |
| ---------------------------------------- | -------------------------------------------------------------------- |
| docker compose up -d                     | Start the containers                                                 |
| docker compose down                      | Stop containers                                                      |
| docker compose exec php composer install | Execute some **php command** that you need, or **composer command**. |

## Frameworks

This project should work, out the box, for the most _modern php frameworks_ such as [Symfony][symfony_link] and [Laravel][laravel_link].

In case you just want to use the environment, you can remove all files and keep `.docker` and `docker-compose.yml` only.

> For symfony setups look at: [Quickly symfony setup Article](/posts/quickly-symfony-setup)

But if you find some strange behaviour, feel free to open an [issue][repository_issue_link]
or even better provide a PR to improve the [project][repository_link] 🚀.

[git_install_link]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[docker_non_root_link]: https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user
[docker_install_link]: https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository
[wsl_install_link]: https://learn.microsoft.com/en-us/windows/wsl/install
[repository_issue_link]: https://github.com/shield-wall/easy-php-setup/issues
[repository_link]: https://github.com/shield-wall/easy-php-setup
[symfony_link]: https://symfony.com/
[laravel_link]: https://laravel.com/
