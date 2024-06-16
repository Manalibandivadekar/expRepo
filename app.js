const express = require('express')

//init app

const app = express()

app.listen(3000,()=>{
    console.log('app listening on 3000')
})

//routes

app.get('/books',(req,res)=>
{
    res.json({mssg:"Welcome to app"})
})