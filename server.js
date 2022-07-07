const express = require ('express');
const axios = require ('axios');
const app = express();

app.get('/movies/:query', (req, res) => {
  axios.get(`https://www.omdbapi.com/?s=${req.params.query}&apikey=cbb1aefc`)
  .then(response => {
    res.json(response.data)
  }).catch( _error => {
    res.json({message: 'Error occured!'})
  })
})


port = 5000;

app.listen (port, () => console.log(`Server is running on ${port}`));
