const express = require('express');
const path = require('path');
const routes = require('./routes');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`)
    })
});
