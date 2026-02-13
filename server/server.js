import http from "http"
// import { url } from "inspector"

const server=http.createServer((req,res)=>{
    const url =req.url
    if(url=="/") res.write("hoem apge");
    else if(url=="/about") res.write("about page");
    else if(url=="/contact") res.write("contact page");
    else res.write("404 not found");
    res.end();
})
server.listen(5000,()=>{
    console.log("server running on 5000")
})
