---
title: 'NGRX Store In Angular'
featured: 'no'
tags: 'ngrx, angular'
coverImage: '/assets/ngrx2.png'
description: 'Is it worth using NGRX in an Angular app?'
status: 'published'
author:
  name: 'Alex Pavlov '
  picture: 'https://avatars.githubusercontent.com/u/6662454?v=4'
slug: 'ngrx-store-in-angular'
publishedAt: '2022-07-30T15:42:12.174Z'
---

## Table of contents

NGRX Store in Angular is a global state management solution inspired by Redux. It claims to help write performant, scalable, and consistent applications.

![NGRX Store is overengineering](/assets/chart.jpeg)

## Why do we need the NGRX Store in Angular?

Let’s take a step back and think about what problem an NGRX Store solves.

State management libraries are usedul when components from different hierarchical levels need data from each other to pass that data to child components, so-called “extraneous props”.

In terms of Angular, we have @Input properties of the components that are not used directly by the parent component and just passed to children components. Another problem is emitting events several levels up in the hierarchy just to handle the event in top-level components.

In a nutshell, the NGRX store solves the problem of component communication at multiple disconnected places of the component hierarchy.

## Price for using NGRX Store

You have to pay the piper. The price for using the NGRX for state management is high:

1. A lot of boilerplate code when you need to create a bunch of files for every change, such as state model changes, reducers, actions, and selectors. That’s very cumbersome. The codebase becomes bloated with all of this “infrastructure code”.

2. Using RxJs with NGRX Store overcomplicates the code and you end up with lots of “reactive magic”.

3. A steep learning curve means that it’s harder to introduce new developers, and without understanding functional reactive programming and the RxJS library they tend to make lots of mistakes.

4. There are no clear guidelines regarding using NgRx Store. Some developers keep everything in the state and do everything through the store for consistency. Other developers argue that only global data used by multiple components should be stored in the state.

5. It’s hard to have both a regular angular way to do things (more on that later) and an NGRX way in the same app. You can’t mix it and easily add NGRX to the already existing project. Otherwise, you will end up with code where there are multiple ways to add new functionality and developers will be confused every time they need to deliver new features.

So using NGRX Store on our project led to the following problems:

1. Lots of boilerplate and bloated code;

2. Lack of FRP understanding among developers resulted in error-prone code;

3. Slower delivery of new features;

4. Lots of controversial architectural debates.

I don’t claim that these problems are going to be in every project with NGRX, but it just creates more problems than it solves.

## So why you don’t need the NGRX store?

I like Angular because it’s a very opinionated framework with clear guidelines and best practices and usually only one right way to do things. It’s a full-featured framework that already has everything built in.

And for component interaction and sharing state between components, we have a number of ways:

1. Services with Subjects that hold a shared state and are injected into components on any level of the hierarchy.

2. Passing data from parent components to the child with Input bindings.

3. Emitting events from child components with [EventEmitter](https://angular.io/api/core/EventEmitter) and listening to these events in the parent component.

4. Injecting the child component into the parent as a *ViewChild*.

And that’s not even all possible ways, you can read more in the [official docs](https://angular.io/guide/component-interaction#component-interaction).

NGRX Store can be a good approach in some rare cases, but chances are you don’t really need it and it’s better to follow the Angular way.

![Angular way is better then NGRX way](/assets/way.jpeg)Angular way

