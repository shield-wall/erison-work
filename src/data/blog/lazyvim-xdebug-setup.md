---
pubDatetime: 2025-05-21T14:00:00+02:00
title: "Automated Xdebug Setup in LazyVim Using Ansible"
slug: lazyvim-xdebug-setup
featured: true
draft: false
tags:
  - vim
  - php
  - ansible
  - docker
description: Simplify your PHP debugging setup in LazyVim using Ansible and Docker. A step-by-step guide to Xdebug integration.
---

## Table of contents

## Requirements

- [Lazyvim][lazyvim] / neovim
- [Ansible][ansible]
- Docker compose

> This article is based on my [lazyvim](https://github.com/eerison/lazyvim) and [.dotenv][dotenv] repositories.

## Setup

### Clone the .dotenv repository
```bash
git clone https://github.com/eerison/.dotfiles.git
```
### Run the ansible playbook
```bash
ansible-playbook -i hosts playbook.yaml -t lazyvim -t php
```
### Configure xdebug in your docker compose

Copy the [compose.override.yaml][compose-yaml] file into your project directory:
```bash
cp ~/.config/nvim-external/xdebug-config/compose.override.yaml ./<your-project-path>
```

> After you copy the file above, restart your containers.

### Configuration notes

- Your docker work directory must be `/app`, If it’s different, update it in the [php.lua][php-config] file.
- `compose.override.yaml` overrides the [app][app-container] container. If your container has a different name, update the override file accordingly.

## Troubleshooting

If you encounter issues, try the following options:

### Telnet

Check if you can connect on `9003` port using Telnet, you should see:
```
telnet localhost 9003

# Trying 127.0.0.1...
# Connected to localhost.
# Escape character is '^]'.
```
> type `Ctrl + ]` and then `close` to close telnet connection.

### Enable logs in Lua config
To debug more deeply, enable logging in the `php.lua` config file.
```diff
          type = "php",
          request = "launch",
          name = "Listen for Xdebug",
+         log = true,
          port = 9003,
```

> You can check more settings on [vscode-php-debug repository][vscode-config]

[dotenv]: https://github.com/eerison/.dotfiles
[vscode-config]: https://github.com/xdebug/vscode-php-debug?tab=readme-ov-file#supported-launchjson-settings
[app-container]: https://gist.github.com/eerison/a505bd545524ce99babe44653201b7dc#file-compose-override-yaml-L2
[php-config]: https://github.com/eerison/lazyvim/blob/main/lua/plugins/php.lua#L23
[lazyvim]: https://www.lazyvim.org/installation
[ansible]: https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#pipx-install
[compose-yaml]: https://gist.github.com/eerison/a505bd545524ce99babe44653201b7dc#file-compose-override-yaml
[astro-paper-commits]: https://github.com/satnaing/astro-paper/commits/main/
[git-cherry-pick]: https://git-scm.com/docs/git-cherry-pick
