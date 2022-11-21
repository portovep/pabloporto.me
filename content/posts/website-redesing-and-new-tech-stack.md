---
title: 'Redesign and new stack: Version 5.0'
date: '2022-11-20'
type: 'Post'
tag: 'Website'
---

Once in a while, I get tired of the design of my
website or its technical stack and start tinkering around. Having a personal website as a pet project has helped me to stay up to date with modern front-end development.

![Version 5.0 of the website](/images/posts/website-version-5-framed.png 'Version 5.0 of the website')

Over the last year, I have been working on a full redesign and rewrite of this website. What is now version 5 started as an attempt to learn new technologies, Next.js and TaildwindCSS. I thought this milestone would be a good opportunity to reflect on the different rewrites and redesigns I have done over the years. Thus, I decided to jump into the [Wayback Machine](https://web.archive.org/) and write what I like to call a retrospective changelog. Here it goes.

## Changelog

### Version 1.0 - 2008

![Version 1.0 of the website](/images/posts/website-version-1-framed.png 'Version 1.0 of the website')

In the mid 2000s blogging was already very popular. I wanted a quick way to start writing and sharing my ideas so I decided to build a blog.

The setup I went for was quite simple. I choose one of the most known CMS, WordPress, and I hosted the site in one of the popular VPS-based hosting providers of the time. I tried to find a more representative screenshoot of the site using Wayback Machine but I failed.

| Purpose  | Tool      |
| -------- | --------- |
| Core     | Wordpress |
| Content  | Wordpress |
| Styles   | Plain CSS |
| Hosting  | VPS       |
| Features | Blog      |

### Version 2.0 - October 2013

![Version 2.0 of the website](/images/posts/website-version-2-framed.png 'Version 2.0 of the website')

In September 2013, I finished my master's in Networks and distributed systems. I took a few months to prepare for job interviews and look for my first job as a software engineer. I had quite a lot of free time so I decided to create a portfolio from scratch to share my CV.

Inspired by [this post](https://www.allthingsdistributed.com/2011/08/jekyll-amazon-s3.html) by Amazon CTO Werner Vogels. I choose [Cactus](https://jamstack.org/generators/cactus/) as a Python static site generator. I used AWS S3 for serverless hosting as I was starting to learn about cloud technologies back then.

| Purpose  | Tool                         |
| -------- | ---------------------------- |
| Core     | Cactus, Python               |
| Content  | HTML, Django template system |
| Styles   | Bootstrap, Fontawesome       |
| Hosting  | AWS S3                       |
| Features | Portfolio, Online CV         |

### Version 3.0 - December 2014

For version 3, I decided to migrate the tech stack to host the website for free on GitHub Pages. I replaced Cactus for [Jekyll](https://jamstack.org/generators/jekyll/) as a static site generator. The fact that I was working with Ruby at work at the time influenced my choice.

I also migrated the content from HTML to YAML. I honestly don't remember why I didn't choose another more text-friendly format like Markdown.

| Purpose  | Tool                   |
| -------- | ---------------------- |
| Core     | Jekyll, Ruby           |
| Content  | YAML files             |
| Styles   | Bootstrap, Fontawesome |
| Hosting  | Github Pages           |
| Features | Portfolio, Online CV   |

### Version 4.0 - July 2017

Version 4 was another tech stack migration. The most time-consuming and complex to date. I was learning React and Redux and I wanted to have a pet project to practice those technologies. I started by creating a web application that offered the same functionality as the Jekyll site.

I managed to learn a lot about creating single-page applications or SPA. I was reading the book [Atomic Design](https://www.goodreads.com/en/book/show/35496817) and working with [Storybook](https://storybook.js.org/) at work so I also used this version of the website to learn how to create my own design system and a component library. This is another example of how using the site as playground helped me to stay up to date and develop new skills.

From an SEO perspective, it was a terrible decision. Moving from a [Jamstack](https://jamstack.org/) architecture to [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA) made it hard for the SEO crawlers to index my content.

| Purpose  | Tool                    |
| -------- | ----------------------- |
| Core     | React, Redux, Storybook |
| Content  | JSON                    |
| Styles   | Bootstrap, Fontawesome  |
| Hosting  | Github Pages            |
| Features | Portfolio, Online CV    |

### Version 5.0 - March 2021

![Version 5.0 of the website: Making page](/images/posts/website-version-5-about-framed.png 'Version 5.0 of the website: Making page')

Version 5 is the one you are probably seeing right now. I decided to go back to the Jamstack architectural style of versions 2 and 3 but keeping React and JavaScript as the core technologies.

I choose [NextJS](https://jamstack.org/generators/next/) as a static site generator and React framework. I was curious about modern react frameworks so I decided to get some experience with them. The same happened with [TailwindCSS](https://tailwindcss.com/). The design was a bit old so I took the opportunity to do a complete re-design and learn about [utility-first CSS frameworks](https://medium.com/@sascha.wolff/utility-first-css-ridiculously-fast-front-end-development-for-almost-every-design-503130d8fefc).

One of the goals of this version was to build a site that allowed me to go back to blogging. I wanted a workflow that allowed me to quickly create blog posts or notes and share them on the site. I migrate the content to Markdown so I can write and edit the content in minimalist tools like [Obsidian](https://obsidian.md/) and easily copy and paste it into the codebase.

I also change the infrastructure. From GitHub Pages to [Vercel](https://vercel.com/). I was quite impressed by the developer experience of Vercel as a platform. I
really recommend to give a try to anyone looking for a simple hosting solution.

I didn't move away from GitHub completely. When I started doing this rewrite, I was quite excited about GitHub Actions. I went to create a continuous deployment pipeline for the blog based on a [trunk-based development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development) workflow. I don't create pull requests for new changes (except for the ones created by Dependabot). I push directly to master and I trust the automated quality gates I created in the pipeline to do their job. You can checkout the pipeline in action [here](https://github.com/portovep/pabloporto.me/actions/runs/3392341840).

| Purpose  | Tool                                       |
| -------- | ------------------------------------------ |
| Core     | NextJS, React, TypeScript                  |
| Content  | Markdown                                   |
| Styles   | TailwindCSS                                |
| Hosting  | Vercel                                     |
| CI/CD    | Github Actions                             |
| Features | Blog, Portfolio, Online CV, Travel tracker |

## Take aways

As you can see, this website has changed quite a lot over the years. Writing this post allowed me to reflect on how much time I put into making these changes both in the design and the code. Was it worth it? Could I spend that time on something more productive like writing more or building an app? Maybe.

I still think the main ROI of these efforts has been the ability to have a playground to learn and develop new front-end skills that I could apply in my day-to-day job. I have many examples of technologies I was able to understand better after applying them to my website: CSS, SaSS, TypeScript, Storybook, and Next.js. TailwindCSS, Atomic Design. GitHub Actions...

I am always checking other people's websites [to get inspiration](https://austinkleon.com/steal/). Do you have one you want to share? Reach out to me on [Twitter](https://twitter.com/portovep). Finally, I want to share some of the personal websites that inspired me to improve mine and write this.

-   [brianlovin.com](https://brianlovin.com/writing/how-my-website-works?utm_source=pocket_reader)
-   [kentcdodds.com](https://kentcdodds.com/blog/how-i-built-a-modern-website-in-2021)
-   [maggieappleton.com](https://maggieappleton.com/garden-history?utm_source=pocket_reader)
-   [taniarascia.com](https://www.taniarascia.com/redesign-version-6/)
