 const express=require("express")

 const app=express()

 console.log("dddddddddd")

 app.get("/", (req,res)=>{
    res.send("doneeeeeeeeeee")
 });

 app.listen(8000, "localhost", (err)=>{
    console.log(" listening  ...........")
  })