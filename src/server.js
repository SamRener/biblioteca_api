const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

const server = require('http').Server(app);

mongoose.connect("mongodb+srv://admin:samuel28@cluster0.kdrqy.mongodb.net/Biblioteca?retryWrites=true&w=majority", {
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

server.listen(process.env.PORT || 8081);