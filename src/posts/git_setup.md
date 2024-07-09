---
title: 'Setup Git'
imgUrl: '/post-images/git-setup.png'
youtubeId: ''
publishedAt: '2024-05-01'
summary: 'Setup Git and Github CLI'
---

## Install Git, Step 0

1. Install git

```bash
   sudo apt install git
```

2. Install Github CLI

```bash
(type -p wget >/dev/null || (sudo apt update && sudo apt-get install wget -y)) \
&& sudo mkdir -p -m 755 /etc/apt/keyrings \
&& wget -qO- https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
&& sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y
```

```bash
sudo apt update
sudo apt install gh
```

2.1. Auth (select web and https ways)

```bash
gh auth login

? What account do you want to log into? GitHub.com
? What is your preferred protocol for Git operations on this host? HTTPS
? Authenticate Git with your GitHub credentials? Yes
? How would you like to authenticate GitHub CLI? Login with a web browser
```

3. Create directory

```bash
mkdir GitHub
cd GitHub
```

4. Clone repository (example)

```bash
git clone https://github.com/JulioCCruzE/CLI_Tools
```
