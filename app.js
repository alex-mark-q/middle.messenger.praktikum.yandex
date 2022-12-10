var express = require('express');
var hbs = require('hbs');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helpers = require('./helpers/hbsHelpers');

var app = express();

hbs.registerPartials(path.join(__dirname, 'src/partials'), (err) => {});
for (let helper in helpers) {
  hbs.registerHelper(helper, helpers[helper]);
}

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
});

app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/chat.html'))
});

const { PORT = 3000 } = process.env
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
