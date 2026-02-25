import express from 'express'
import upload from './multer.js'

const app = express()
app.use("/img", express.static("uploads"));

// app.get('/',(req,res)=>{
//     res.send("This server is running perfectly")
// })

// app.get('/about',(req,res)=>{
//     res.send(`<img src='https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034019.jpg?semt=ais_user_personalization&w=740&q=80' height='100px'>`)
// })

// app.post("/upload", upload.single("image"), (req, res) => {
//   res.send({
//     path: req.file.filename, 
//   });
// });

const port = 8000

const student = [{
    id : 1,
    name : 'abc',
    class : 'B.tech'
}]

//route

app.get('/',(req,res)=>{
    try {
        return res.status(200)
                  .json(student)
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(8000,(err)=>{
    if(err){
        console.log('Error : ',err.message)
    }else{
        console.log(`Server is listening on port http://localhost:${port}`)
    }
})