---
pubDatetime: 2024-10-28T14:00:00+02:00
modDatetime: 2026-05-17T15:17:00+02:00
title: "Update frontend theme using git"
slug: update-frontend-theme-using-git
featured: true
draft: false
tags:
  - git
  - frontend
description: When starting a project using frontend themes, you may want to incorporate new features or bug fixes. In this article, I will provide an alternative approach to effectively manage these updates.
---

Frontend **themes** and **templates** are incredibly helpful for starting a project or using as a base, letting you focus on what you need—like I’m doing with this blog! I’m using the [*Astro Paper theme*][astro-paper], which includes amazing features for a blog, so I can focus entirely on the **content** I want to share.

But as time goes on, new features and *bug fixes* are added, and keeping your **site up-to-date** with the latest **updates** from the *original theme repository* is essential. In this post, I’ll show you a straightforward method to **update your blog or website** with changes from the original repository, using **Git** for a seamless upgrade.

## Table of contents

## Before you start

I am assuming that your project was setup like in this post: [Starting a frontend project from a template base](/posts/starting-a-frontend-project-from-a-template)

## Run the script

You just need to copy the code bellow and past in your `terminal`, make sure you are on your `master` branch. But no worries any change will be applied.

You can pass as argument which branch or tag you want to use, e.g.: `main`, `dev`, `v5.5.0` and so on.

```bash
bash <(curl -fsSl https://gist.githubusercontent.com/eerison/067a40def7492bd3268591dd4de2faba/raw/update-frontend-templete.sh) v5.5.0
```
[Gist code](https://gist.github.com/eerison/067a40def7492bd3268591dd4de2faba)

A new branch will be created, something like `master-preview` (it depends your branch's name). In this branch will contain `master` and upstream code (The version that you choosed on bash script).

## Solving conflicts

Some conflicts appear because you deleted files that you won't use e.g. `src/data/blog`, then just track which folder or file you don't care the changes and discard changes running:

```bash
git rm -r src/data/blog
```

with this you can focus on custom changes that you made.

after finish the conflicts finish the rebase

```bash
git rebase --continue
```

## Push changes

Make sure that everything is looking as expected and also run an `check` or `build` in your project.

```bash
yarn astro check
```

Now that everything is ok, just move things from `master-preview` to `master` branch and push the changes.

```bash
git checkout master \
&&  git reset --hard master-preview \
&& git push -f
```

> I am using `push foce`, because git tree was changed.

[astro-paper]: https://github.com/satnaing/astro-paper
[astro-paper-commits]: https://github.com/satnaing/astro-paper/commits/main/
[git-cherry-pick]: https://git-scm.com/docs/git-cherry-pick
