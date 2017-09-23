# react-next-starter
This project use [Next.js](https://github.com/zeit/next.js) with redux ecosystem, and was intended to help users get up and running quickly.

## Table of Contents
1. [Installation](#getting-started)
1. [Running the Project](#running-the-project)
1. [Project Structure](#project-structure)

## Installation

You can create a new project based on `react-next-starter` by doing the following:

```bash
$ git clone https://github.com/leon3s/react-next-starter.git <my-project-name>
$ cd <my-project-name>
```

When that's done, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.

```bash
$ yarn install  # Install project dependencies (or `npm install`)
```

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ yarn run development  # Start the development server (or `npm run development`)
```

While developing, you will probably rely mostly on `yarn run development`; however, there are additional scripts at your disposal:

|`yarn <script>`    |Description|
|-------------------|-----------|
|`development`            |Serves your app at `localhost:8080 in development mode`|
|`production`            |Serves your app at `localhost:8080 in production mode`|
|`build`            |Builds the application to ./next|
|`build:production`            |Builds the application to ./next in production mode|

## Project Structure

```
├── .next                    # All build-related code
├── actions                  # Redux actions directory
├── components               # React Components directory
├── containers               # React Containers directory
├── pages                    # Next.js pages directory
| ├── index.js               # First page viewed by user
├── reducers                 # Redux reducers directory
├── static                   # Static files exposed by your server
├── styles                   # Styles directory in scss
├── utils                    # Your utils directory
└── server.js                # Next.js server
```
