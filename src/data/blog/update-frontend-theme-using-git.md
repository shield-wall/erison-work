---
pubDatetime: 2024-10-28T14:00:00+02:00
modDatetime: 2025-03-14T14:10:00+02:00
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

### Create a copy of your `master/main` branch:

First thing first, you need to have a backup of you main branch.
```
git checkout master && git checkout -b master-backup
```

### Remove all commits not related with main code

In my case I have added some commits, like edited some files, added some posts and so on, in this case I need to remove them, and keep the last one only.
it will avoid a bunch of conflicts.
```diff
- 9fefe8a (HEAD -> master, origin/master, origin/HEAD) New post: Get Frontend Theme Updates Using Git
- 27cc000 New post: Decorator pattern from open source code
- 0e64c87 New post: A beginner's guide to setting up PHP on your computer
- 1d132e6 [erison.work] new files added
- 739e076 [AstroPaper] remove old posts
- 063090b [AstroPaper][erison.work] local changes
e66898e Initial commit from Astro (v4.0.0)
```
> Note: I have squased all commits form original [repository][astro-paper-commits] into one `e6689e`, you going to see this on steps bellow.

### Orginize your remote repositories
Check how are your remotes running:
```
git remote -v
```
You should have something like this
```
astro-paper     https://github.com/satnaing/astro-paper.git (fetch)
astro-paper     https://github.com/satnaing/astro-paper.git (push)
origin  git@github.com:shield-wall/erison-work.git (fetch)
origin  git@github.com:shield-wall/erison-work.git (push)
```

- `astro-paper` is the main repository (upstream).
- `origin` is your fork.

## Convert All Commits into One

The first thing to start to update your project is get all commits from original repository, in our example we want to get the version `v4.5.0`
```bash
git pull --rebase astro-paper v4.5.0 --allow-unrelated-histories
```

After running this command, your commit history should look something like this:

    d89fb48 (HEAD -> main, tag: v4.5.0) bump: version 4.4.0 → 4.5.0
    c164b5e build(deps): upgrade dependencies (#381)
    cbbb3eb perf: preload font and load theme script asynchronously (#380)
    1a19eb5 build(deps): bump path-to-regexp from 6.2.2 to 6.3.0 (#379)
    66c2664 build(deps): bump dset from 3.1.3 to 3.1.4 (#377)

Now, let’s convert all commits into a single one:
```bash
git reset --soft $(git rev-list --max-parents=0 HEAD) \
&& git commit --amend --no-edit
```
After executing these commands, your commit history will now appear as follows:

    7f94f8b (HEAD -> main) Initial commit from Astro

## Move back your changes to master branch

Now you need to move back your changes from your `master-backup` to `master`
```diff
# commits into the master-backup
+ 9fefe8a (HEAD -> master, origin/master, origin/HEAD) New post: Get Frontend Theme Updates Using Git
+ 27cc000 New post: Decorator pattern from open source code
+ 0e64c87 New post: A beginner's guide to setting up PHP on your computer
+ 1d132e6 [erison.work] new files added
+ 739e076 [AstroPaper] remove old posts
+ 063090b [AstroPaper][erison.work] local changes
e66898e Initial commit from Astro (v4.0.0)
```
[Cherry-pick][git-cherry-pick] one by one and solve the conflicts that appears.

After you finish you going to see something like this:
```
  9fefe8a (HEAD -> master, origin/master, origin/HEAD) New post: Get Frontend Theme Updates Using Git
  27cc000 New post: Decorator pattern from open source code
  0e64c87 New post: A beginner's guide to setting up PHP on your computer
  1d132e6 [erison.work] new files added
  739e076 [AstroPaper] remove old posts
  063090b [AstroPaper][erison.work] local changes
  7f94f8b (HEAD -> main) Initial commit from Astro
```
## Push your changes

Now you need to push your changes to `origin`
```
git push origin master --force
```
## Conclusion

The main key for this approach works is: keep your **git tree orginized**! this way you can Cherry-pick you commits easially betwenn backup branch and master, and use `rebase` besides `merge`, it will help you keep a simple  git tree.

If this guide helped you, or if you ran into any issues, let me know in the comments below!

[astro-paper]: https://github.com/satnaing/astro-paper
[astro-paper-commits]: https://github.com/satnaing/astro-paper/commits/main/
[git-cherry-pick]: https://git-scm.com/docs/git-cherry-pick
