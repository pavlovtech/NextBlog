---
title: 'Top 10 Insights About Web Application Optimization'
featured: 'no'
tags: 'javascrpt, optimization'
coverImage: '/assets/gear.jpg'
description: 'Web application optimization is crucial for any web app. You can improve web application performance with Static Site Generation, modern image formats, lazy image loading, Next.JS and Preact.'
status: 'published'
author:
  name: 'Alex Pavlov '
  picture: 'https://avatars.githubusercontent.com/u/6662454?v=4'
slug: 'top-10-insights-about-web-app-optimizations'
publishedAt: '2022-03-21T15:42:12.174Z'
---

## Table of contents

Web application optimization is crucial for any web app. You can improve the performance with Static Site Generation, modern image formats, lazy image loading, Next.JS, and Preact.

## Performance optimization techniques

Improving the performance of web applications can be tricky and in this article, I’m going to share some tips to alleviate this task for you. Some of these tips apply to all web applications and some are specific to Next.js.

Next.js is a framework built on top of React and NodeJs with support for server-side rendering (SSR), static site generation (SSG), typescript support, and great support for SEO.

But why use Next.JS in the first place instead of React or Angular?

Usually, when you develop your application with React, Angular, or ViewJs you create a Single Page Application, it is also called Client-Side Rendering. In this case, the browser gets an almost empty page, and then it’s filled by data returned by API.

But this approach is a bit obsolete for a wide range of applications because it has the following disadvantages:

1. The application should make HTTP calls to the server before rendering all data on the page and it takes time to load data and render it on the page.

2. SPA is not SEO friendly as the search engine crawler gets an almost empty page from the server with no data.

Next.JS supports Static Site Generation, Server Side Rendering as well as Client-Side Rendering and you can use all these approaches combined to improve web application performance and SEO without jeopardizing your development experience. If you are not familiar with these concepts, don’t worry because I will describe them in a nutshell.

## 1\. Static Site Generation (SSG)

![Web Application Optimization with Static Site Generation](/assets/ssg.png)

Static Site Generation to improve your site performance

Nothing can beat a simple static page in terms of low latency and rendering performance. You can prerender it with data and instantly return it from the server.

Prerendering means that you gather all data beforehand and create a static page with that data. Then you can even serve this page from the CDN closest to the user to decrease latency and make your page load with crazy speed.

If you return a static prerendered page from the server, it’s no longer necessary to make database calls, and no need for dynamic rendering on the client (if you don’t need it). This technique is called Static Site Generation (SSG).

The intriguing thing is that you are not even required to write the back end in a traditional way. Instead of creating a back-end API, you can write code that can fetch data directly from the database during Static Site Generation. For SSR you should provide the following methods for your page component:

1. getStaticPaths – Next.js will statically pre-render all the paths specified by this method.

2. getStaticProps – Next.js will pre-render the page at build time using the props returned by `getStaticProps`.

You just define what routes to prerender and what data should be used for prerendered pages, as simple as that.

Additionally, you can use Server Side rendering to create a page on the server per every request. It can be useful if you need to get the latest data from the server. But even in this case, you can use Static Site Generation instead with the use of Revalidate property. This property determines the amount in seconds after which a page re-generation can occur (defaults to `false` or no revalidation). So if you have a high-load web application and you need to have the most recent data every second you could just regenerate the page every second and serve it as a static file:

```javascript
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    // Next.js will re-generate the page:
    // - When a request comes in
    // - At most once every 1 seconds
    revalidate: 1, // In seconds
  };
}
```

