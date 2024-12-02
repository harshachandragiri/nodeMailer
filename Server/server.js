// import sendMail from '../controllers/sendEmail';
const express=require('express');
const app=express();
let PORT=1000;
const sendMail=require('../controllers/sendEmail')


app.get('/',(req,res)=>{
    res.send("I am Server Running On Home Page")
});
app.get('/sendEmail',sendMail)
app.get('/*',()=>{
    console.log("Error Babai")
})

const start=async ()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`Running in Port ${PORT} `);
        })
    }
    catch(error){
        console.log(error);
    }
}


start();