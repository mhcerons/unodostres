## unodostres aplication

**Technology**

  1. Postman / Newman
  2. Mocha
  3. Chai

  API
- unodostres.postman_collection.json      - Contains test cases positives and negatives <br/>
- unodostresQA.postman_environment.json  - Contains the variables of enviroment that are require for the execution for the tests cases <br/>
- In the folder test_API you can find some folders that contains differents cases for each route in the API (Login, Resources and Users) <br/> 

**Pre-requisites**

  1. Node.js (latest version)

**Project Setup**
 
  1. Clone this repository
  2. Go to the repository
  3. Run npm install
  4. Run npm run test-api-postman
  5. Run npm run test-mocha-chai

**Dependencies**
 
  1. [Postman](https://learning.postman.com/docs/getting-started/introduction/)
  2. [Mocha](https://mochajs.org/#getting-started)
  1. [Chai](https://www.chaijs.com/guide/)

**Scripts**

  1. `npm run test-api-postman` <br/>
   This command run all the test for the API with Postman
  2. `npm run test-api-mocha-chai` <br/>
   This command run all the test for the API with Mocha and Chai
  