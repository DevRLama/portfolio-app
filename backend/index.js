const express = require('express');
var cors = require('cors');
const connectToMongo=require('./db');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json())



//Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/resume',require('./routes/resume'))

connectToMongo();

app.listen(PORT, () => {
    console.log(`Server at ${PORT}`);
})
