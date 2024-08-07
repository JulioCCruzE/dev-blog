---
title: 'CLI Tools'
imgUrl: '/post-images/cli-tools.png'
youtubeId: ''
publishedAt: '2024-05-03'
summary: 'Install some CLI tools for improve code develop'
---

# CLI_Tools, Step 2

More CLI Tools for develop code in linux

## Install fzf (for autocomplete search)

```bash
brew install fzf
```

Edit and source the zshrc file:

```bash
vim ~/.zshrc
    ...
    eval "$(fzf --zsh)"
    ...
source ~/.zshrc
```

---

## Install fd (better find command)

```bash
brew install fd
```

Clone the next github repository for integration with fzf:

```bash
cd ~/
git clone https://github.com/junegunn/fzf-git.sh.git
```

Add the next lines to the zshrc file:

```bash
vim ~/.zshrc
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

Source the zshrc file:

```bash
source ~/.zshrc
```

---

## Install bat (like cat but with format)

```bash
$ brew install bat
```

You can select the theme you like for bat. Edit and source the zshrc file:

```bash
vim ~/.zshrc
    ...
    export BAT_THEME=tokyonight_night
    ...
source ~/.zshrc
```

---

## Install delta

With this tool you can modify the view of some git commands (git diff, for example.).

```bash
brew install git-delta
```

Edit the gitconfig file with the options you like:

```bash
vim ~/.gitconfig
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

## Install eza (more powerfull that ls)

```bash
brew install eza
```

Modify the zshrc file in order to:

- Integrate bat and eza with fzf.
- Create an alias to use eza instead ls.
- Select the options you like for the behavior of eza. In this example, I decide to not show filesize, user, time and permissions.

```bash
vim ~/.zshrc
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

Source the zshrc file:

```bash
source ~/.zshrc
```

---

## Install tlrc (shows some tips on how to use commands)

```bash
brew install tlrc
```

For exemple, you can see tips of the eza command:

```bash
tldr eza
```

---

## Install thefuck (show some corrections for commands)

```bash
brew install thefuck
```

You can add an alias for thefuck command. Edit and source the zshrc file:

```bash
vim ~/.zshrc
    ...
    eval $(thefuck --alias)
    eval $(thefuck --alias fk)
    ...

source ~/.zshrc
```

Test thefuck, for example, type brw instead brew, and then use fk:

```bash
brw install zoxide
fk
```

---

## Install zoxide (better cd)

```bash
brew install zoxide
```

Create an alias to use zoxide instead cd. Edit and source the zshrc file:

```bash
vim ~/.zshrc
    ...
    eval "$(zoxide init zsh)"
    alias cd="z"
    ...
source ~/.zshrc
```

---

## Customize fzf's theme

Finally you can customize the theme of the fzf command. You need to edit and source the zshrc file once again:

```bash
vim ~/.zshrc
    # --- setup fzf theme ---

    fg="#CBE0f0"
    bg="#011628"
    purple="#B388FF"
    blue="#06BCE4"
    cyan="#2CF9ED"

    export FZF_DEFAULT_OPTS="--color=fg:${fg},bg:${bg},hl:${purple},fg+:${fg},bg+:${bg},hl+:${purple},info:${blue},prompt:${cyan}"

source ~/.zshrc
```
