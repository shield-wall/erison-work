---
pubDatetime: 2024-10-28T14:00:00+02:00
modDatetime: 2025-11-19T18:44:00+02:00
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

## Before start 

### Setup a upstream remote

Create a remote called `upstream` pointing to original template's repository, it will be used to get updates.

```bash
git remote add upstream https://github.com/satnaing/astro-paper.git
```

### Upstream in one commit

It is really **IMPORTANT** you keep upstream's code in one single commit, e.g.

```diff
9fefe8a (HEAD -> master, origin/master, origin/HEAD) New post: Get Frontend Theme Updates Using Git
27cc000 New post: Decorator pattern from open source code
0e64c87 New post: A beginner's guide to setting up PHP on your computer
1d132e6 [erison.work] new files added
063090b [AstroPaper][erison.work] local changes
+ e66898e Initial commit from Astro (v4.0.0)
```

> I suggest you keep local changes like, file/folder removed in one commit also. as you can see on commit `063090b`

## Update your project

### Run the script

You just need to copy the code bellow and past in your `terminal`, make sure you are on your `master` branch. But no worries any change will be applied.

You can pass as argument which branch or tag you want to use, e.g.: `main`, `dev`, `v5.5.0` and so on.

```bash
bash <(curl -fsSl https://gist.githubusercontent.com/eerison/067a40def7492bd3268591dd4de2faba/raw/update-frontend-templete.sh) main
```
[Gist code](https://gist.github.com/eerison/067a40def7492bd3268591dd4de2faba)

A new branch will be created, something like `master-preview` (it depends your branch's name). In this branch will contain `master` and upstream code (The version that you choosed on bash script).

### Solving conflicts

Some conflicts appear because you deleted files that you won't use e.g. `src/data/blog`, then just track which folder or file you don't care the changes and discard changes running:

```bash
git rm -r src/data/blog
```

with this you can focus on custom changes that you made.

after finish the conflicts finish the rebase

```
git rebase --continue
```

## Push changes

After you be sure that everything is working on `master-preview` (Do not forget test build :P), you can pass the changes to your `master` and push your changes.

```bash
git checkout master \
&&  git reset --hard master-preview \
%% git push -f
```

> I am using `push foce`, because git tree was changed.

[astro-paper]: https://github.com/satnaing/astro-paper
[astro-paper-commits]: https://github.com/satnaing/astro-paper/commits/main/
[git-cherry-pick]: https://git-scm.com/docs/git-cherry-pick
