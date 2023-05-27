 const express=require("express")

 const app=express();

  app.get("/", (req,res)=>{
    res.send("home pg")
  })
  app.get("/about", (req,res)=>{
    res.send("about page")
  })

  app.get("/contact", (req,res)=>{
    res.send("cotact page")
  })

  app.get("/about/*", (req,res)=>{
    res.send("<h1> 404 error in the page INSIDE about page</h1>")
  })

  //error page 404
  app.get("/*", (req,res)=>{
    res.send("<h1>404 error page</h1>")
  })

  app.listen(8000, "localhost", (err)=>{})