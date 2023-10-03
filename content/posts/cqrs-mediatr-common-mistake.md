---
title: 'The wrong way to use CQRS and MediatR'
featured: 'yes'
tags: 'cqrs, dotnet'
description: 'This post will explore a common mistake in projects MetiatR and CQRS.'
status: 'published'
author:
  name: 'Alex Pavlov '
  picture: 'https://avatars.githubusercontent.com/u/6662454?v=4'
slug: 'cqrs-mediatr-common-mistake'
publishedAt: '2023-08-07T15:42:12.174Z'
---

## Introduction

Command Query Responsibility Segregation (CQRS) is a software architectural pattern that separates reading from writing operations, allowing for more scalable and maintainable code. MediatR is a popular library that enforces Domain-Driven Design (DDD), facilitating this separation. This post will explore a common mistake in projects using these tools: sending requests inside handlers or using nested handlers.

## The Problem: Nested Handlers and Code Coupling

### What Are Handlers?

Handlers are classes responsible for executing business logic in response to specific requests or commands.

### The Common Mistake

I've noticed that a frequent mistake in projects is sending requests inside handlers or using nested handlers to reuse code and avoid duplication. Here's a code snippet:

```csharp
public class MyHandler : IRequestHandler<MyRequest, MyResponse>
{
    private readonly IMediator _mediator;

    public async Task<MyResponse> Handle(MyRequest request, CancellationToken cancellationToken)
    {
        var anotherResponse = await _mediator.Send(new AnotherRequest(), cancellationToken);
        // More logic here...
    }
}
```

This practice introduces additional indirection and makes the code more confusing to read or debug. Worst of all, it leads to additional coupling, meaning that when you change one handler, it affects dependent handlers.

Consider a large-scale project with multiple handlers, each depending on others. A minor change to one handler might have unforeseen consequences on others, leading to hidden bugs and increasing the time required to debug and maintain the code.

## MediatR as the Entry Point to Your System

MediatR should be on the edge of your system, serving as an entry point to your domain business logic. It should just convert HTTP requests to your domain-specific requests and send them into the application layer. Misusing it by nesting handlers can lead to the issues described above.

## Solutions: Where Should Your Logic Go?

So where should your logic go? You have multiple options:

1. Domain Service or Dedicated Class: You can create specific classes that encapsulate the shared logic.
2. Base Handler Class: Inheritance can be used to share common logic across handlers.
3. Extension Method: Create extension methods that can be reused across different handlers.
4. Other Custom Solutions: Tailored to your specific requirements and architecture.

<!-- -->

<!-- -->

## Testing Considerations

When handlers are nested or interdependent, it creates a chain of dependencies that can make testing more complex:

1. Isolation Difficulty: Testing a single piece of functionality may require setting up multiple handlers' dependencies, making unit tests cumbersome to write and maintain.
2. Brittle Tests: Changes to one handler may break tests for other handlers that depend on it, leading to increased maintenance efforts.
3. Hidden Behavior: Testing a handler that relies on other handlers may conceal what exactly is being tested, leading to potential gaps in coverage or misunderstood test results.

<!-- -->

<!-- -->

By avoiding nested handlers, testing becomes more straightforward, allowing you to isolate and test individual components more easily.

## Conclusion

Avoiding nested handlers in CQRS with MediatR leads to cleaner, more maintainable code, free from unnecessary complexity and coupling. By applying regular refactoring techniques and moving common logic to dedicated places, you can enhance your code quality and avoid confusion down the road.

