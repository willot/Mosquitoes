const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/mosquitoes'));

app.get('/*', function(req, res) {res.sendFile('index.html', {root: 'dist/mosquitoes/'});});

app.listen(process.env.PORT || 8080);