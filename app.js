const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const PORT = process.env.PORT || 3000;

// Middleware, el cliente se servira de toda la carpeta
app.use(express.static(__dirname + '/public'));
// Express HBS
hbs.registerPartials(__dirname + '/views/components');
app.set('view engine', 'hbs');
// Helpers


app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Cristian Cahui',
    });
})

app.get('/about', function (req, res) {
    res.render('about', {
        nombre: 'Cristian Cahui',
    });
})

app.listen(PORT, () => {
    console.log(`Escuchando con el puerto ${ PORT }`);
})