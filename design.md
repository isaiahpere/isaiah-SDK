# SDK Design Diagram

### Process Flow

1. Method is called by application using the npm package [lordy-mordy-sdk](https://www.npmjs.com/package/lordy-mordy-sdk)
2. The URL Generator function will consume the arguments and generate the correct url that will be used to make the API call
3. The request is made using axios asynchrounous function. This will yield either a valid response or throw an error
4. If error is found, the error will be return to the user. Else the response will be return 

<img width="1032" height="400" alt="lordy sdk diagram" src="https://github.com/isaiahpere/isaiah-SDK/assets/91216238/b700a241-0f09-4aa8-b1c2-f68ca8554659">
