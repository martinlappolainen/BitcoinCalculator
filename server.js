const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true }));

app.get('/', function(req,res){
    //let url="https://api.coindesk.com/v1/bpi/currentprice/eur.json";
    let url="http://restcountries.eu/rest/v2/name/estonia?fullText=true";
    axios.get(url).
    then((response)=>{
        let nimi=response.data[0].name;
        let cap=response.data[0].capital;
        let time=response.data[0].timezones;
        let cur= response.data[0].currencies[0].name;
        let reg= response.data[0].regionalBlocs[0].name;
        /*let disclaimer = response.data.disclaimer
        let eurRate= response.data.bpi.EUR.rate;
        let eurCode= response.data.bpi.EUR.code;
        let usdRate= response.data.bpi.USD.rate;
        let usdCode= response.data.bpi.USD.code;*/
        
        res.write(`<p> Name - ${nimi}</p>`);
        res.write(`<p> Capital - ${cap}</p>`);
        res.write(`<p> Timezones - ${time}</p>`);
        res.write(`<p> Currency - ${cur}</p>`);
        res.write(`<p> Regional Blocs - ${reg}</p>`);
        res.send();

    }).
    catch((error)=>{
        console.log(error);
    })
    /*//console.log(request);
    //response.send('<h1>Hello World</h1>');
    console.log(__dirname);
    response.sendFile(__dirname +"/index.html");*/
});

/*app.post('/',function(req,res){
    let number1 = Number(req.body.num1);
    let number2 = Number(req.body.num2);
    //console.log("Number 1", number1);
    //console.log("Number 2", number2);
    console.log(req.body);
    let result = number1 + number2; 
    res.send(`${result}`);
});*/

app.listen(3000, function(){
    console.log('Server is running on Port 3000');
});