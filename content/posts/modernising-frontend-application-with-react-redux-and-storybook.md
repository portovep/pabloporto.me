---
title: 'Modernising a frontend application with React, Redux and Storybook'
date: '2018-01-22'
type: 'Post'
tag: 'Draft'
---

Around a year ago my team started the journey of modernizing the frontend stack of a back-office web application. The application helps assessors to manage the lifecycle of a student loan.

The web application is part of a system of 30 microservices and it has to interact with almost all of them. Three crossfunctional teams work on the frontend application, each of them in part of the UI that interact with the microservices that hold the business logic for their specific domain.

## The old stack(s)

At the time the team started thinking in modernising the stack the code base was 3 years old. The application was originally built using jQuery and vanilla JavaScript. RequireJS was used as a module loader. At some point in the life of the application, there was an attempt of creating individual modules using Knockout, perhaps trying to move towards the micro-frontends pattern.

The test were written using Jasmine and ran with Karma. The test coverage was good as the app was built using TDD.

The team decided to do a spike to try React and Redux as a foundation for the new stack. The goal, modernising the stack to increase mantainability and allow new developers from the different teams to start contribution fast.

## From modernising the stack to building a UI platform.

(analogy with building the assessment platform)

## Knowing your libraries inside-in

The web app digitalizes the process of managing the lifecycle of a student loan application. The users are the assessors, responsable to take a paper application and enter all the details into the system using the application, so that the system can assess the application. As you can imagine, the UI has high amount of forms. This lead the team to evaluate using a library that abstract the complexity of managing controlled form inputs in React.

We started using redux-froms without knowing very well the library and we pay the price. In our favour, the library has evolved a lot since we started using and it knows accommodates more different use cases than before.

## Investing in improving the developer experience early on

One of the key decisions we made was to invest on improving the developers experience early on in our migration journey. We migrate from Mocha and expect.js to Jest, which includes test doubles, coverage and assertions out of the box. This helped to simplify the amount of libraries the developer had to get used to.

We changed the way we were serving our integrated React app using the old gulp setup. We wanted to benefit from features like hot reloading so we quickly invest some time setting up the web server provided by webpack.

The old codebase used JSHint as the linter utility. When we start using ESLint for our React code, we end up having two different linters for the three different stacks. We invest on migrating the JSHint rules to ESLint to simplify and only have one. The same happened with Karma and Gulp.

In the technical conversations we were having about the process of strangling the old stacks, we referred to them as legacy. As the time passed, we realized that the modernisation of the codebase was going to take a while, or even stop at some point like it happened when Knockout was introduced.

We starting investing time also in improving areas of the code implemented with the old stacks. The first thing we did was re-arrange the folder structure so that the three stacks had clear boundaries and the code was structure in a similar way. This allows us to have a clear view of which part of the application was built with each stack.

<!-- Photo of folder structure -->

## Bringing the teams up to speed

By the time we started the migration, most of our team were backend developers with a few developers who had experience with Javascript. We knew a key aspect of the moderniaztion success was bring people up to speed quickly and enable them to start sharing as much knowledge as possible.

The team started organise weekly ES6 katas using the Exercism platform. A few of us gathered at 4pm and split in pairs. We then try to complete the kata suggested for the day, after 50 minutos we gathered again and we shared and discuss all the solutions. This helped a lot to get people confortable with the new features introduced in ES6 and to some degree to get people excited about the new tech.

### Pair programming

As most projects in ThoughtWorks, we do pair programming when we work in any piece of code that will eventually be deployed to production. This helped a lot, people with a few weeks on the code base will be able to teach people new to React how to get started and what worked for them. They will also help them to navigate the code base and share the patterns we were trying to follow, like the container vs presentation components pattern.

<!-- image of that pattern? -->

<!-- Katas -->

<!-- Mobbing -->

## Creating a reusable UI component library

One of the key aspects of the modernization using React/Redux was to get everybody thinking about components, mostly about consistency and reusability.

As we were rewriting the different modules and creating new ones, we spotted and remove some inconsistencies in the UI. This was a joint effort between the BAs, QAs, Dev and UX people in the team.

It was not enough with having the developers splitting the UI functionality in components. We wanted the business analysts and UX designers to be aware of the components that already existed and how they were called, eventually creating a ubiquitos language based on components.

Some things we did were having the business analysts referencing existing components in the user stories and even collaborating with UX and developers to set the names and purposes for new ones.

Developing components and isolation and discussing how to test them with the QAs allowed us to create smaller stories and built bigger pieces of the UI in incremental steps.

### Storybook

We started thinking early on how we could visualize our library of components that at the time it was growing bigger and bigger.

We started researching if there were any libraries that allows us to render the component directly from the source code. We found storybook and we decided to give it a try.

We quickly realised the enormous value this tool brought, not only allowing us to collaborate with QAs, BAs, UX and PO, but also in testing our components.

We started writing stories to implement individual components and mapping the different acceptance criteria scenarios to stories in the storybook instance of the component. This helped us during desk check to evaluate if the user story was complete, and also the QA to go through the different scenarios and validate when a component was ready.

<!-- [knobs] -->

## Lessons learned and what we would do differently

Coming soon...

## Conclusion

Coming soon...
