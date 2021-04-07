---
title: 'Component libraries: A tale of a migration'
date: '2018-01-22'
type: 'Post'
tag: 'Draft'
---

A year ago my team started the journey of modernising the stack of our back office web application. The application helps assessors to manage the lifecycle of a student loan. By the time the team started thinking in modernising the stack the code base was 3 years old. The web application is part of a system of 30 microservices and it has to interact with almost all of them.

The application was originally built using jQuery and vanilla JavaScript. RequireJS was used as a module loader. At some point in the life of the application, there

was an attempt of creating individual modules using Knockout, perhaps trying to move towards the micro-frontends pattern. The test were written using Jasmine and ran with Karma. The test coverage was good as the app was built using TDD.

The team decided to do a spike to try React as a foundation for the new stack.

The goal, building a UI platform

---

From modernising the stack to building a UI platform. (analogy with building the assessment platform)

Knowing your libraries inside-in

---

The web app digitalizes the process of managing the lifecycle of a student loan application. The users are the assessors, responsable to take a paper application and enter all the details into the system using the application, so that the system can assess the application. As you can imagine, the UI has high amount of forms. This lead the team to evaluate using a library that abstract the complexity of managing controlled form inputs in React. We started using redux-froms without knowing very well the library and we pay the price. In our favour, the library has evolved a lot since we started using and it knows accommodates more different use cases than before.

Improving the developer experience early on

---

One of the key decisions we made was to invest on improving the developers experience early on our migration journey. We migrate from Mocha and expect.js to Jest, which

includes test doubles, coverage and assertions out of the box. This helped to simplify the amount of libraries the developer had to get used to. We started by service our

integrated React app using the old gulp setup. We wanted to benefit from features like hot reloading so we quickly invest in using the web server provided by webpack.

The old codebase had JSHint as a linter. When we start using ESLint for our React code, we end up having two different linters for the three different stacks. We invest on migrating the JSHint rules to ESLint to simplify and only have one.

The same happened with Karma and Gulp.

In all the technical conversations we were having about the process of strangling the old stacks, we referred to them as legacy. As the time passed, we realized that

the modernisation of the codebase may take a while, or even stop at some point like it happened when Knockout was introduced, so we decided to invest also in the old stacks.

The first thing we did was restructuring the folder structure so that the three stacks had clear boundaries and the code was structure in a similar way.

Photo of folder structure

Up-skilling the team

---

By the time we started the migration, most of our team were backend developers with a few individuals who had experience with Javascript. We knew a key aspect of the

migration success was up skilling people and sharing as much knowledge as possible. To do that, the team started organise weekly ES6 katas using the Exercism platform. A few

of us gathered at 4pm and split in pairs. We then try to complete the kata suggested for the day, after 50 minutos we gathered again and we shared and discuss all the

solutions. This helped a lot to get people up to speed to the new feature introduced in ES6 and to some degree to get people excited about the new tech.

Pair programming

We do pair programming when we work in any piece of code that will eventually be deployed in production. This helped a lot, people with a few weeks on the code base

will teach people new to React how to get started and what worked for them. They will also help them to navigate the code base and share the patterns we were

trying to follow, like the container vs presentation components pattern.

Katas

Mobbing

Creating a design system using component explorers:

---

One of the key aspects of building the UI platform was to get everybody thinking about components, mostly about consistency and reusability. As we were rewriting the

different modules and creating new ones, we spotted and remove some inconsistencies in the UI. This was a joint effort between the BAs, QAs, Dev and UX people in the team.

It was not enough with having only the developers thinking and splitting UI functionality in components. We wanted the BAs and UX to be aware of the components

that already existed and how they were called, eventually creating a ubiquitos language based on components. This involved BAs referencing existing components

in the user stories and even collaborating with UX and Devs to set the names for new ones.

Developing components and isolation and discussing how to test them with the QAs allowed us to create smaller stories and built bigger pieces of the UI in

incremental steps.

Early on, we started thinking on how we could visualize our library of components that it was growing bigger and bigger with the time. We started researching if there

were any libraries that allows us to render the component directly from the source code. We found storybook and we decided to give it a try. We quickly realised the

enormous value this tool brought, not only allowing us to collaborate with QAs, BAs, UX and PO, but also in testing our components [storyshot plugin].

We started writing stories to implement individual components and mapping the different acceptance criteria scenarios to stories in the storybook instance of the

component. This helped us during desk check to evaluate if the user story was complete, and also the QA to go through the different scenarios and validate when

a component was ready.

[knobs]

Lessons learned / What we would do differently

---

Conclusion

---
