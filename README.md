# Uptick-Week_4

## CRUD Backend Application with Express, Mongoose, and MongoDB

This backend application provides a RESTful API for managing users and their notes. Built with Express.js, it leverages Mongoose ODM to interact with a MongoDB database. Users can register, authenticate, and create, read, update, and delete their personal notes.

---

## Features

### User Management

- Register with an email and name
- Each user has a unique identifier (ObjectId)
- Enforces unique email addresses (no duplicates)
- Secure, user-specific access to notes (authentication and authorization)

### Note Management

- Create, update, and delete notes
- Each note has a title and content
- Notes are associated with a user (via user_id)
- Notes include timestamps for creation and last modification

---

## Database Schema

### User Schema

- `id` (ObjectId, Primary Key): Unique identifier for each user
- `name` (String): The user's name
- `email` (String, Unique): The user's email (used for authentication)
- `created_at` (Date): Timestamp of when the user was created
- `updated_at` (Date): Timestamp of the last time the user's details were updated

### Note Schema

- `id` (ObjectId, Primary Key): Unique identifier for each note
- `title` (String): Title of the note
- `content` (Text): Content or body of the note
- `user_id` (ObjectId, Foreign Reference): References the user who created the note
- `created_at` (Date): Timestamp of when the note was created
- `updated_at` (Date): Timestamp of the last time the note was modified

---

## Technologies Used

- **Express.js**: Server-side framework for handling API requests
- **Mongoose ODM**: Mongoose ODM for managing MongoDB database models and schemas
- **MongoDB**: Non-relational (NoSQL) database used to store user and note data

---

This backend API ensures seamless note-taking with a user-friendly design and efficient database management. It is ideal for personal use or further integration into larger applications.
