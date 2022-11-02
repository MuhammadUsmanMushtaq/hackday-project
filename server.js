const express = require('express');
require('dotenv').config();
const axios = require('axios');
const app = express();
const api = process.env.REACT_APP_API_KEY;

app.get('/movies/:query', (req, res) => {
  axios
    .get(`https://www.omdbapi.com/?s=${req.params.query}&apikey=${api}`)
    .then((response) => {
      res.json(response.data);
    })
    .catch((_error) => {
      res.json({ message: 'Error occured!' });
    });
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on ${port}`));
