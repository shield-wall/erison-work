---
pubDatetime: 2026-05-20T15:50:00+02:00
title: "Proxmox notes"
slug: proxmox-notes
featured: false
draft: false
tags:
  - notes
  - devops
description: It is my personal notes for things related with proxmox
---

## Table of contents

## Troubleshooting

### Fsck error 

When start an Virtual machine, and you see in **console**, an error related with `manual fsck`, try to execute steps bellow.

```
#Error message

(Initramfs): /dev/sda1 contains a file system with errors, check forced.
  Inodes that were a part of a corrupted orphan linked lost found.
  /dev/sda1 : UNEXPECTED INCONSISTENCY; RUN fsck manually.(I.e .,
  without -a or -p options). fsck exited with status code 4. The root
  filesystem on /dev/sda1 requires a manual fsck
```

In VM console run the command
 ```bash
fsck -yf /dev/sda1
```

`exit` the console and `restart` the VM

>[!INFO]
> Reference: [Ask ubuntu forum](https://askubuntu.com/questions/885062/root-file-system-requires-manual-fsck)

