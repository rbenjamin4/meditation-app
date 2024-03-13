const express = require('express');
const { create } = require('express-handlebars');
const routes = require('./routes');
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3000;

const app = express();

const hbs = create({ /* config */ });

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`)
    })
});
