---
title: 'What it’s like to be a developer in my current project'
date: '2017-10-05'
---

I recently came across [a really interesting article](https://increment.com/development/what-its-like-to-be-a-developer-at/) published on Increment, a digital magazine that shares ideas on how effective software teams work together. The author asks a set of questions to software developers and managers from what can be considered great product companies in the software industry about how is it to be a developer in their teams.

I don’t work or have worked for a product company, but I thought it would be interesting to answer the same set of questions so that I can see how my current experience in an agile software development team may differ from the ones in the original article.

I work as a software consultant for a company called [ThoughtWorks](https://www.thoughtworks.com/). As part of my job, I usually get involved in the delivery of at least a couple of software products every year, mostly by advising our clients to improve the ways they engineer those products and pairing with their engineering teams to build them.

I am currently working for a government organisation helping to evolve a loan assessment platform. Although all the answers reflect my experience as a developer in this specific project, I think they can be applied to most of the projects I have been involved with recently.

## What are the most common tools that developers use?

Most of the developers use IntelliJ as IDE for JavaScript, Clojure and Java. We really like the integration with Jest to run individual tests with a simple keyboard shortcut. We use the [Cursive](https://cursive-ide.com/) plugin to deal with Clojure’s parenthesis in a productive way. While the IDE is not enforced, having the same one with a shared setup proves more efficient for pair programming.

Git and Gitlab are used for source control, combined with [DevKit](https://github.com/saki/devkit) to manage GitLab identities while pair programming. [Mingle](https://www.thoughtworks.com/mingle/) is used for both project management and as a knowledge base. We use HipChat as IM and IBM Notes as email solution.

We run our development environment in a Vagrant VM running CentOS (RHEL in production) on a Windows host. Developers use [GoCD](https://www.gocd.org/) for CI/CD, Kibana (ELK) for logging, Graphite for metrics and Icinga for monitoring and alerting.

## Which languages do developers code in?

Most of our backend (micro)services are written in Clojure, with some written in Java 8. We have around 25 in total. New services are usually created in Clojure. We are able to spin up a new one quite quickly by combining automation techniques like a [service template](https://www.thoughtworks.com/radar/techniques/tailored-service-template) for [Leiningen](https://leiningen.org/) that includes all the common libraries and [pipeline as code](https://www.thoughtworks.com/radar/techniques/pipelines-as-code) for GoCD.

For the back office web application we are slowly refactoring a 4 years old single page application with React/Redux using ES6 JavaScript. This frontend was built with a mix of vanilla JavaScript, jQuery and Knockout . We develop new functionality features using the new stack.

## What is the development process like? (the lifecycle of a piece of committed code)

The requirements for a new product or feature usually come from Government’s policy. These requirements ultimately get split into user stories and assigned to a cross-functional team. The developers help the business analysts (BAs) and quality analysts (QAs) in the team to review the story from a technical perspective. When [the three amigos](<https://www.agilealliance.org/glossary/three-amigos/#q=~(filters~(postType~(~'page~'post~'aa_book~'aa_event_session~'aa_experience_report~'aa_glossary~'aa_research_paper~'aa_video)~tags~(~'three*20amigos))~searchTerm~'~sort~false~sortDirection~'asc~page~1)>) think that the story is ready to be played, it is moved to the next stage in our physical (and digital) Kanban wall, “ready for dev”.

After that, a pair of developers start working on the story. We swap pairs every two or three days in order to share context as much as possible. The pair that started the story may not be the same that completes it, although one of the people usually sticks with the story till completion. When the story is ready, it is desk-checked by the three amigos again. The QA then starts analysing the quality of the functionality built through exploratory testing and at the same time assessing test coverage and cross-functional requirements.

When the QA finishes and the product owner (PO) is available, the story is showcased to the PO to get it signed off, authorising it to be released. If the PO is happy, the story is moved into ready for release, usually being released the next day.

## What is code review like?

We don’t have many code reviews. We work on the principle that all production code should be delivered by doing pair programming. Developers pair with their peers and always push changes to master ([trunk-based development](https://paulhammant.com/2013/04/05/what-is-trunk-based-development/)). We do use additional branches to explore technical solutions, like assessing a new library or a new design.

Sometimes, the tech lead or feature leads review other people code **after they pushed to master** to ensure the technical direction is kept and new changes do not break or impact the design of a service or the system as a whole.

## How is testing done, and what kind of tests are run?

Developers write unit (we follow TDD), integration, service/functional level tests. They also help the QAs to write automated end to end tests that exercise the whole system, some of them through the UI. We also have [snapshot tests](https://storybook.js.org/testing/structural-testing/) for our reusable React components (thanks to Storybook.js and Jest) and some contract tests between microservices and external services using [Pact](https://docs.pact.io/).

In addition to the local development environment, all these tests run in the build and deployment pipelines of our continuous delivery pipeline. The QAs also perform some exploratory testing in a staging environment, mostly through the UI and sometimes through Swagger, the tool we use to document our REST APIs.

## How is code deployed?

We push to master all the time, which means that each individual commit must be able to be deployed in production without breaking functionality or must be under a [feature flag](https://martinfowler.com/articles/feature-toggles.html). Each commit has a story number and the names of the pair that authored it, that is how we track each piece of work.

As an example, every time a commit of the assessment service is pushed to master, the service build pipeline gets triggered. A GoCD agent builds the service and runs the automated test suite, among other things like linters. If the process completes successfully, a new version of the assessment service is automatically deployed to the first staging environment where end to end tests exercise the system.

Once a user story involving this service is completed and the QA and the PO are happy with the functionality to be deployed, the new version of the assessment service is scheduled to be released in the next release window given by the change management (CM) department of the company. This department has to authorise all the releases we do and they use the story numbers to track and understand the changes being deployed to production.

Given this constrain, quite common in organisations like this, we usually deploy to production only once a day. In most cases this deployment involves not only one, but several services.

When the deployment is authorised, the pair organising promotes the new version of the assessment service and the other services included in the deployment into a pre-production environment and conducts some smoke tests. The new functionality is then deployed during the release window agreed with CM. We then check our monitoring and alerting systems to verify if any of the new changes have broken the system.

## What is an average day-in-the-life of someone on one of the development teams?

The development team working on the assessment platform is split into smaller teams following [Spotify’s squads model](https://medium.com/project-management-learnings/spotify-squad-framework-part-i-8f74bcfcd761). Each squad is cross-functional, formed by Devs, QAs, BAs and a a developer that acts as technical leader. Each squad owns a piece of the functionality of the platform.

The day starts with each squad daily standup, where people walk the Kanban wall talking about the progress made in each story, what they are planing to do that day and surfacing any blocker that may get in the way.

Most of the time, a developer is pairing with a peer in delivering theuser story functionality. Other times is pairing with a BA analysing the technical details of a piece of work, or with the Tech Lead, helping him or her set the technical direction of a feature, evolving the architecture of the system, etc.

The squad holds showcase sessions every two weeks to share what they have done with the other squads. Developers, QAs and BAs are usually the ones showcasing the progress made. Another ceremony, the team retrospective, is done every two weeks. Developers take an active role on this session reflecting on how the team can work more effectively. The squads also organise technical sessions called “code time” or “tech congress” where developers share technical solutions and discuss technical topics.

We tried to follow the [“you build it, you run it”](https://www.thoughtworks.com/insights/blog/there-no-such-thing-devops-team) principle, which implies that some times, as a developer, you will be pairing with someone from other squad to support the production system during working hours. This requires working with the customer support teams in investigating production issues and trying to solve them. An additional developer from the client is on call outside working hours.

## What makes this project a special place to be a developer?

I will quote one of the answers from the original article.

> There’s a real feeling that while writing code can be a solitary act, making software isn’t. People are really kind and generous with their knowledge, and overwhelmingly willing to help.

In my team writing code is a collaborative act, thanks to practicing pair programming, one of the core practices we follow at ThoughtWorks. You can have a bad day or lose motivation, but your pair will always try to help you to forget about it and carry on doing great work.

Moreover, I personally like the technical challenges I have faced in this project. Building and evolving a platform based on a microservices architecture on top of very rigid virtualised infrastructure, flaky networks (self-managed data centres..) and in the context of a “risk-adverse” organisation is always a challenge.

I hope you found my answers useful or at least enjoyable to read. I encourage you to do the same exercise and share with us how it is like to be a developer in your current project. And please, if you have any recommendations on how my team can improve their development experience, share them in the comments.

You can find other tools that we use checking [this stack](https://stackshare.io/portovep/loan-assessment-platform) on Stackshare.

PS: If you would be interesting to join me in this project, please leave me a PM :).
