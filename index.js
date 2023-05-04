const express = require('express')
const app = express();
const port = 5000;
const allData = require('./data.json');
app.get('/', (req, res) => {
  res.send('Server is working!');
})

app.get('/data', (req, res) => {
    res.send(allData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});