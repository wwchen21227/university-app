# University Domain App

A SPA University domain directory web app build in React.

## Summary

- [Features](#features)
- [Quick Start](#quick-start)
- [Runing the tests](#running-the-tests)
- [Decisions and Assumptions](#decisions-and-assumptions)
- [Authors](#authors)

## Features

##### Search

- Search University by Name or Country.

##### Listing

- Listing University domain all around the world.

##### Newsletter Subscription

- Subscribe to monthly Newsletter.

## Quick Start

1. Make sure that you have Node.js and npm installed.
2. Clone or download this repo using git clone https://github.com/wwchen21227/university-app.git <YOUR_PROJECT_NAME>
3. Move to the appropriate directory: cd <YOUR_PROJECT_NAME>.
4. Run npm install in order to install dependencies.
5. At this point you can run npm start to see the app at http://localhost:3000.
6. Run npm install -g json-server.
7. Run npm run json-server to start json-server at http://localhost:5000.

#### Alternatively (start using docker)

1. Make sure that you have docker and docker compose installed.
2. Clone or download this repo using git clone https://github.com/wwchen21227/university-app.git <YOUR_PROJECT_NAME>
3. Move to the appropriate directory: cd <YOUR_PROJECT_NAME>.
4. Run docker-compose up -d to start the app (port:3000) and json server (port:5000).
5. You can see the app at http://localhost:3000 and Json Server at http://localhost:5000.

## npm commands

Run the following command in the root of the project directory. Make sure you have run npm install to installed all the dependencies.

##### Unit test

    npm test

##### Test Coverage

    npm run test:coverage

##### linting

    npm run lint

## Decisions and Assumptions

#### Requirements

Due to time constraint, therefore i've decided to focus on getting the basic requirements right. :grin:

#### Data & Preparation

I'm using the search API from http://universities.hipolabs.com/search. Due to the limitation of the API, hence i have manually extracted some of the data into json in university-app/src/data folder.

**countries.json**
A list of all the countries data for auto-suggestion country search control.

**popularCountries.json**
Personal picked top 8 countries for building the home page UI. :grinning:

**universities.json**
The original data source of the University domain. I downloaded this because i found to fetch all the records from the api is a bit too expensive and slow. Therefore, i added a logic hack to the app if there isn't search by university name or country, the app will be using the local data (universities.json).

**users.json**
The db file for json-server to save newsletter subscriber email address.

#### Backend API

There isn't a requirement for backend API, however there was a requirement for saving subscriber email to users.json. To speed up the development, hence i've selected json-server to act as the rest api.

## Authors

- Chen Weng Wei
