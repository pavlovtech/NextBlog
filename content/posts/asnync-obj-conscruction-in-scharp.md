---
title: 'Asynchronous Initialization In C#'
status: 'published'
author:
  name: 'Alex Pavlov '
  picture: 'https://avatars.githubusercontent.com/u/6662454?v=4'
slug: 'asnync-obj-conscruction-in-scharp'
featured: 'no'
tags: 'csharp, dotnet'
description: 'You can’t have an async constructor in C#, but sometimes you need to have async initialization logic.'
coverImage: ''
publishedAt: '2023-09-06T15:42:12.174Z'
---

You can’t have an async constructor in C#, but sometimes you need to have async initialization logic.

There are two main ways to construct an object asynchronously: using a Factory Method Pattern and an Asynchronous Initialization Pattern.

## Factory method

Async constructor is not possible in C#, but you can have an async static method that constructs your object. It is basically a factory method pattern:

```csharp
public class ClassWithAsyncInit
{
  private Data data;

  private ClassWithAsyncInit() { }


  public static async Task CreateAsync()
  {
    var instance = new ClassWithAsyncInit();
    instance.data = await GetDataAsync();

    return instance;
  }
}
```

In this example the constructor is private, so the object cannot be created directly, only via the CreateAsync method.

## Asynchronous Initialization Pattern

In this pattern, you call the asynchronous init method in the constructor and save the task to the class field.

```csharp
public class ClassWithAsyncInit
{
    public ClassWithAsyncInit()
    {
        Initialization = InitializeAsync(); // start off the async init
    }

    public Task Initialization { get; private set; }

    private async Task InitializeAsync()
    {
        // your async init code
    }
}
```

The initialization field represents a Task for asynchronous object initialization.

Then the client can wait for it to finish:

```csharp
var test = new ClassWithAsyncInit();
await test.Initialization();
```

The problem with this approach is that after the constructor finishes the object is not fully initialized and if the client code doesn’t await the init task there will be an exception or incorrect behavior.

To mitigate this problem you can encapsulate the initialization task and await it every public method:

```csharp
public class ClassWithAsyncInit
{
    public ClassWithAsyncInit()
    {
        Initialization = InitializeAsync(); // start off the async init
    }

    private Task Initialization { get; private set; }

    private async Task InitializeAsync()
    {
    // your async init code
    }

    public async Task FirstMethod()
    {
        await Initialization;

        // ... other code
    }

    public async Task SecondMethod()
    {
        await Initialization;

        // ... other code
    }
}
```

The advantage is that client will not care about awaiting the Initialization task, but the downside is that it’s not very convenient if you have a lot of methods in your class and have to await the init task in each one.

