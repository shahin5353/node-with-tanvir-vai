const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res)=>{
    res.send('<h1 style="text-align:center">Hello world, Shahin here!!!</h1>')
})

app.listen(port,()=>{
    console.log('app listening from ', port);
})