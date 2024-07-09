---
title: 'CLI Tools'
imgUrl: '/post-images/cli-tools.png'
youtubeId: ''
publishedAt: '2024-05-03'
summary: 'Install some CLI tools for improve code develop'
---

# CLI_Tools Step 2

Tools for develop code in linux

Tools for ubuntu 22

zsh

install

```bash
$ sudo apt install zsh
$ sudo csch -s /usr/bin/zsh
$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
$ sudo shutdown -r now
$ echo $SHELL
```

```bash
$ vim ~/.zshrc
...
ZSH_THEME="essembeh"
...
$ source ~/.zshrc
```

---

Homebrew

Install

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
$ echo "eval \"\$($(brew --prefix)/bin/brew shellenv)\"" >> ~/.zshrc
-- $ (echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> ~/.zshrc

==> Next steps:

- Run these two commands in your terminal to add Homebrew to your PATH:
  (echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> /home/julio/.zshrc
    eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
- Install Homebrew's dependencies if you have sudo access:
  sudo apt-get install build-essential
  For more information, see:
  https://docs.brew.sh/Homebrew-on-Linux
- We recommend that you install GCC:
  brew install gcc
- Run brew help to get started
- Further documentation:
  https://docs.brew.sh

$ brew --version
$ source ~/.zshrc
```

---

fzf (for autocomplete search)

install

```bash
$ brew install fzf
$ vim ~/.zshrc
...
eval "$(fzf --zsh)"
...
$ source ~/.zshrc
```

---

fd (better find command)

Install

```bash
$ brew install fd
```

Integration with fzf

```bash
$ git clone https://github.com/junegunn/fzf-git.sh.git
```

```bash
$ vim ~/.zshrc
...
export FZF_DEFAULT_COMMAND="fd --hidden --stripcwd-prefix --exclude .git"
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
export FZF_ALT_C_COMMAND="fd --tyepe=d --hidden --strip-cwd-prefix --exclude .git"

\_fzf_compgen_path() {
fd --hidden --exclude .git . "$1"
}

\_fzf_compgen_dir() {
fd --type=d --hidden --exclude .git . "$1"
}

source ~/fzf-git.sh/fzf-git.sh
...
```

```bash
## $ source ~/.zshrc
```

bat (like cat but with format)

Install

```bash
$ brew install bat
$ vim ~/.zshrc
...
export BAT_THEME=tokyonight_night
...
$ source ~/.zshrc
```

---

delta

Install

```bash
$ brew install git-delta
$ vim ~/.gitconfig
...
[core]
editor = vim

[core]
pager = delta

[insteractive]
diffFilter = delta --color-only

[delta]
navigate = true
side-by-side = true

[merge]
conflictstyle = diff3

[diff]
colorMoved = default
...
```

---

eza (more powerfull that ls)

Install

```bash
$ brew install eza
$ vim ~/.zshrc
...
export FZF_CTRL_T_OPTS="--preview 'bat -n --color=always --line-range :500 {}'"
export FZF_ALT_C_OPTS="--preview 'eza -tree --color=always {} | head -200'"

\_fzf_comprun() {
local command=$1
shift

    case "$command" in
    	cd)		fzf --preview 'eza -tree --color=always {} | head -200' "$@" ;;
    	export|unset)	fzf --preview "eval 'echo \$' {}"	"$@" ;;
    	ssh)		fzf --preview 'dig {}'	"$@" ;;
    	*)		fzf --preview 'bat -n --color=always --line-range :500 {}' "$@" ;;
    esac

}

# --- Eza ---

alias ls="eza --color=always --icons=always --long --git --no-filesize --no-time --no-user --no-permissions"
...
```

```bash
## $ source ~/.zshrc
```

tlrc (shows some tips for use commands)

Install

```bash
$brew install tlrc
example
$tldr eza
```

---

thefuck (show some corrections for commands)

Install

```bash
$ brew install thefuck
$ vim ~/.zshrc
...
eval $(thefuck --alias)
eval $(thefuck --alias fk)
...
$ source ~/.zshrc
```

example

```bash
$brw install zoxide
$fk
```

---

zoxide (better cd)

Install

```bash
$ brew install zoxide
...
eval "$(zoxide init zsh)"
alias cd="z"
...
$ source ~/.zshrc
```

---

```bash
# --- setup fzf theme ---

$ vim ~/.zshrc

fg="#CBE0f0"
bg="#011628"
purple="#B388FF"
blue="#06BCE4"
cyan="#2CF9ED"

export FZF_DEFAULT_OPTS="--color=fg:${fg},bg:${bg},hl:${purple},fg+:${fg},bg+:${bg},hl+:${purple},info:${blue},prompt:${cyan}"

```
