import mongoose from "mongoose";
import { IUser } from "../types/user";
import User from "../model/user";
import dotenv from "dotenv";
dotenv.config();

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  throw new Error("MONGODB_URI is not defined in environment variables.");
}

mongoose.connect(mongoUri);

const users: Pick<IUser, "name" | "email">[] = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
  },
  {
    name: "Emily Johnson",
    email: "emilyj@example.com",
  },
  {
    name: "Michael Brown",
    email: "michaelb@example.com",
  },
  {
    name: "Sarah Davis",
    email: "sarahd@example.com",
  },
  {
    name: "Chris Wilson",
    email: "chrisw@example.com",
  },
  {
    name: "Jessica Lee",
    email: "jessical@example.com",
  },
  {
    name: "David Harris",
    email: "davidh@example.com",
  },
  {
    name: "Laura Martin",
    email: "lauram@example.com",
  },
  {
    name: "James Taylor",
    email: "jamest@example.com",
  },
  {
    name: "Anna Anderson",
    email: "annaanderson@example.com",
  },
  {
    name: "Matthew Thomas",
    email: "matthewt@example.com",
  },
  {
    name: "Megan Moore",
    email: "meganm@example.com",
  },
  {
    name: "Daniel Garcia",
    email: "danielg@example.com",
  },
  {
    name: "Sophia Martinez",
    email: "sophiam@example.com",
  },
  {
    name: "William White",
    email: "williamw@example.com",
  },
  {
    name: "Olivia Clark",
    email: "oliviac@example.com",
  },
  {
    name: "Alexander Rodriguez",
    email: "alexander@example.com",
  },
  {
    name: "Lucas Walker",
    email: "lucasw@example.com",
  },
];

async function seedUsers() {
  try {
    const seedUsers = await User.insertMany(users);
    console.log(seedUsers);
  } catch (error) {
    throw error;
  }
}

seedUsers();
// To initialize database with a few users to start with
