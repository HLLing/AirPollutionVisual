const express = require('express');
var app = express();
app.use(express.static("public"));

app.get('/map', function (req, res) {
    res.sendfile('public/view/index.html');
});

app.listen(3000, function () {
    console.log('app is listening at port 3000');
});
