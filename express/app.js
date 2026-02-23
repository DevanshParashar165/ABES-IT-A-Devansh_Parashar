import express from 'express'

const app = express()

app.get('/',(req,res)=>{
    res.send("This server is running perfectly")
})

app.get('/about',(req,res)=>{
    res.send(`<img src='https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034019.jpg?semt=ais_user_personalization&w=740&q=80' height='100px'>`)
})

app.listen(5000,(err)=>{
    if(err){
        console.log('Error : ',err.message)
    }else{
        console.log(`Server is listening on port http://localhost:5000`)
    }
})