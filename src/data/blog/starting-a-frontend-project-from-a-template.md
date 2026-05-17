---
pubDatetime: 2026-05-17T10:30:00+02:00
title: "Starting a frontend project from a template base"
slug: starting-a-frontend-project-from-a-template
featured: false
draft: false
tags:
  - beginner
  - setup
  - frontend
description: Starting a frontend project from template base
---

The idea behind this article is to explain how you can start a front-end project and prepare it for [future updates](/posts/update-frontend-theme-using-git).
There are more than one way to achieve the same result, but the steps below are the easiest that I could think of.

## Table of contents

## Create a repository for you project

Here I will use github as example.

1. You can create a repository at: https://github.com/new
1. Set an `Repository Name` e.g: `blog`
1. Then click on `Create repository` button on bottom page.

## Create a folder for your project

Probably you have a folder for your projects in my case it is located at `~/projects/`

Then inside of your "project" clone the repository that you created

```bash
git clone git@github.com:eerison/blog.git
```

You will see something like this

```bash
# ~/projects ✗ git clone git@github.com:eerison/blog.git
# Cloning into 'blog'...
# warning: You appear to have cloned an empty repository.
```

Now go into the new `blog` folder created

```bash
cd blog
```

## Getting files from template

In this example we are going to use [astro-paper](https://github.com/satnaing/astro-paper), then define it as `upstream` repository.

```bash
git remote add upstream https://github.com/satnaing/astro-paper.git
```

You could check, it was created prorpely running

```bash
git remote -v
```

Then you gonna see something like this

```bash
#origin	git@github.com:eerison/blog.git (fetch)
#origin	git@github.com:eerison/blog.git (push)
#upstream	https://github.com/satnaing/astro-paper.git (fetch)
#upstream	https://github.com/satnaing/astro-paper.git (push)
```

## Pull and Push

At this point you are able to get files from upstream

```bash
git pull upstream main
```

now if you run `ls` you gonna see frontend template in your folder.

and you can run commands to install dependencies and start server e.g:

## Generate one commit only

We are almost done.

we need to prepare our git tree for future updates, we need to squash all commits into only one.

```bash
git reset --soft $(git rev-list --max-parents=0 HEAD) && git commit --amend -m "Initial commit from upstream (main/master)" --no-edit
```

Check if all commits was reset in only one

```bash
git log --pretty=oneline
```

you should see something like this

```bash
# be9f65c26494fdb57f6df7256013b58a6f6bdf05 (HEAD -> master) Initial commit from upstream (main/master)
```

## Make changes

### Custom changes
You certanly want to make some changes, But I really recommend you keep all customizations into one commit only.
it will help you solving future conflicts.

something like this [[AstroPaper][erison.work] local changes](https://github.com/shield-wall/erison-work/commits/master/)

### New files

Well now you can add new files like blog post and so on.

## Advivece

Try to keep your **git tree** orginized, then use `squesh/rebease` instead of `merge`. it will make your `git tree` in one simple line.

## Conclusion

Starting your project like this, it will make things easier for future update.

and for future updates check this post: [Update frontend theme using git](/posts/update-frontend-theme-using-git)

in case something did not work as expected let me know in the comments bellow.
