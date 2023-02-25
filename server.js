const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    password: "string",
    username: "string"
  });
});

// app.use('/register', (req, res) => {
//     res.send({
//         nama: 'Ghulam',
//         umur: 22,
//         alamat: 'Jalan Jati',
//     })
// });

app.listen(3001, () => console.log('API is running on http://localhost:3001/login'));