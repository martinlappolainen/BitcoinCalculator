const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true }));

app.get('/', function(request,response){
    //console.log(request);
    //response.send('<h1>Hello World</h1>');
    console.log(__dirname);
    response.sendFile(__dirname +"/index.html");
});

app.post('/',function(req,res){
    let number1 = req.body.num1;
    let number2 = req.body.num2;
    console.log("Number 1", number1);
    console.log("Number 2", number2);
    res.redirect('/');
});

app.listen(3000, function(){
    console.log('Server is running on Port 3000');
});