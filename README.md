# isaiah-SDK

## Description
The Lord of the rings SDK (Lordy SDK) was built to easily integrate the Lord of the Rings API into your application. This is the 21st centery. Enough of having to build utilities for all kinds of crazy endpoints your application needs to function properly. We all know you end up defaulting to stackoverflow when structuring your code, so why not allow Lordy SDK to give you a hand instead. Lordy was designed to not only save you time but to also boost your code's performance and elegance. Refractor major companents of your application by passing letting lordy do the heavy lifting while you take care of the fun stuff.

Lordy SDK was built to work together with [The-One-API](https://the-one-api.dev/). This means that in order to use lordy you will need to have an access token which you can get [here](https://the-one-api.dev/sign-up). Please make sure you have secure you access token in order to be able to use lordy

## Instructions

Install the lordy package 
```
npm i lordy-mordy-sdk
```

## ------ Usage -------
```javascript
const lordy = require("lordy-mordy-sdk")

const getMovies = async () => {
  const movies = await lordy.getMovies('api-access-token')
  console.log(movies) // show all movies
}
```
