import http from "http"
import fs from "fs"
import { Readable } from "stream";
import { json } from "stream/consumers";

// const app = http.createServer((req,res)=>{
//     // console.log('Server started.....')
//     // res.end('This is my server')
//     res.writeHead(200, { "Content-Type": "text/html" });
//     const url = req.url
//     if(req.url === '/'){
//         res.end(`<h2>ABES Engineering college</h2>
//             <img src='https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034019.jpg?semt=ais_hybrid&w=740&q=80' height = '100px'/>`);
//     }
//     else if(req.url === '/about'){
//         res.end('This is about page');
//     }
//     else if(req.url === '/contact'){
//         res.end('Phone no:- 2345xxxxxx');
//     } 
//     else if(req.url === '/class'){
//         res.end('IT-A');
//     }   
//     else{
//         res.end('404 page not found')
//     }
// })

// app.listen(8000,(req,res)=>{
//     console.log('Server is running on port 8000.....')
// })

// fs.writeFileSync('text.txt',"This is the file created using nodejs");
// fs.writeFileSync('abes.txt',"We are student of abes");

// const content = fs.readFileSync('abes.txt','utf-8');
// console.log(content)

// fs.writeFile("new.txt","This is new file",()=>{});

// fs.readFile('./new.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(result)
//     }
// })

// fs.appendFileSync("./new.txt",' This is the appended line')

// fs.appendFile('./new.txt'," \nThis is appended data with normal callback",()=>{})

// fs.appendFile('./new.txt'," \nThis is appended data with if else callback",(err)=>{
//     if(err){
//         console.log("Error : ",err)
//     }
// })

// fs.cpSync("a1.txt","b1.txt")

// fs.cp('a1.txt','b1.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// fs.unlinkSync('./a1.txt')

// fs.writeFile("a1.txt","This is content of a1",()=>{});

// const filesToDelete = [
//     'a1.txt',
//     'b1.txt',
//     'text.txt'
// ]

// try {
//     await Promise.all(
//         filesToDelete.map(file=>
//             fs.unlink(file).catch(err => {
//                 if(err.code !== 'ENOENT'){
//                     console.error(`Error deleting ${file} : `,err)
//                 }
//             })
//         )
//     );
//     console.log('Files deleted successfully');
// } catch (error) {
//     console.error('Error during file deletion :', error);
// }

// const users = JSON.parse(
//     fs.readFileSync("./users.json","utf-8")
// )

// let user = {
//     name: "New User",
//     age: 30,
//     language: ["PHP", "Go", "JavaScript"]
// };

// users.push(user)

// fs.writeFile('users.json',JSON.stringify(users),(err)=>{
//     if(err) throw err ;
//     console.log('Done writing')
// })

