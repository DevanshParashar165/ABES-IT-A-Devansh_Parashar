import http from "http"
import fs from "fs"

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

fs.writeFile("new.txt","This is new file",()=>{});
