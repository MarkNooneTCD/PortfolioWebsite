const express = require('express'),
      path = require('path');
const app = express();

app.get('/', (req, res) => res.sendfile("./public/index.html"));
app.get('/about', (req, res) => res.sendfile("./public/about.html"));
app.get('/acuacica', (req, res) => res.sendfile("./public/acuacica.html"));
app.get('/cjsgaff', (req, res) => res.sendfile("./public/cjsgaff.html"));
app.get('/syze', (req, res) => res.sendfile("./public/syze.html"));
app.get('/stoury', (req, res) => res.sendfile("./public/stoury.html"));
app.get('/renderhood', (req, res) => res.sendfile("./public/renderhood.html"));

app.use(express.static(__dirname + '/public'));
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
