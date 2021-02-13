# Last Airbender API

**Authors**: [Paige Gorry](https://github.com/paigeegorry)

**[last-airbender-api.herokuapp.com](https://last-airbender-api.herokuapp.com)**

## Overview
This is an open-source API that provides character information from Avatar: The Last Airbender. This information is publicly sourced; I do not claim to own.

## Technologies used
Node.js, [MongoDB](https://www.mongodb.com/what-is-mongodb), [Express](https://www.npmjs.com/package/express), [Jest](https://www.npmjs.com/package/jest), [SuperTest](https://www.npmjs.com/package/supertest), [nodemon](https://www.npmjs.com/package/nodemon), [dotenv](https://www.npmjs.com/package/dotenv), [Mongoose](https://www.npmjs.com/package/mongoose), [morgan](https://www.npmjs.com/package/morgan), [SuperAgent](https://www.npmjs.com/package/superagent), [node-html-parser](https://www.npmjs.com/package/node-html-parser), [express-ga-middleware]('https://www.npmjs.com/package/express-ga-middleware')

## Routes
_All routes are GET routes_
* **GET /api/v1/characters** - get all characters (default 20 per page / 497 total characters)
* **GET /api/v1/characters?perPage=NUMBER&page=NUMBER** - pagination now available!
  * pagination is also available on other endpoints below
  * example: [GET /api/v1/characters?perPage=10&page=5](https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=10&page=5)
* **GET /api/v1/characters/CHARACTER_ID** - get character by id
  * example: [GET /api/v1/characters/5cf5679a915ecad153ab68cc](https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68cc)
* **GET /api/v1/characters?affiliation=NATION_NAME** - get characters with a specific affiliation
  * choices: "Fire Nation", "Water Tribe", "Earth Kingdom", "Air Nomads", "Team Avatar", and more!
  * example: [GET /api/v1/characters?affiliation=Fire+Nation](https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=Fire+Nation)
* **GET /api/v1/characters?enemies=CHARACTER_NAME** - get characters that are enemies of a specific character
  * example: [GET /api/v1/characters?enemies=Aang](https://last-airbender-api.herokuapp.com/api/v1/characters?enemies=Aang)
* **GET /api/v1/characters?allies=CHARACTER_NAME** - get characters who are allies of a specific character
  * example: [GET /api/v1/characters?allies=Aang](https://last-airbender-api.herokuapp.com/api/v1/characters?allies=Aang)
* **GET /api/v1/characters?name=CHARACTER_NAME** - get characters whose name matches a string
  * example: [GET /api/v1/characters?name=Aang](https://last-airbender-api.herokuapp.com/api/v1/characters?name=Aang)
* **GET /api/v1/characters/random** - get one random character
  * example: [GET /api/v1/characters/random](https://last-airbender-api.herokuapp.com/api/v1/characters/random)
* **GET /api/v1/characters/random?count=NUMBER** - get a number of random characters
  * example: [GET /api/v1/characters/random?count=5](https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=5)
* **GET /api/v1/characters/avatar** - get all avatars
  * example: [GET /api/v1/characters/avatar](https://last-airbender-api.herokuapp.com/api/v1/characters/avatar)

## Error Conditions

Any error in query parameter values will likely respond with an empty array `[]` as a response. Double-check the parameters and ask for help if you think something isn't working properly.


## Getting Started
I welcome any and all contributions! Feel free to submit a Pull Request with your changes to make this a better API for everyone!

1. Clone and download [GitHub repo](https://github.com/paigeegorry/last-airbender-api)
1. Install dependencies:\
`npm i`

3. Run scripts:\
`npm run lint`\
`npm run pretest`\
`npm run test`\
`npm run test:watch`\
`npm run start` (start node server)\
`npm run start:watch` (start nodemon server)\
`npm run seed` (seed database)\
`npm run drop` (drop MongoDB)\
`npm run db-load-all` (drop db and load seed data from scratch)

## License
Standard [MIT](/LICENSE.md)

## Acknowledgements
Thank you to [Kate Dameron](https://github.com/Katedam) for inspiring me to create my own API!
