---
pubDatetime: 2026-05-17T12:23:00+02:00
modDatetime: 2026-06-03T09:22:00+02:00
title: "How to Start an AstroJS Project From a Template Without Breaking Future Updates"
slug: start-astro-template-without-breaking-updates
featured: false
draft: false
tags:
  - beginner
  - setup
  - frontend
  - astrojs
description: Cloning a Astrojs template is easy. Keeping it updateable months later is the hard part. Here's a Git workflow that avoids painful upstream conflicts.
---

Starting a AstroJs project from a template is easy.
The problem starts months later, when the original template receives updates and your customized project becomes difficult to synchronize.
This article explains how to initialize template-based AstroJs projects in a way that keeps future Git updates manageable.

## Table of contents

## Create a repository for your project

Here I will use github as example.

1. You can create a repository at: https://github.com/new
1. Set an `Repository Name` e.g: `blog`
1. Then click on `Create repository` button on bottom page.

## Create a folder for your project

Probably you have a folder for your projects in my case it is located at `~/projects/`

Then inside your "project" clone the repository that you created

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

You could check, it was created properly running

```bash
git remote -v
```

Then you should see something like this

```bash
#origin	git@github.com:eerison/blog.git (fetch)
#origin	git@github.com:eerison/blog.git (push)
#upstream	https://github.com/satnaing/astro-paper.git (fetch)
#upstream	https://github.com/satnaing/astro-paper.git (push)
```

At this point you are able to get files from upstream

```bash
git pull upstream main
```

If you run `ls`, you should now see the template files in your project directory.

and you can run commands to install dependencies and start server e.g:

```bash
pnpm install
pnpm run dev
```

## Generate one commit only

We are almost done.

we need to prepare our git tree for future updates, we need to squash all commits into only one.

```bash
git reset --soft $(git rev-list --max-parents=0 HEAD) && git commit --amend -m "Initial commit from upstream (main/master)" --no-edit
```

Check if all commits were squashed

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

>[!IMPORTANT]
> Try to keep your **git tree** organized, then use `squash/rebase` instead of `merge`. it will make your `git tree` in one simple line.

## Conclusion

Starting your project like this, it will make things easier for future update.

and for future updates check this post: [Update AstroJs theme using git](/posts/how-to-update-astro-theme-git/)

in case something did not work as expected let me know in the comments below.
