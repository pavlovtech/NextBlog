---
date: August 6, 2023
title: Two useful methods of IEnumerable in .NET
featured: false
draft: false
tags:
  - csharp
  - dotnet
summary: A nice and functional way to add a single element to the IEnumerable collection
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

```js
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

Note: Prepend and Append methods do not modify the elements of the collection. Instead, they create a copy of the collection with the new element.
