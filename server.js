const express = require('express');
const initDatabase = require('./app/config/db');
const bodyParser = require('body-parser');
const app = express();

const port = 3001;

// TODO For parsing JSON
app.use(bodyParser.json({
        limit: '20mb'
    }))
    // TODO: For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    limit: '20mb',
    extended: true
}))

app.use(require('./app/routes'))

app.listen(port, () => {
    console.log('Server running');
})

initDatabase();