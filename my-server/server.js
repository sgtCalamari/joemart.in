const express = require('express');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 4200;
const app_folder = 'dist/my-app'

var corsOptions = {
	origin: 'http://localhost:' + port
};

app.use(compression());
app.use(cors(corsOptions));

app.get('*', express.static(app_folder, {maxAge: '1y'}));
app.all('*', function(req, res) {
	res.status(200).sendFile(`/`, {root: app_folder});
});

app.listen(port, () => {
	console.log(`Node Express server for ${app.name} listening at http://localhost:${port}`);
});
