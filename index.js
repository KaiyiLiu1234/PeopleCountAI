const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

//Connect to Mongo Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING,
    { useUnifiedTopology: true, useNewUrlParser: true },
    ).then((result) => {
        console.log("Successfully connected to Database");
    }).catch((err) => {
        console.log("Database failed");
    });

//Our Available Routes
const authenticationRoute = require("./routes/authentication");

//Middleware

app.use(express.json());

app.use('/api/user', authenticationRoute); 
//remember to change user to different accounts accordingly (Busisness or user)


app.listen(3000, () => {
    console.log("Server is running successfully");
}); //port will be changed later