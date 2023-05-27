
 const express=require("express")
 const path= require("path")

 const app= express();


 //here connect publuc nd src folder.
  console.log(__dirname)

  const staticPath= path.join(__dirname, "../public")

  //built in middleware
  app.use(express.static(staticPath))


 app.get("/connect", (req,res)=>{
    res.send( " <h1>PATH LINKAGE DONE. Html file sent!!!</h1>")
 })

 app.listen(8000, "localhost", (err)=>{console.log("listening....")})