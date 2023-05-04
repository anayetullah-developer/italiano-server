const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors())

const allData = require('./data.json');

app.get('/', (req, res) => {
  res.send('Server is working!');
})

app.get('/chefs', (req, res) => {
    res.send(allData);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = allData.find(data => data.id == id);
    res.send(selectedChef);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});