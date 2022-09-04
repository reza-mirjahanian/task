
### Backend challenge
Your task is to create a backend web server that exposes a single endpoint.

#### Setup
- Node.JS 14 ( or later )
- Install dependencies `yarn` or `npm i`
- `npm start` - Runs project.
- `npm run start-watch` - Runs project(nodemon).
- `npm test` - Runs tests.
- `npm run test-watch` - Runs tests(nodemon).
- `npm run coverage` - Runs code coverage.




#### Folders
- `api` - Express endpoint
- `models` - DB (MongoDB) files.
- `repositories` - Repository layer (from DB, third party apis like ultimate.ai).
- `services` - Business logics
- `utils` - helper functions


###### Request
`curl --location --request POST 'http://localhost:30100/api/reply' \
--header 'Content-Type: application/json' \
--data-raw '{
"botId": "5f74865056d7bb000fcd39ff",
"message": "Hello "
}'`

`my_response_example.json` - My response example

#### Extra
- `nock` - HTTP server mocking and expectations library for Node.js







#### Todo
- 💡 Maybe object-oriented rules like SOLID,interfaces, ...
- 💡 Better naming convention
- 💡 Improve Testing
- 💡 https://swagger.io UI,...
- 💡 caching, throttling



