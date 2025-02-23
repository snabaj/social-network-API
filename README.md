# Social Network API

## Description

This project is a backend API for a social networking application where users can share their thoughts, react to friends' thoughts, and maintain a friend list. The API is built using Express.js, MongoDB, and Mongoose.

## Built With

- **[Node.js](https://nodejs.org/)**
- **[Express.js](https://expressjs.com/)**
- **[MongoDB](https://www.mongodb.com/)**
- **[Mongoose](https://mongoosejs.com/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[VS Code](https://code.visualstudio.com/)**

## Installation

1. Clone the repository:

2. Install dependencies:
    `npm install`

3. Create .env file:

4. Run the seed script to populate the database with sample data:
    `npm run seed`

5. Start the server:
    `npm run start`

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
## GET route for all users

![Get route for all users](<src/Assets/Screenshot 2025-02-22 at 10.45.12 PM.png>)

## GET route for all thoughts

![Get route for all thoughts](<src/Assets/Screenshot 2025-02-22 at 10.46.28 PM.png>)

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.

## Contributing

If you wish to contribute to this project, feel free to fork the repository, create a branch, and submit a pull request with your changes. Ensure your code is well-documented, and your changes are tested before submitting.

## Tests

There are no specific tests currently included in this project, but you can add your own testing frameworks or unit tests as necessary.

## Questions

Please contact me with any questions you may have at [snabajja@gmail.com](mailto:snabajja@gmail.com) or visit my GitHub profile at [snabaj](https://github.com/snabaj).
