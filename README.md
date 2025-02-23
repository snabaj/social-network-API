# Social Network API

[![Node.js](https://img.shields.io/badge/Node.js-43853d?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4ea94b?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-4a8fdb?style=flat&logo=mongoose&logoColor=white)](https://mongoosejs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)

## Table of Contents

- [Social Network API](#social-network-api)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [API Endpoints](#api-endpoints)
    - [Users](#users)
    - [Thoughts](#thoughts)
  - [Usage](#usage)
    - [Demo video.](#demo-video)
    - [Screenshot](#screenshot)
    - [Screenshot](#screenshot-1)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Description

This project is a backend API for a social networking application where users can share their thoughts, react to friends' thoughts, and maintain a friend list. The API is built using Express.js, MongoDB, and Mongoose.

## Installation

1. Clone the repository:
```
git clone https://github.com/snabaj/social-network-API.git
cd social-network-API
```

2. Install dependencies:
```
npm install
```

3. Create .env file:
 ```
PORT=
MONGO_URI=
```

4. Run the seed script to populate the database with sample data:
```
npm run seed
```

5. Start the server:
```
npm run start
```

## API Endpoints

### Users

- `GET /api/users` - Retrieve all users

- `GET /api/users/:userId` - Retrieve a single user by ID

- `POST /api/users` - Create a new user

- `PUT /api/users/:userId` - Update a user

- `DELETE /api/users/:userId` - Remove a user

- `POST /api/users/:userId/friends/:friendId` - Add a friend

- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend

### Thoughts

- `GET /api/thoughts` - Retrieve all thoughts

- `GET /api/thoughts/:thoughtId` - Retrieve a single thought

- `POST /api/thoughts` - Create a new thought

- `PUT /api/thoughts/:thoughtId` - Update a thought

- `DELETE /api/thoughts/:thoughtId` - Remove a thought

- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction

- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction

## Usage

Use Insomnia or Postman to test API endpoints.

Example request to create a user:
```
{
  "username": "john_doe",
  "email": "john.doe@example.com"
}
```
### Demo video.

https://drive.google.com/file/d/1fSbMlApanz75PKGDuCi1Zfrl9omLJfzK/view

### Screenshot

GET route for all users

![Get route for all users](<src/Assets/Screenshot 2025-02-22 at 10.45.12 PM.png>)

### Screenshot

GET route for all thoughts

![Get route for all thoughts](<src/Assets/Screenshot 2025-02-22 at 10.46.28 PM.png>)

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

## Contributing

Contributions are welcome! If you wish to contribute, fork repository, create new branch, commit changes, and push your branch. Please follow these steps:
```
git checkout -b feature/your-feature
git commit -m "Add some feature"
git push origin feature/your-feature
```

## Tests

There are no specific tests currently included in this project, but you can add your own testing frameworks or unit tests as necessary.

## Questions

Please contact me with any questions you may have at [snabajja@gmail.com](mailto:snabajja@gmail.com) or visit my GitHub profile at [snabaj](https://github.com/snabaj).
