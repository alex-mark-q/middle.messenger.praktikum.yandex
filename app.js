const express = require('express');

const router = express.Router();
const engines = require('consolidate');
const hbs = require('hbs');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helpers = require('./helpers/hbsHelpers');

const chatRouter = require('./routes/chat');

const app = express();

hbs.registerPartials(path.join(__dirname, 'src/views'), (err) => {});
for (const helper in helpers) {
  hbs.registerHelper(helper, helpers[helper]);
}

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/login.html'));
});

app.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/signin.html'));
});

// app.use('/', chatRouter);
app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/chat.html'));
});

app.get('/dialog', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/dialog.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/profile.html'));
});

app.get('/500', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/500.html'));
});

app.get('/404', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/404.html'));
});

const { PORT = 3000 } = process.env;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
