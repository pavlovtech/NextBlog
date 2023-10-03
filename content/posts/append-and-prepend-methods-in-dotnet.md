---
title: 'Two Useful Methods of IEnumerable'
author:
  name: 'Alex Pavlov '
  picture: 'https://avatars.githubusercontent.com/u/6662454?v=4'
slug: 'append-and-prepend-methods-in-dotnet'
status: 'published'
featured: 'no'
tags: 'csharp, dotnet'
description: 'A nice and functional way to add a single element to the IEnumerable collection'
coverImage: ''
publishedAt: '2023-09-06T16:42:28.000Z'
---

I found myself writing this piece of code:

```csharp
var allTexts = new List<Text>();
allTexts.Add(introText);
allTexts.AddRange(texts);
allTexts.Add(conclusionText);
```

Here I needed to create a new list containing another list and add one element to the beginning and to the end.

If it were JS, I would write something like this:

```csharp
const allTexts = [introText, ...texts, conclusionText];
```

It utilizes destructuring to embed texts in the middle of the new array. It is a cleaner way to do it in a functional style.

C# doesn't support array destructuring. One way to rewrite the C# code above is this:

```csharp
var allTexts = (new Text[] { introText }).Concat(texts).Concat((new Text[] { conclusionText }));
```

This is even uglier than before. Fortunately, now C# has Prepend and Append methods out of the box:

```csharp
var allTexts = texts.Prepend(introText).Append(conclusionText);
```

*Note: Prepend and Append methods do not modify the elements of the collection. Instead, they create a copy of the collection with the new element.*

