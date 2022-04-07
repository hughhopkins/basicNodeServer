const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 5050, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

// (req, res) => {
//   res.status(200).end();
//   console.log("it worked");
// }

// Handling GET
app.get('/index', (req, res) => {
    res.status(200).end();
    console.log('/index: sent 200');
});

app.get('/', (req, res) => {
	res.status(200).end();
	console.log('/: sent 200');
});

app.get('', (req, res) => {
	res.status(200).end();
	console.log(': sent 200');
});


/* Handling POST messenges */
app.post('/index', (req, res) => {
  	console.log('req.body = ' + JSON.stringify(req.body));
	res.status(200).end();
	console.log('/index: sent 200');
});

app.post('/', (req, res) => {
  	console.log('req.body = ' + JSON.stringify(req.body));
	res.status(200).end();
	console.log('/: sent 200');
});


app.post('', (req, res) => {
  	console.log('req.body = ' + JSON.stringify(req.body));
	res.status(200).end();
	console.log(': sent 200');
});