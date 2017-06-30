// Global variables for linter to ignore:

// Import Required Modules
const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

// Global Variables
const port = 3000;

// Get nunjucks going
nunjucks.configure('templates', {
	autoescape: true,
	noCache: true,
	express: app
});

// Turn on public folder
app.use(express.static('public', {index: false}));

app.get('/', (req, res) => {
	res.render('index.njk');
});

app.get('/result-page', (req, res) => {
	res.render('result-page.njk');
});

app.get('/[a-z-]+', (req, res) => {
	var urlArray = req.url.split('/');
	res.render('pages/' + urlArray[1] + '.njk');
});

app.listen(port);