You can learn more on the official [NextJS site](https://nextjs.org/docs/basic-features/data-fetching/overview).

## 2\. Modern image formats such as WebP and Avif

Images usually take the biggest part of your page size and have the biggest influence on your page loading time.

Nowadays JPEG and PNG are dead wood and there are much better alternatives. Consider the following modern formats:

1. WebP is a modern image format developed by Google. Images are 25% smaller in size than PNG and 25-24% smaller than JPEG without quality loss.

2. Avif offers a 50% smaller file size than JPEG. The biggest drawback for AVIF at present is that it lacks uniform support across browsers.

![Web Application Optimization with modern image formats](/assets/jpeg-vs-webp.jpg)

Web Application Optimization with modern image formats

I do not recommend using the Next.js Image component, `next/image`, as in practice it slows down the image loading time and doesn’t prove to be useful at the current stage.

## 3\. Image lazy loading

[HTTPArchive](https://httparchive.org/reports/page-weight) states that images take up the most bandwidth compared to other web resources and they are the most requested data type for the majority of websites.

It’s possible to optimize image loading by means of lazy loading. It is a technique to load images only when they are needed instead of loading them beforehand. Let’s say you have 100 images on the page. Probably only some of them are shown until a user scrolls down the page and you can postpone loading images that are currently not visible on the viewport and load them as a user scrolls the page.

With this approach, we have the following advantages:

1. Better performance and page load time give you a better user experience and page ranking on search engine results as performance is one of the factors that search engines use for ranking.

2. Less cost for data transfer. You can spend less money on the data transfer as images that are not needed are not going to be loaded.

The loading attribute allows you to postpone image loading:

```markup
<img src="image.png" loading="lazy" alt="…" width="200" height="200">
```

**Important note**: it’s recommended for images to have height and width attributes in order to avoid [layout shifts](https://web.dev/cls/) as the browser doesn’t know beforehand what space to reserve for images.

Read more in the following articles:

1. [Lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)

2. [Browser-level image lazy-loading for the web](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)

## 4\. Replace React with Preact to decrease bundle size (applicable to NextJs)

![Web Application Optimization with Preact](/assets/preact.png)

Web Application Optimization with Preact

Let me elaborate on the topic of React vs Preact to convince you that you should give Preact a try if you want to strip down your web application to a minimal size.

React + react-dom is 109 kb in size (34.8 kb gzipped). If you want to decrease your bundle size as much as possible and improve load time consider replacing React with Preact.

Preact is a fast 3kB alternative to React with the same API. Why there is such a big difference in size? Because Preact does not implement a [synthetic event system](https://reactjs.org/docs/events.html) for size and performance reasons.

Additionally, Preact works nicely with NextJs. Take a look at the official NextJs example with Preact [here](https://github.com/vercel/next.js/tree/canary/examples/using-preact).

## 5\. Use Bootstrap 5 the right

I do not recommend using [React Bootstrap](https://react-bootstrap.github.io/) instead of regular Bootstrap 5 if you strive for minimum bundle size and load time because React Bootstrap has a significant size overhead compared to Bootstrap.

**Important node**: If you use Bootstrap 5, [import only plugins that you need individually](https://getbootstrap.com/docs/4.0/getting-started/webpack/):

```javascript
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/dropdown";
```

## 6\. Do not use Moment.JS

I decided to write a separate paragraph about Moment.JS as it is still quite a popular library to work with dates in JavaScript.

Moment.JS is an old library that can even be the largest part of your application bundle. Even the official documentation states that there are better alternatives. It doesn’t work well with tree-shaking algorithms and it increases the size of web application bundles.

For further reading take a look at the following articles:

- [You don’t (may not) need Moment.js](https://you-dont-need.github.io/You-Dont-Need-Momentjs/#/)

- You Probably Don’t Need Moment.js Anymore

## 7\. Preload web fonts to speed up your website rendering

By default, font requests are delayed until the render tree is constructed, which can result in delayed text rendering.

It is possible to override the default behavior and preload web font resources using `&lt;link rel="preload"&gt;.`

Next.Js has built-in [font optimization](https://nextjs.org/docs/basic-features/font-optimization).

## 8\. Use a service worker to cache resources

A service worker is a proxy that sits between the web app, the browser, and the network (when available). It allows intercepting network requests and taking appropriate action based on whether the network is available such as caching or reading from the cache. With a service worker, you can cache static assets and API responses and create a Progressive Web App (PWA) that can be installed on mobile phones and used offline.

Once your resources are cached the app can render images, data, fonts, etc. instantly without the need to load them from the server.

See the official NextJs example [here](https://github.com/vercel/next.js/tree/canary/examples/progressive-web-app).

## 9\. Analyze your bundle

Finally, my last tip is to use tools that allow you to analyze your bundles and get rid of everything that you don’t need.

- VS Code plugin [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) shows the size of every import:

![Import Cost Plugin for High-Performance Web Apps](/assets/import-cost.gif)

Improving web app performance with the Import Cost plugin

- [Bundle Analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer) analyzes your Webpack output so that you can track down every dependency in your project:

![Analyzing output bundles to improve the loading speed](/assets/boundle.png> "Analyzing bundle to create High-Performance Web Apps")

Analyzing output bundles to improve the loading speed

Take a look at the full example with [bundle analyzer on Github](https://github.com/vercel/next.js/tree/canary/examples/analyze-bundles).

## 10\. Measure your web application performance with Lighthouse

Lighthouse is a tool for improving the quality of web pages. You can run it against any web page. It has audits for performance, accessibility, progressive web apps, SEO, and more.

The easiest way to run it is through Chrome Dev tools or web.dev.

After the run, you will get the following screen with the results:

![Measuring web application performance](/assets/lighthouse.png)

In this report, you will also find tips for improving your page.

## Conclusion

If you need the best performance and lowest load time, strip down your site to the bare minimum, and remove redundant packages such as Bootstrap and Material, MomentJs, etc. Compress your images and use modern image formats such as WebP and Avif. Pre-generate your pages with SSG.

Thank you for reading and I hope you found this article useful. If you have any questions, please let me know in the comments below.

