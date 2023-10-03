---
title: 'How to Become a Badass .NET Developer'
status: 'published'
author:
  name: 'Alex Pavlov '
  picture: 'https://avatars.githubusercontent.com/u/6662454?v=4'
slug: 'badass-dotnet-dev'
featured: 'yes'
tags: 'csharp, career'
description: 'This article will describe a roadmap to becoming a badass .NET Software Engineer. I will start with the C# language itself and walk you through the frameworks and technologies you need to master on your journey.'
coverImage: '/assets/badass-dev-logo.webp'
publishedAt: '2023-03-20T15:42:12.174Z'
---

> Raise your quality standards as high as you can live with, avoid wasting your time on routine problems, and always try to work as closely as possible at the boundary of your abilities. Do this, because it is the only way of discovering how that boundary should be moved forward. © Edsger Dijkstra

This article will describe a roadmap to becoming a badass .NET developer. I will start with the C# language and walk you through the popular frameworks and technologies used in production.

This roadmap is pretty subjective as I describe recommendations primarily based on my own experience. However, I recommend only hand-picked topics and materials.

## Table of contents

## Step 1. Learn C# and .NET

I recommend Andrew Troelsen’s book Pro C# 10 with .NET 6: Foundational Principles and Practices in Programming. I learned C# from the old edition of this book 12 years ago and new editions still have excellent ratings on Amazon. Feel free to do your own research and find a good book for yourself, but find one good book and stick to it. In parallel, you can watch Youtube and video courses on platforms such as Pluralsight and Udemy, but only as an addition to reading the book.

