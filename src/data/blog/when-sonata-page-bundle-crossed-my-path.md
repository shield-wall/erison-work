---
pubDatetime: 2026-05-09T18:00:00+02:00
title: "When Sonata Page Bundle crossed my path"
slug: when-sonata-page-bundle-crossed-my-path
featured: false
draft: false
tags:
  - open-source
  - public-work
description: My first experience with Sonata Page Bundle, why I started using it, and what I learned.
---

## Table of contents

## When did it start?

I descovered the [Sonata Page Bundle](https://github.com/sonata-project/SonataPageBundle) project when I was contracted to work at [Endava](https://www.endava.com/) (formerly Exozet).When I joined the company many projects had been built on top of Sonata Page Bundle, including mine! But I needed to look more in deep of Page Bundle, when we need to upgrade some dependencies, such as symfony and php. This project was kind of abandoned and it was a huge block not just for the project that I was working on, but for other companies' projects.

## Release a new major version

The Sonata Page bundle was the first open source project that I have worked on, and I didn't know where to start.
I started with a simple [Pull request](https://github.com/sonata-project/SonataPageBundle/pull/1309) just to understand the workflow.

A couple of months later, I opened an issue to orginise a new major release, [Verison 4.0](https://github.com/sonata-project/SonataPageBundle/issues/1495),
and Yeah it took a couple of months. But after a lot of discussion and ~40 PR we could have this Done 🥳.

## Some Relevante work

Well, most of the contributions to this project are really relevant. However, I would like to highlight some of them here:

- [Decouple Notification Bundle - Part 1](https://github.com/sonata-project/SonataPageBundle/pull/1434)
- [Decouple Notification Bundle - Part 2](https://github.com/sonata-project/SonataPageBundle/pull/1418)
- [Old command codes](https://github.com/sonata-project/SonataPageBundle/pull/1460)
- [Add Symfony runtime](https://github.com/sonata-project/SonataPageBundle/pull/1739)
- [Use Symfony string instead of slugify](https://github.com/sonata-project/SonataPageBundle/pull/1833)
- [All Pull request merged](https://github.com/sonata-project/SonataPageBundle/pulls?q=is%3Apr+author%3Aeerison+is%3Amerged)

## Conclusion

Well, I learnt a lot, including how to handle backwards compatibility. After releasing the new major version, we upgraded all dependencies, including PHP.
This work benefited my project and many others in the company.
