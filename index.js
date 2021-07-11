const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://levius:getaccess@netherlandsazurecluster.3adpc.mongodb.net/todolist-app', {useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: ಠ_ಠ'));
db.once('open', () => console.log('--->>db-connnected'));

const app = express();
const todolists = require('./todolists');

//setup app
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use('/todolists', todolists);
app.get('/', async () => {
    res.send(`<h1>Welcome to Todolist Application</h1>`);
})

//intercepter
app.use((req, res) => {
    res.send({value: 404});
})

const PORT = 3030;
app.listen(PORT, () => `---> App is listening on port ${PORT} <---`)