![Pro C# 10 with .NET 6](/assets/book1.webp)

I think that reading a book is still the best way to learn a new programming language if you are a beginner. Nowadays we have myriads of good resources on the Internet, but you need to stay focused and not be distracted by every new shiny course or video. Do not get stuck in the tutorial hell when you keep switching from one tutorial to another looking for the best one without learning or coding anything. The book gives structure to your learning and a feeling of progress with every page.

Reading doesn’t mean learning and learning doesn’t mean memorizing. The best way to learn and memorize is to practice what you read. Write simple programs, and play with the language, debugger, the IDE. Write your own console utility that lists all the running processes or removes all the files from the folder. Create a simple WinForms app that keeps track of your weight. Write your own web scraper. Code something useful or useless just for the sake of it.

### Here is a list of good resources for learning C#:

1. [The C# Player’s Guide](https://www.amazon.com/C-Players-Guide-5th/dp/0985580151)
2. Microsoft’s [Introduction to C#](https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/tutorials/)
3. Microsoft’s [C# Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/)
4. [Popular learning materials from Microsoft](https://dotnet.microsoft.com/en-us/learn/csharp)

<!-- -->

<!-- -->

## Step 2. Learn ASP.NET framework

### ASP.NET Core

**ASP.NET Core** is a framework for creating web applications.

There are two parts to it:

1. ASP.NET Core Web API is used for creating the back-end for the applications.
2. ASP.NET Core Blazor is a framework for building client-side web applications.

<!-- -->

<!-- -->

Consider concentrating only on the first item — **ASP.NET Core Web API.** It is popular in the industry and you will see it used in production. As for **ASP.NET Core Blazor**, I do not recommend spending too much time on it as it’s not widely adopted and other front-end frameworks such as React or Angular are used in real-world applications.

There are more technologies in **ASP.NET**, but I will omit them because they are older or not widely adopted.

I recommend starting with the book ***Pro ASP.NET Core 6: Develop Cloud-Ready Web Applications Using MVC, Blazor, and Razor Pages*** by Adam Freeman to get a good overview of the platform.

![Pro ASP.NET Core 6](/assets/book2.webp)

Additionally, it’s worth learning [Swagger UI](https://swagger.io/tools/swagger-ui/) and [OpenAPI](https://www.openapis.org/) for documenting your APIs and [Postman](https://www.postman.com/) for testing them and trying out 3rd party APIs.

**Other good resources hand-picked by me:**

1. [ULTIMATE ASP.NET CORE WEB API](https://code-maze.com/ultimate-aspnetcore-webapi-second-edition/)
2. Microsoft’s [Tutorial: Create a web API with ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-6.0&tabs=visual-studio)

<!-- -->

<!-- -->

## Step 3. Learn SQL

Every software program works with data. The most popular and powerful language to manipulate data is SQL. It’s used in almost every project and you will get questions about it in every job interview.

As a software engineer, you don’t need to know all the ins and outs of SQL and SQL Server internals, but you should at least know the basics.

**Make sure you know the following topics as they often are asked in the interviews:**

1. [SQL Joins](https://www.w3schools.com/sql/sql_join.asp)
2. [SQL Data Types](https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver16) (e.g. nvarchar vs varchar)
3. [Clustered and nonclustered indexes](https://learn.microsoft.com/en-us/sql/relational-databases/indexes/clustered-and-nonclustered-indexes-described?view=sql-server-ver16)
4. [SQL Optimization](https://blog.devart.com/how-to-optimize-sql-query.html)

<!-- -->

<!-- -->

**I recommend picking a book and sticking to it. You can find the best books in the list below:**

1. SQL Cookbook by Anthony Molinaro
2. SQL in 10 Minutes, Sams Teach Yourself by Ben Forta
3. SQL Practice Problems by Sylvia Moestl Vasilik
4. SQL Antipatterns by Bill Karwin
5. Learning SQL by Alan Beaulieu
6. SQL Pocket Guide by Jonathan Gennick
7. The Art of SQL by Stephane Faroult
8. SQL Performance Explained Everything Developers Need to Know About
9. SQL Performance by Markus Winand

<!-- -->

<!-- -->

## Step 4. Learn ADO.NET framework and Entity Framework

ADO.NET allows you to use SQL in .NET to access a database. I recommend learning to use [Dapper](https://github.com/DapperLib/Dapper) as an object mapper instead of raw ADO.NET.

**Entity Framework** is an object-database mapper that allows you to access a database without writing SQL and work with objects instead of relational tables. It is widely used, but you should know SQL anyway to understand how to optimize the queries and troubleshoot performance issues.

**Recommended resources on ADO.NET:**

1. [Microsoft’s docs](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview)

<!-- -->

<!-- -->

**Recommended resources on Entity Framework:**

1. [Microsoft’s docs](https://learn.microsoft.com/en-us/ef/core/)
2. [Entity Framework Core in Action](https://www.manning.com/books/entity-framework-core-in-action-second-edition)
3. [Julie Lerman — Entity Framework Author \| Pluralsight](https://www.pluralsight.com/authors/julie-lerman?utm_source=google&utm_medium=paid-search&utm_campaign=upskilling-and-reskilling&utm_term=ssi-emea-xyz-dynamic&utm_content=free-trial&gclid=CjwKCAjw_MqgBhAGEiwAnYOAenDmbQyPl95Hhtmtk6olxpxlx695pTxBSigkX3IcYmvplRFfwEG29BoCQ5EQAvD_BwE)

<!-- -->

<!-- -->

## Step 5. Deepen your knowledge of .NET and C

To become an absolute beast in .NET you should extend your knowledge even further than I described before. I recommend two books that I always have on my bookshelf and review before every interview.

The first one is **CLR via C# by Jeffrey Richter**.

![CLR via C#](/assets/book3.webp)

This book is probably known to every .NET developer. It describes the internals of the framework, the mechanisms behind the asynchronous programming in .NET, how Garbage Collector works, and a lot more. It covers the topics that are often asked in interviews. It is a must-read if you want to be an expert.

The second book is [C# In A Nutshell by Joseph Albahari](https://www.amazon.com/C-9-0-Nutshell-Definitive-Reference/dp/1098100964).

![C# In A Nutshell](/assets/book4.webp)

It has a broad coverage of a wide range of topics. It is one of the best reference books on .NET you can have on your shelf. I like this book because it has one of the best materials on asynchronous programming, concurrency, parallelism, and LINQ. By the way, the popular interactive .NET scratchpad LINQPad is created by the book’s author.

## Step 6. Learn Design Patterns

Design patterns are reusable solutions to common reoccurring problems in software design.

I recommend two books. The first one is [Head First Design Patterns by Eric Freeman](https://www.amazon.com/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124). It is best for beginners because it is written in simple language with good examples.

![Head First Design Patterns](/assets/book5.webp)

The second one is Read Design Patterns: Elements of Reusable Object-Oriented Software. It’s more hardcore than the previous one and better suited for seasoned developers. Some claim that it is too abstract and complex, but actually, it is a pretty concise and thin book with clear pattern descriptions and examples. The only downside is that examples are written in C++, but you can skip them because the descriptions and diagrams give a very good overview of the patterns.

![Design Patterns](/assets/book10.jpg)

## Step 7. Learn Data Structures and Algorithms

Data structures and algorithms are something that you may not encounter in your everyday job, but they are crucial for passing the interviews in companies like FANG. Anyways, knowledge of this subject makes you a better developer capable of creating better software and solving complex problems.

If you are a novice, I certainly recommend the book [Grokking Algorithms](https://www.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230). It’s a friendly guide to algorithms with great illustrated examples.

![Grokking Algorithms](/assets/book6.webp)

For seasoned programmers, I recommend the book [Algorithms by Robert Sedgewick](https://www.amazon.com/Algorithms-4th-Robert-Sedgewick/dp/032157351X).

![Algorithms](/assets/book7.webp)

Additionally, the author has a great course on Coursera with the same name. Examples and assignments are in Java, but it should not be a problem as Java and C# are pretty similar.

## Step 8. Learn Software Architecture

Learn the following concepts:

1. Three-layer architecture
2. Microservice architecture
3. Message brokers
4. Domain Driven Design
5. [CQRS](https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs)
6. API Gateways
7. CI/CD

<!-- -->

<!-- -->

Resources:

1. [.NET Microservices: Architecture for Containerized .NET Applications](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/)
2. [Architect Modern Web Applications with ASP.NET Core and Azure](https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/)
3. [Dapr for .NET Developers](https://learn.microsoft.com/en-us/dotnet/architecture/dapr-for-net-developers/)
4. [Microservices Architecture and Implementation on .NET 5](https://www.udemy.com/course/microservices-architecture-and-implementation-on-dotnet) \- good course on Udemy.

<!-- -->

<!-- -->

## Step 9. Learn Microsoft Azure Cloud

Cloud technologies are omnipresent. If you stick to the Microsoft tech stack, I recommend learning Azure Cloud.

Make sure you are familiar with the following technologies:

1. [Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview)
2. [Azure ServiceBus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview)
3. [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/basic-concepts)
4. [Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview?tabs=net)
5. [Docker](https://docs.docker.com/get-started/)
6. [Kubernetes](https://kubernetes.io/docs/concepts/overview/)
7. Horizontal scaling
8. Virtual machines
9. [Azure API Management](https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts)

<!-- -->

<!-- -->

Resources:

1. [Architecting Cloud Native .NET Applications for Azure](https://learn.microsoft.com/en-us/dotnet/architecture/cloud-native/)

<!-- -->

<!-- -->

## Step 10. Learn NoSQL Databases

I recommend learning some main concepts of NoSQL databases such as the [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), clustering, sharding, and eventual consistency.

Get acquainted with the following DBs:

1. [MongoDB](https://www.mongodb.com/docs/manual/tutorial/getting-started/) — the most popular NoSQL document-oriented database.
2. [MongoDB - The Complete Developer's Guide](https://ciklum.udemy.com/course/mongodb-the-complete-developers-guide/) \- good video guide.
3. [CosmosDB](https://learn.microsoft.com/en-US/azure/cosmos-db/introduction) — highly scalable NoSQL database from Microsoft.
4. Redis — key-value in memory storage used as cache. To be frank, now it is not only in memory and not only key-value :)

<!-- -->

<!-- -->

As for books, I highly recommend [NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence](https://www.amazon.com/NoSQL-Distilled-Emerging-Polyglot-Persistence/dp/0321826620). So far, it is the best book on NoSQL I read.

![NoSQL Distilled](/assets/book8.webp)

## Step 11. 3rd party .NET libraries that are de facto standards in the industry

There are a number of great .NET libraries that became a standard in lots of projects and definitely worth checking out.

I came up with a list of hand-picked ones.NET libraries that I used extensively over the years.

1. [FluentValidation](https://docs.fluentvalidation.net/) — library for building strongly-typed validation rules. It is the most useful when you have complex validation logic for API requests.
2. [Serilog](https://serilog.net/) — best library for logging. It enables logging into a file, database, or console with just a few configuration lines.
3. [Automapper](https://automapper.org/) — library for mapping objects. With this library, you can get rid of repetitive code that maps your request models to DTOs or domain models.
4. [Dapper](https://dapperlib.github.io/Dapper/) — a simple object mapper for simplifying mappings from SQL query results to strongly typed models.
5. [Polly](https://github.com/App-vNext/Polly) — .NET resilience library which is mostly used to retry and rate limit some operations. Especially useful for high-load microservice architecture.
6. [Mediatr](https://github.com/jbogard/MediatR) — library for in-process messaging with support of request/response, commands, queries, notifications and events.
7. [Playwright](https://playwright.dev/) — modern library from Microsoft for end-to-end testing of web apps. Can be used for web scraping of client-rendered apps.
8. [Quartz.NET](https://www.quartz-scheduler.net/) — job scheduling system for .NET.
9. [Spectre.Console](https://spectreconsole.net/) — .NET library for creating beautiful console applications.
10. Moq — the most popular and friendly mocking library for .NET
11. [Hangfire](https://docs.hangfire.io/) — library for background job processing with embedded monitoring dashboard and persistent storage.

<!-- -->

<!-- -->

I hope you will find these libraries useful and use them in your projects.

## Step 12. Prepare for the interview

1. Be ready to describe your last project or prior experience
2. Write down all questions after every interview and process them to fill the gaps in your knowledge
3. Be comfortable with writing code on the whiteboard and explaining your thought process

<!-- -->

<!-- -->

One of the best books on interview preparation is [Cracking the Coding Interview by Gayle Laakmann McDowell.](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850)

![Cracking the Coding Interview](/assets/book9.webp)

Thanks for reading!

