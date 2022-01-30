const express = require('express');
const app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var fileName = './test.json';
var data=fs.readFileSync(fileName, 'utf8');
var words=JSON.parse(data);

let result = [];
app.listen(3000,()=> console.log("Listining on port 3000..."));

app.get('/api/results',(req,res) =>{res.send(result)});
app.post('/api/results',(req,res) =>{
    result = JSON.stringify(req.body);
    console.log(result);
    fs.writeFile(fileName, result, function writeJSON(err) {
        if (err) return console.log(err);
        console.log('writing to ' + fileName);
      });
    res.send(res.body);
});