// IMPORTANT: Run the user seed file (seed/user.ts) first to generate users in the database.
// After seeding users, update the user_id fields below to match the actual user IDs from your database.
// This ensures notes are correctly linked to existing users.

import mongoose from "mongoose";
import { INote } from "../types/note";
import Note from "../model/note";
import dotenv from "dotenv";
dotenv.config();

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  throw new Error("MONGODB_URI is not defined in environment variables.");
}

mongoose.connect(mongoUri);

const notes: Pick<INote, "title" | "content" | "user_id">[] = [
  {
    title: "Home Improvement Ideas",
    content:
      "Repaint the kitchen, replace the bathroom tiles, and add a new garden shed.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e06"),
  },
  {
    title: "Meeting Notes",
    content:
      "Discussed project timelines, budget allocations, and resource requirements.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e07"),
  },
  {
    title: "Shopping List",
    content: "Milk, Eggs, Butter, Bread, Cheese, Vegetables.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e07"),
  },
  {
    title: "Travel Ideas",
    content: "Paris, Tokyo, New York, Barcelona. Need to research flights.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e07"),
  },
  {
    title: "Project Brainstorm",
    content:
      "Innovative ideas for the new app. Focus on user experience and performance.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e08"),
  },
  {
    title: "Books to Read",
    content: "The Great Gatsby, 1984, Brave New World, Moby Dick.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e09"),
  },
  {
    title: "Client Requirements",
    content:
      "Client wants a user-friendly design with a focus on accessibility.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e0a"),
  },
  {
    title: "Grocery List",
    content: "Tomatoes, Potatoes, Lettuce, Apples.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e0b"),
  },
  {
    title: "Weekend Trip",
    content:
      "Plan for a weekend getaway to the beach. Need to check the weather.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e06"),
  },
  {
    title: "Meal Prep",
    content: "Cook chicken, rice, and vegetables for the next few days.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e0c"),
  },
  {
    title: "Vacation Planning",
    content: "Researching beaches and resorts for summer vacation.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e0d"),
  },
  {
    title: "Exercise Routine",
    content: "Morning stretches, 30 minutes of cardio, strength training.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e0e"),
  },
  {
    title: "Meeting Recap",
    content: "Discussed team performance and new project priorities.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e0f"),
  },
  {
    title: "Workout Plan",
    content: "Focus on arms and legs. Add more squats.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e10"),
  },
  {
    title: "Dinner Ideas",
    content: "Pasta, Salad, Chicken Stir Fry.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e11"),
  },
  {
    title: "Birthday Party Ideas",
    content: "Plan a surprise birthday party for Jane.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e12"),
  },
  {
    title: "New Year Resolutions",
    content: "Start journaling every day, drink more water, read more books.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e13"),
  },
  {
    title: "Workout Plan",
    content: "Cardio in the morning, strength training in the evening.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e14"),
  },
  {
    title: "Coding Challenges",
    content: "Solve LeetCode problems daily to improve algorithm skills.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e07"),
  },
  {
    title: "Weekend Getaway",
    content: "Plan a two-day trip to the mountains for hiking and relaxation.",
    user_id: new mongoose.Types.ObjectId("6886678b1a64b52b829c5e0c"),
  },
];

async function seedNotes() {
  try {
    const seedNotes = await Note.insertMany(notes);
    console.log(seedNotes);
  } catch (error) {
    throw error;
  }
}

seedNotes();
// To initialize database with notes from users in the database
