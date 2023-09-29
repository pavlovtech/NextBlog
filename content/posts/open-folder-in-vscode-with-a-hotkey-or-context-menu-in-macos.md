---
publishedAt: '2020-06-10T15:42:12.174Z'
title: "Open Folder In VSCode Using A Context Menu in MacOS"
featured: no
tags: 'vscode, macos'
coverImage: "/assets/code-in-vs.jpg"
description: I’m used to the Open in VSCode context menu action in Windows, but it was missing in MacOS. So I found how to add it and want to share it.
status: 'published'
author:
  name: 'Alex Pavlov '
  picture: 'https://avatars.githubusercontent.com/u/6662454?v=4'
slug: 'open-folder-in-vscode-with-a-hotkey-or-context-menu-in-macos'
---

# Open a folder in VSCode with a hotkey or context menu in MacOS

I’m used to the Open in VSCode context menu action in Windows, but it was missing in MacOS. So I found out how to add it and want to share it.

**Add VSCode to the quick action context menu:**

- Open Automator application
- Select Quick Action
- Set “Workflow receives current” to `files or folders` in `any application`
- Find a `Run Shell Script` action and drag it to the right pane
- Copy and paste the following code:

```
for f in "$@"; do open -a 'Visual Studio Code' "$@" done
```

- Set “Pass input” to `as arguments`
- Save as `Open in Visual Studio Code`

**Assign a hotkey:**

- Open “System Preferences”
- Select “Keyboard” then the “Shortcuts” tab
- In the left pane, click on “Services”
- In the right pane, scroll to “Files and Folders”
- Select “Open in Visual Studio Code” and click “add shortcut”
- Select a shortcut
