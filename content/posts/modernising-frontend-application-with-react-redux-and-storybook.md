---
title: 'Modernising a frontend application with React, Redux and Storybook'
date: '2018-01-22'
type: 'Post'
tag: 'Draft'
---

Around a year ago, my team started the journey of modernizing the frontend stack of a back-office web application. The application helps assessors to manage the lifecycle of a student loan.

The web application is part of a system of 30 microservices and interacts with almost all of them. Three cross-functional teams work on the frontend application. Each team is in charge of the UI that interacts with the microservices containing the business logic for their specific domain.

As the teams grew bigger, there was the need to modernize the frontend tech stack into a set of technologies that allowed us to deliver business value faster while providing a consistent user experience.

As we are in the middle of the journey, I wanted to reflect on some of the things I learned.

## The old stack(s)

At the time the team started thinking about modernizing the stack, the codebase was three years old. The application was built using jQuery and vanilla JavaScript. RequireJS was used as a module loader. At some point in the life of the application, there was an attempt to create individual modules using Knockout, perhaps trying to move towards a micro-frontends pattern.

The tests were written using Jasmine and ran with Karma. The coverage was good as the team was doing TDD.

The team decided to perform a spike to assess React and Redux as the foundation for the new stack. The technical goal was to modernize the stack to increase maintainability and allow new developers from the different teams to start contributing fast.

## Knowing your libraries inside-in

The web app digitalizes the process of managing the lifecycle of a student loan application. The users are the assessors, responsible to take a paper loan request form and enter all the details into the system so that the system can assess the application. As you can imagine, the UI has a high amount of forms. This led the team to evaluate using a library that abstracts the complexity of managing controlled form inputs in React.

We started using redux-forms without knowing the library well and we pay a high price. In our favor, the library has evolved a lot since we started using and it knows accommodates more different use cases than before.

## Investing in improving the developer experience early on

One of the key decisions we made was to invest in improving the developer's experience early on in our migration journey. We migrate from Mocha and expect.js to Jest, which includes test doubles, coverage, and assertions out of the box. This simplified the number of libraries the developer had to get used to.

We changed the way we were serving our integrated React app. We were using an old gulp setup but we wanted to benefit from features like hot reloading so we quickly invest some time setting up the web server provided by Webpack.

The old codebase used JSHint as the linter utility. When we start using ESLint for our React code, we end up having two different linter tools for the three different stacks. We invest in migrating the JSHint rules to ESLint to simplify and only have one. The same happened with Karma and Gulp.

In the technical conversations we were having about the process of strangling the old stacks, we referred to them as the legacy stack. As the time passed, we realized that the modernization of the codebase was going to take a while, or even stop at some point like it happened when Knockout was introduced.

We starting to invest time also in improving areas of the code implemented with the old stacks. The first thing we did was re-arrange the folder structure so that the three stacks had clear boundaries and the code was structured similarly. This allows us to have a clear view of which part of the application was built with each stack.

## Bringing the teams up to speed

By the time we started the migration, most of our team were backend developers with a few developers who had experience with Javascript. We knew a key aspect of the modernization success was to bring people up to speed quickly and enable them to start sharing as much knowledge as possible.

The team started to organize weekly ES6 katas using the Exercism platform. A few of us gathered at 4 pm and split into pairs. We then try to complete the kata suggested for the day, after 50 minutes we gathered again and we shared and discuss all the solutions. This helped a lot to get people comfortable with the new features introduced in ES6 and to some degree to get people excited about the new tech.

Like most projects in ThoughtWorks, we do pair programming when we work on any piece of code that will eventually be deployed to production. This helped a lot. People with a few weeks on the code base will be able to teach people new to React how to get started and what worked for them. They will also help them to navigate the code base and share the patterns we were trying to follow, like the container vs presentation components pattern.

We also organized a mobbing session where the whole team tried to solve a problem together.

## Creating a reusable UI component library

One of the key aspects of the modernization effort was to get everybody thinking about components, mostly about consistency and reusability.

As we were rewriting the different modules and creating new ones, we spotted and remove some inconsistencies in the UI. This was a joint effort between the BAs, QAs, Dev, and UX people in the team.

It was not enough with having the developers splitting the UI functionality into components. We wanted the business analysts and UX designers to be aware of the components that already existed and how they were called, eventually creating a ubiquitous language based on components.

Some things we did were having the business analysts referencing existing components in the user stories and even collaborating with UX and developers to set the names and purposes for new ones.

Developing components and isolation and discussing how to test them with the QAs allowed us to create smaller stories and built bigger pieces of the UI in incremental steps. The caveat of this is that some stories didn't provide user value directly, they were technical tasks that helped us modernize the application incrementally.

### Storybook

We started thinking early on how we could visualize our library of components that at the time it was growing bigger and bigger.

We started researching if any libraries allow us to render the component directly from the source code. We found Storybook and we decided to give it a try.

We quickly realized the enormous value this tool brought, not only allowing us to collaborate with QAs, BAs, UX, and PO, but also in testing our components.

We started writing stories to implement individual components and mapping the different acceptance criteria scenarios to stories in the storybook instance of the component. This helped us during desk check to evaluate if the user story was complete, and also the QA to go through the different scenarios and validate when a component was ready.

## Lessons learned

We are still in the middle of the journey, but these are some of the lessons we learnt along the way:

-   Setting boundaries between different stacks helps to isolate the parts of the code that need to be replaced.
-   Having tests for the legacy parts help to understand the code and made the rewrite faster.
-   Rewrites are hard. Make sure you plan for them in advance and bring the business/product stakeholders along.
-   Invest in improving the developer experience to work with the different stacks.
-   Don't forget about the human aspect. Different people take different times to get up to speed with new technology, provide spaces to learn, and bring the whole team on a journey.
-   Creating a common vocabulary with designers and business people to name components fosters adoption across teams.
-   Tools like Storybook allow for the creation of reusable components and make it easy to maintain component libraries.
