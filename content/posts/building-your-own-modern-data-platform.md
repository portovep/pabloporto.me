---
title: 'Build your own modern data platform and learn data engineering'
date: '2022-12-04'
type: 'Post'
tag: 'Draft'
---

## Intro

A few years ago I transitioned to the role of data engineer at work. I started focusing on helping clients build their data management and data platform capabilities. The transition involved a lot of learning and moving outside my comfort zone.

I usually learn better by doing. During this transition, I always felt that I was missing a place where I could put all that I read and learned together, so I started thinking...

-   Wouldn't be awesome if I could have a data engineering playground where I can keep learning trying new tools and developing new data skills?? Similar to the other two playgrounds I created to learn [frontend development](https://github.com/portovep/pabloporto.me) and [continuous delivery](https://github.com/portovep/continuous-delivery-playground).

*   Wouldn't be even more awesome to build my own data platform where I could store data that is important to me and run analytics over it to get valuable insights in several areas of my life?

I created a Notion page and I started drafting what I would like to build and what it may look like. This article is a more advanced and polished version of that page.

## Who is this guide for?

-   You are familiar with basic data engineering concepts and you want to have a place to put them into practice.
-   You are starting to learn more about data engineering and want to understand what are the main components of a modern data platform.
-   You want to learn modern data engineering by applying it to your use cases.
-   You want to have a place to store all the important data from your digital life and where you can run analytics on top.

The idea is to create a playground for anyone looking to improve their data engineering knowledge and build something useful at the same time.

## What we will learn?

In this series, I will show you how I build my data platform by implementing what is called the [modern data stack](https://continual.ai/post/the-future-of-the-modern-data-stack).

> The Modern Data Stack commonly refers to a collection of technologies that comprise a cloud-native data platform, generally leveraged to reduce the complexity in running a traditional data platform. The goal is to make data actionable by reducing the time it takes for data to become useful to data workers in an organization.

We’ll go through all the main features you will need to build your modern data platform:

-   Data ingestion
-   Data modeling and transformation
-   Data storage
-   Data visualization and what BI (Personal Intelligence in this case)
-   Data orchestration
-   Data quality and observability
-   Data discovery

(DIAGRAM) and explain what I consider an operational source.

## What we will build?

The goal is to build a data platform that allows us to analyze our data from the apps and tools we use every day. The platform should allow us to easily ingest data coming from new data sources, perform analytical queries against it and create dashboards that will help us make better life decisions in several areas of life: finance, health, etc.

The idea of having a place where you can track and store all your digital data is not new. The [quantified self movement](https://en.wikipedia.org/wiki/Quantified_self) is several years old and is trying to achieve just that.

> The **quantified self** refers both to the cultural phenomenon of self-tracking with technology and to a community of users and makers of [self-tracking](https://en.wikipedia.org/wiki/Self-tracking 'Self-tracking') tools who share an interest in "self-knowledge through numbers"

But you would be asking yourself, couldn't I do most of what you are describing with a simple spreadsheet? Maybe..., but what would be the fun and the learning process then?

### Use cases

We will be guiding the implementation of the platform by value. What does this mean? It means that instead of building all the platform capabilities up front, we will be building them in thin slices and just what we need to fulfill a given use case.

You can think of a use case as a specific feature or insight that the platform will allow us to get. Some of the initial use cases I have in mind are:

**Health domain**

-   Track and visualize important health metrics like weight, body mass, and blood pressure in one place. Be able to see how they evolved.
-   Understand how many workouts and training sessions I performed over the year.
-   How many kilometers do I cycle per year?

**Finance domain**

-   Track my 4 key financial metrics. The ones I describe in [this post](/blog/the-four-key-metrics-of-personal-finance).
-   Visualize how my wealth evolved since I began investing.
-   Automatically ingest payslips so I can track my monthly income.

**Culture domain**

-   Understand how many books and pages I read per year
-   How many movies do I watch in a given year. How many times did I go to the cinema?

**Share & contribute domain**

-   How many times have I shared something on Twitter?
-   How many times have I shared a photo of my travels on Instagram?

These are some initial ideas. The key here is that the platform should be giving you enough flexibility to implement any analytical use case you have in mind to extract insights from your data.

### Architecture

These are some of the architectural principles that should guide us as we choose the different tools and technologies that will allow us to build the platform:

-   Based on the modern data stack and in an extract-load-transform (ELT) architecture.
-   New data source connectors can be created and integrated easily.
-   The platform can be deployed fully on our personal computers.
-   The platform can be deployed on the cloud cheaply and with a low environmental impact.
-   Data privacy and security are first-class concerns.
-   All tools should be open-source software.
-   The infrastructure components should be deployed in a serverless offering if possible.

### Candidate tech stack

-   Data ingestion
    -   Lambdas
    -   Airbyte
-   Data storage and processing
    -   Postgres Serverless
-   Data transformation
    -   dbt and SQL
-   Data orchestration
    -   Github Actions
-   Data discovery
    -   OpenMetadata ora
    -   Datahub
-   Data observability and quality
    -   Metaplane
-   Data visualization
    -   Apache Superset
    -   Appsmith or Retool
    -   Tremor
-   Continuous delivery
    -   Github Actions

If you have any suggestions for better tools for any of the capabilities please let me know!

## I am interested, how do I follow along?

When I was a kid, I used to go to the local newsstand or paper store and always ask my parents to buy me one of the new installments (fasciculus) that they sell to build train models and other toys like Scalextric.

They forced you to subscribe so you could build the train model or toy in installments. My idea is to follow the same approach and use a newsletter to keep you posted on the project and release the different installments that will allow us to build our modern data platform.

If this sounds interesting to you and I invite you to follow along and subscribe to the newsletter where I will be sharing the progress as I build this thing.

Next installment: Setting up the local development environment.

(Link to repo)
