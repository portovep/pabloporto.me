---
title: 'Minimal macOS development setup for 2022'
date: '2022-10-31'
type: 'Post'
tag: 'Draft'
---

Every three years or so my work laptop gets renewed. Every time I have to set it up from strach.
This year I took the opportunity to look at my current setup with the pareto's principle in mind. What are the 20% of the tools and configurations that I leverage or use 80% of the time? In other words, what are the minimum vital few things I should setup to stay productive as a professional software developer.

## Getting Started

If you are starting from scratch like me, I recommend starting by installing all the latest OS level updates. The first step is to install and upgrade the xcode command line tools.

```bash
xcode-select --install
```

## The package manager

One of the frist tools we need is a package manager. For macOS I recommend brew. You can install it with a simple command.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Finally, update brew and make sure everything is working fine with the following commands.

```bash
brew update
brew doctor
```

## Security

Following the principle of [shifting left security](https://snyk.io/learn/shift-left-security/), lets first configure some sensible defaults to keep our Mac protected.

-   Enable file encryption with FileVault.
-   Enable the firewall.
-   Setup a strong password for your OS user and enable touchid if required.
-   Install your password manager of choise so we can login into services and apps going forward. I use and recommend [1Password](https://1password.com/).
-   Install any pending security updates.

### Setting up automatic updates

Coming soon...

## The terminal

As developers, we spend most of the time either in the IDE, the terminal or a browser. There are two important choices to make regarding our terminal setup: the shell and the terminal app you use. Over the years I defaulted to ZSH for the shell and Hyper for the app.

### Setting up Zsh

The newest versions of macOS come with Zsh installed. On top of that, I manage my Zsh configuration with [OhMyZsh](https://ohmyz.sh/).

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

and I setup the following plugins and theme in `.zshrc`

```bash
ZSH_THEME="gallois"

plugins=(
  git
  autojump
  vagrant
)
```

### Setting up Hyper

```bash
brew install --cask hyper
```

Next step is to edit the configuration. I increase the font size and leave everything else as default.

```bash
vim ~/Library/Application Support/Hyper/.hyper.js
```

## The code editor or IDE

Coming soon..

## The version control system

Git has become the standard for version control systems.

Setup your global Git config

```bash
vim ~/.gitconfig
```

This is how mine looks like

```bash
[user]
name = "Pablo"
email = "personal email"

[alias]
st = status
lol = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit

[core]
excludesfile = ~/.gitignore_global

[pull]
rebase = false

[includeIf "gitdir:~/Dev/work/"]
path = ~/.gitconfig-work
```

I also configure a globa .gitignore.

```bash
# ~/.gitignore_global

# OS generated files #
######################
.DS_Store
.DS_Store?

# IDEs #
######################
.idea
```

If you use your laptop for both personal and work projects, you can isolate your work config in a separate file. The statement `includeIf` allows you to specific a different config file that will only apply in the directory & subdirectories set with `gitdir`. This is an example of my separate file for work.

```bash
[user]
   name = "Pablo@work"
   email = "work@email.com"
[core]
   sshCommand = "ssh -i ~/.ssh/work.ssh.key"
```

## SSH

Create a ssh config to simplify how you connect to remote machines (and how you pull code from Github & co).

```bash
vim ~/.ssh/config
```

```bash
Include ssh_config_work

Host github.com
	IdentityFile ~/.ssh/personal_private_key

Host bitbucket.org
	IdentityFile ~/.ssh/personal_private_key
```

As we did for the Git config, you can isolate your work config into a separate file using `Include`. This is how my work ssh config looks like.

```bash
#Work

Host github.com-work
	HostName github.com
	AddKeysToAgent yes
	UseKeychain yes
	IdentityFile ~/.ssh/work_private_key

Host work-machine.training
    User ec2-user

```

## Runtime version manager

Dealing with multiple versions of language runtimes is painful. When you work on different projects, you will need to switch versions of the different runtimes: node, java, etc. Installing version managers for each runtime will make your life easier.

### Node

Node Version Manager or [NVM](https://github.com/nvm-sh/nvm) is my preferred choice to manage active Node.js versions.

```bash
brew install nvm
```

After installing nvm we need to add the following piece of configuration in our ZSH config file.

```bash
# ~/.zshrc

export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
```

### Java

Coming soon..

## Docker as container runtime

Since Docker Desktop change its licensing in mid 2021, several alternatives to run Docker in macOS popped up. My favourite so far is [Colima](https://github.com/abiosoft/colima).

With the following steps we can have a fully working Colima-based Docker setup in our Mac:

```bash
brew install colima
brew install docker
brew install docker-compose
```

## MacOS configuration

Coming soon..

## Productivity apps

Other apps that I use to stay productive.

| Application | Purporse                                  |
| ----------- | ----------------------------------------- |
| Rectangle   | Window manager                            |
| Flux        | Screen eye protection                     |
| 1password   | Password manager                          |
| Mural       | Online whiteboarding                      |
| Figma       | Prototyping                               |
| Todoist     | Task manager                              |
| Notion      | Knowledge base / digital garden           |
| Spotify     | Music                                     |
| Chrome      | Browser                                   |
| Slack       | Communication and communities             |
| AppCleaner  | Managing MacOS apps not installed by brew |
| Steam       | Games                                     |
| Obsidian    | Secure notes                              |

If you are curious what are my default choices for building frontend, backend and data applications you can check [my prefered tech stack](/stack).

## Conclusions

This is my current minimal macOS developer setup. I will keep updating this post as I finish setting up my laptop. Stay tuned!
