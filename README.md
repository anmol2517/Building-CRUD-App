# Building-CRUD-App
This project will entail creating a full-fledged CRUD (Create, Read, Update, Delete) application using some of the most popular technologies in the Node.js ecosystem.

# Primary Keywords
- CRUD Application using Node.js Express.js
- CRUD Operations React + Node.js + Express.js

# CRUD Application with Node.js, Express.js, EJS, and MongoDB

This repository contains a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express.js, EJS, and MongoDB.

# Features

- Create new records
- Read and display records
- Update existing records
- Delete records

# Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/) (Ensure MongoDB server is running)

# Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/crud-app.git
    cd crud-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
    ```plaintext
    PORT=4000
    MONGODB_URI=mongodb://localhost:27017/crud-app
    ```

# Running the Application

1. Start the application:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:4000`

# File Structure

```
crud-app/
│
├── models/
│   └── record.js
│
├── public/
│   ├── css/
│   └── js/
│
├── routes/
│   └── index.js
│
├── views/
│   ├── pages/
│   │   ├── create.ejs
│   │   ├── edit.ejs
│   │   ├── index.ejs
│   │   └── show.ejs
│   └── partials/
│       └── header.ejs
│
├── .env
├── app.js
├── package.json
└── README.md
```

# Usage and Creating a Record

1. Navigate to `/create` and fill out the form.
2. Submit the form to create a new record.

# Reading Records

1. Navigate to the home page to view all records.
2. Click on a record to view its details.

# Updating a Record

1. Click on the edit button next to a record on the home page.
2. Update the form fields and submit to save changes.

# Deleting a Record

1. Click on the delete button next to a record on the home page.
2. Confirm the deletion in the prompt.

# Dependencies

- [Express](https://expressjs.com/) - Web framework for Node.js
- [EJS](https://ejs.co/) - Embedded JavaScript templates
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js

# Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or fixes.
