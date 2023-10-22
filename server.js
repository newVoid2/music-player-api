const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('success');
})

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})