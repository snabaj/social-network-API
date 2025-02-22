import mongoose, { Types } from "mongoose";
import connectDB from "../config/connection.js";
import User from "../models/user.js";
import Thought from "../models/thought.js";

const seedUsers = [
  { username: "Bets1", email: "bets1@example.com" },
  { username: "Lerner2", email: "lerner2@example.com" },
  { username: "Blazer5", email: "blazer5@example.com" },
];

const seedThoughts = [
  {
    thoughtText: "I want to conquer the world!",
    username: "Bets1",
    reactions: [
      {
        reactionId: new Types.ObjectId(),
        reactionBody: "Same here",
        username: "Lerner2",
        createdAt: new Date(),
      },
    ],
  },
  {
    thoughtText: "I have no thoughts today.",
    username: "Lerner2",
    reactions: [
      {
        reactionId: new Types.ObjectId(),
        reactionBody: "Me neither",
        username: "Bets1",
        createdAt: new Date(),
      },
    ],
  },
  {
    thoughtText: "What a wonderful day!",
    username: "Blazer5",
    reactions: [
      {
        reactionId: new Types.ObjectId(),
        reactionBody: "I agree",
        username: "Lerner2",
        createdAt: new Date(),
      },
    ],
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await User.deleteMany({});
    await Thought.deleteMany({});

    const createdUsers = await User.insertMany(seedUsers);

    const thoughtsWithUser = seedThoughts.map((thought, index) => ({
      ...thought,
      username: createdUsers[index % createdUsers.length].username,
    }));

    await Thought.insertMany(thoughtsWithUser);

    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

seedDatabase();
