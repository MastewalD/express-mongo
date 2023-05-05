const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const app = express();
const port = 3010;
const dbURI =
  'mongodb+srv://mastewal:Zt0YU34J30uz313X@cluster0.zdppoty.mongodb.net/node-tuts?retryWrites=true&w=majority';

mongoose
  .connect(dbURI)
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

app.get('/add-user', (req, res) => {
  const user = new User({
    userName: 'maste',
    email: 'maste@gmail.com',
    password: '123',
  });
  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
