# isaiah-SDK

## Description
Lordy is a Javascript SDK built to easily integrate the Lord of the Rings API into your application. This is the 21st centery. Enough of having to build utilities for all kinds of crazy endpoints your application needs to function properly. We all know you end up defaulting to stackoverflow when structuring your code, so why not allow Lordy SDK to give you a hand instead. Lordy was designed to not only save you time but to also boost your code's performance and elegance. Refractor major companents of your application by letting lordy do the heavy lifting while you take care of the fun stuff.

Lordy SDK was built to work together with [The-One-API](https://the-one-api.dev/). This means that in order to use lordy you will need to have an access token which you can get [here](https://the-one-api.dev/sign-up). Please make sure you have secure you access token in order to be able to use lordy

## Installation

Install the lordy package 
```
npm i lordy-mordy-sdk
```

## getMovie Usage

### getMovie() - Provides a list of all Lord of the Rings Movies, A single Lord of the Rings Movie or all quotes from a single Lord of the Rings movie.
- tokenAccess - (string) required argument to access API
- movieId - (string) optional argument to fetch a single movie
- quote - (boolean) optional argument to fetch quotes from a single movie

Let's cover the use cases for ***getMovie()***. 

--------------------------------

***Get All Movies***
```javascript
//Fetch All Movies
const lordy = require("lordy-mordy-sdk")

const getMovieData = async () => {
  const movieData = await lordy.getMovie('api-access-token')
  console.log(movieData) 
}
getMovieData()
```
```javascript
// output

//   docs: [
//     {
//       _id: '5cd95395de30eff6ebccde56',
//       name: 'The Lord of the Rings Series',
//       runtimeInMinutes: 558,
//       budgetInMillions: 281,
//       boxOfficeRevenueInMillions: 2917,
//       academyAwardNominations: 30,
//       academyAwardWins: 17,
//       rottenTomatoesScore: 94
//     },
//     {
//       _id: '5cd95395de30eff6ebccde57',
//       name: 'The Hobbit Series',
//       runtimeInMinutes: 462,
//       budgetInMillions: 675,
//       boxOfficeRevenueInMillions: 2932,
//       academyAwardNominations: 7,
//       academyAwardWins: 1,
//       rottenTomatoesScore: 66.33333333
//     },
//     ...

```
--------------------------------

***Get One Movie***
```javascript
//Fetch One Movies
const lordy = require("lordy-mordy-sdk")

const getMovieData = async () => {
  const movieData = await lordy.getMovie('api-access-token', '5cd95395de30eff6ebccde5d')
  console.log(movieData) 
}
getMovieData()
```
```
// output
  
// docs: [
//   {
//     _id: '5cd95395de30eff6ebccde5d',
//     name: 'The Return of the King',
//     runtimeInMinutes: 201,
//     budgetInMillions: 94,
//     boxOfficeRevenueInMillions: 1120,
//     academyAwardNominations: 11,
//     academyAwardWins: 11,
//     rottenTomatoesScore: 95
//   }
// ]
```
--------------------------------

***Get Single Movie Quotes***
```javascript
//Fetch all quotes from a single movie
const lordy = require("lordy-mordy-sdk")

const getMovieData = async () => {
  const movieData = await lordy.getMovie('api-access-token', '5cd95395de30eff6ebccde5d', true)
  console.log(movieData) 
}
getMovieData()
```
```
// output
  
// docs: [
//   {
//     _id: '5cd96e05de30eff6ebcced61',
//     dialog: 'Who is she? This woman you sing of?',
//     movie: '5cd95395de30eff6ebccde5c',
//     character: '5cd99d4bde30eff6ebccfc15',
//     id: '5cd96e05de30eff6ebcced61'
//   },
//   {
//     _id: '5cd96e05de30eff6ebcced62',
//     dialog: "Tis the Lady of L'thien. The Elf Maiden who gave her love to Beren ... a mortal.",
//     movie: '5cd95395de30eff6ebccde5c',
//     character: '5cd99d4bde30eff6ebccfbe6',
//     id: '5cd96e05de30eff6ebcced62'
//   },
//   ...
```

## getQuote Usage

### getQuote() - Provides a list of all Lord of the Rings Movie quotes, or one quote.
- tokenAccess - (string) required argument to access API
- quoteId - (string) optional argument to fetch a single movie quote


Let's cover the use cases for ***getQuote()***. 
__________________

***Get All Movie Quotes***
```javascript
//Fetch All Quotes
const lordy = require("lordy-mordy-sdk")

const getQuoteData = async () => {
const quoteData = await lordy.getQuote('api-access-token');
  console.log(quoteData)
}
getQuoteData()
```
```javascript
// output

//   docs: [
//     {
//       _id: '5cd95395de30eff6ebccde56',
//       name: 'The Lord of the Rings Series',
//       runtimeInMinutes: 558,
//       budgetInMillions: 281,
//       boxOfficeRevenueInMillions: 2917,
//       academyAwardNominations: 30,
//       academyAwardWins: 17,
//       rottenTomatoesScore: 94
//     },
//     {
//       _id: '5cd95395de30eff6ebccde57',
//       name: 'The Hobbit Series',
//       runtimeInMinutes: 462,
//       budgetInMillions: 675,
//       boxOfficeRevenueInMillions: 2932,
//       academyAwardNominations: 7,
//       academyAwardWins: 1,
//       rottenTomatoesScore: 66.33333333
//     },
//     ...

```
__________________

***Get A Single Quotes***
```javascript
//Fetch A Single Quote
const lordy = require("lordy-mordy-sdk")

const getQuoteData = async () => {
const quoteData = await lordy.getQuote('api-access-token', '5cd96e05de30eff6ebcce84b');
  console.log(quoteData)
}
getQuoteData()
```
```javascript
// output

// docs: [
//   {
//     _id: '5cd96e05de30eff6ebcce84b',
//     dialog: "Well, I'm back.",
//     movie: '5cd95395de30eff6ebccde5d',
//     character: '5cd99d4bde30eff6ebccfd0d',
//     id: '5cd96e05de30eff6ebcce84b'
//   }
// ]

```


# How to Test SDK
To test the sdk is simple. Copy the code blocks above and run them in your local machine. Make sure to install the NPM package prior to testing the code. 
The output of each code block should match the ***output*** commented right below the code block. 

### Example to test
1. Install the package in your app

Install the lordy package 
```
npm i lordy-mordy-sdk
```
2. Copy this code into your app. ***Make sure to replace 'api-access-token' with your token***.
```javascript
//Fetch A Single Quote
const lordy = require("lordy-mordy-sdk")

const getQuoteData = async () => {
const quoteData = await lordy.getQuote('api-access-token', '5cd96e05de30eff6ebcce84b');
  console.log(quoteData)
}
getQuoteData()
```
3. Your output should be:
```
// docs: [
//   {
//     _id: '5cd96e05de30eff6ebcce84b',
//     dialog: "Well, I'm back.",
//     movie: '5cd95395de30eff6ebccde5d',
//     character: '5cd99d4bde30eff6ebccfd0d',
//     id: '5cd96e05de30eff6ebcce84b'
//   }
// ]
```
