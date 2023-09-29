---
publishedAt: '2023-01-22T15:42:12.174Z'
title: "Using Tags Instead Of Folders For In Obsidian"
featured: no
tags: 'obsidian, note-taking'
description: "Having folder hierarchy for organizing your notes is discouraged in Zettelkasten and in some modern note taking applications like Obsidian or Roam Research, but having a hierarchy has an advantage in quick search and retrieval of notes."
coverImage: '/assets/note-taking.jpg'
status: 'published'
author:
  name: 'Alex Pavlov '
  picture: 'https://avatars.githubusercontent.com/u/6662454?v=4'
slug: 'tag-based-hierarchy-for-note-taking'
---

## Table of contents

## Introduction

Having folder hierarchy for organizing your notes is discouraged in Zettelkasten and in some modern note taking applications like Obsidian or Roam Research, but having a hierarchy has an advantage in quick search and retrieval of notes.

There is a way to embed a hierarchy in your notes without using folders. With the approach described below you can instantly find any notes in the hierarchy. You can think of it like Redis cache for humans.

## The idea of the method

The simplest way to implement this approach is to add a tag to your notes that represent a hierarchy, e.g. `#root/programming/langs/python/operators/if-statement`

I use `#root` prefix to easy separate my hierarchy from all other tags.

Most note-taking applications have support for some sort of quick search for tags and it integrates nicely with it.

But you should understand that idea is not to use tags, but to have a way to quickly find your notes.

You can as well just use any text form you find convenient. Here is a couple of examples:

```
ID: programming/langs/python/operators/if-statement

if statement in Python is...
```

```
Path: programming>langs>python>operators>if-statement

if statement in Python is...
```

In this case any full-text file search will find all related notes, but nested tags usually have more extensive support in note taking applications.

Instead of tags you can name your files with this notation and use "." as a separator:

- programming.langs.python.operators.if-statement.txt

The disadvantage is that your file names becomes cluttered and harder to read. I prefer naming my notes as full phrases that reflects the idea in them for future reference from other notes. However, there is even whole company around this idea of file naming.

## Implementation in Obsidian

In Obsidian you can use Frontmatter to separate this hierarchy metadata from the note body:

```
---
tags:
  - root/programming/langs/python/operators/if-statement
---
```

The last part `if-statment` is basically your note identifier. I keep it unique as it serves a reference to a particular note.

You can easy view and refactor your hierarchies with the Tag Wrangler plugin:

![example](/assets/20230123000407.png)

If you use Obsidian's Quick Switcher plugin, you know it searches only file names. If you want to make it look up notes using your hierarchy you can use [aliases](https://help.obsidian.md/Linking+notes+and+files/Aliases) instead of tags:

```
---
alias: root/programming/langs/python/operator/if-statement
---
```

E.g. if I want to find all notes related to programming I can hit Win/Cmd + O to search for `programming/`:

![example](/assets/20230123000713.png)

Additionally, you can combine two approaches:

```
---
alias: programming/langs/python/operator/if-statement
tags:
  - root/programming/langs/python/operator/if-statement
---
```

This way you can the ability easy to refactor your notes with Tag Wrangler, but also a good integration with the Quick Switcher core plugin.

## Combining with other note taking methods

You can combine it with any other note-taking method. I successfully use it with Zettelkasten.
