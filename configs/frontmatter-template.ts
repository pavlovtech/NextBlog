import { format } from "date-fns";

export const defaultTemplate = 
`---
date: ${format(Date.now(), 'LLLL d, yyyy')}
title: 
featured: true
draft: false
tags:
  - anki
  - zettelkasten
summary: You can’t have an async constructor in C#, but sometimes you need to have async initialization logic.
---
`;