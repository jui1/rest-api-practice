const express = require('express')

const app = express();
const  users = require('./MOCK_DATA.json')
const PORT = 8000;

app.get("/api/users",(req,res)=>{
    return res.json(users);
})

app.get('/user',(req,res)=>{
    const html = `
    <ul>
    ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
    </ul>`;

    res.send(html)
})

app.route("/api/users/:id")
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);

    return res.json(user)
}).put((req,res)=>{
   return res.json({status :"pending"})
}).delete((req,res)=>{
    return res.json({status :"pending"})
})

app.post("/api/users",(req,res)=>{
    return res.json({ status : "pending"})
})










app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`)
})