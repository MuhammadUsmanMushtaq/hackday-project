const express = require ('express');
const app = express();

app.get ('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'Jhon', lastName: 'Cena' },
    { id: 2, firstName: 'Under', lastName: 'Taker' },
    { id: 3, firstName: 'Halk', lastName: 'Hogan' }
  ];

  res.json(customers);
});

port = 5000;

app.listen (port, () => console.log(`Server is running on ${port}`));
