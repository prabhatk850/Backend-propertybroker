const express = require('express');
const allRoutes = require('./Router/router');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./Database/connection');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api",allRoutes);

const start=()=>{
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
        }
    );
}

start();

