---
title: 'Powerlevel10k'
imgUrl: '/post-images/p10k.png'
youtubeId: ''
publishedAt: '2024-05-02'
summary: 'Install Powerlevel10k and zsh terminal'
---

# Initial Setup, Step 1

Tools for develop code in linux

## Tools for ubuntu 24

### Install zsh

```bash
sudo apt install zsh
sudo csch -s /usr/bin/zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
sudo shutdown -r now
echo $SHELL
```

Edit and source the zshrc file:

```bash
vim ~/.zshrc
    ...
    ZSH_THEME="essembeh"
    ...
source ~/.zshrc
```

---

### Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

<!-- echo "eval \"\$($(brew --prefix)/bin/brew shellenv)\"" >> ~/.zshrc -->
<!-- -- $ (echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> ~/.zshrc -->

==> Next steps:

- Run these two commands in your terminal to add Homebrew to your PATH:

```bash
  (echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> /home/julio/.zshrc
    eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```

- Install Homebrew's dependencies if you have sudo access:
  sudo apt-get install build-essential
  For more information, see:
  https://docs.brew.sh/Homebrew-on-Linux
- We recommend that you install GCC:
  brew install gcc
- Run brew help to get started
- Further documentation:
  https://docs.brew.sh

Check the brew version and source again:

```bash
$ brew --version
$ source ~/.zshrc
```

https://docs.brew.sh/Homebrew-on-Linux

### Install powerlevel10K

```bash
sudo apt install build-essential
source ~/.zshrc
```

Install the font:

```bash
sudo apt install fonts-powerline
```

https://github.com/romkatv/powerlevel10k/blob/master/font.md

Install powerlevel10k

```bash
brew install powerlevel10k
echo "source $(brew --prefix)/share/powerlevel10k/powerlevel10k.zsh-theme" >> ~/.zshrc
source ~/.zshrc
```

p10k will prompt some questions, and you can choose the answer based on your personal preferences.

https://medium.com/@satriajanaka09/setup-zsh-oh-my-zsh-powerlevel10k-on-ubuntu-20-04-c4a4052508fd

If you need configure p10k again:

```bash
p10k configure
```

---

### Install Nord theme

```bash
cd GitHub
git clone https://github.com/nordtheme/gnome-terminal.git
cd gnome-terminal/src
./nord.sh
```

https://github.com/nordtheme/gnome-terminal

### Install Night owl theme

```bash
$ bash -c "$(curl -fsSL https://raw.githubusercontent.com/edurojasr/night-owl--gnome-terminal/master/night-owl.sh)"
```

https://github.com/edurojasr/Gnome-Terminal-Night-Owl-Theme?tab=readme-ov-file

---

### Better history completion

1. Copy the keys for up and down, cat command will help

```bash
   $ cat -v
   ^[[A^[[B
```

2. edit zshrc

```bash
vim ~/.zshrc
   [...]

    # history setup

    HISTFILE=$HOME/.zhistory
    SAVEHIST=1000
    HISTSIZE=999
    setopt share_history
    setopt hist_expire_dups_first
    setopt hist_ignore_dups
    setopt hist_verify

    bindkey "^[[A" history-search-backward
    bindkey "^[[B" history-search-forward
    "~/.zshrc" 126L, 4759B
    [...]
```

3. source

```bash
source ~/.zshrc
```

---

### zhs autosuggestions

```bash
brew install zsh-autosuggestions
echo "source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh" >> ~/.zshrc
source ~/.zshrc
```

---

### zsh syntax hightlighting

```bash
brew install zsh-syntax-highlighting
echo "source $(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ~/.zshrc
source ~/.zshrc
```
