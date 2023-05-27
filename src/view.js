const express=require("express")
 const path= require("path")

 const app= express();


 //here connect publuc nd src folder.
  console.log(__dirname)

  const staticPath= path.join(__dirname, "../public4+tengine")

   //set views directory
     app.set("view engine", "hbs")
    


  //built in middleware
  app.use(express.static(staticPath))      
    //after applying this css available in public folder will apply to view's contact.hbs file too

  app.get("/tengine", (req,res)=>{
    res.render("contact.hbs")
 })

 app.get("/tengine", (req,res)=>{
    res.send("this is temlate engine")
 })

 app.get("/note", (req,res)=>{
    res.render("note.hbs")
 })


 app.get("/web", (req,res)=>{
    res.send( " <h1>PATH LINKAGE DONE. Html file sent!!!</h1>")
 })

 app.get("/*", (req,res)=>{
   res.render("error.hbs")
 })

 app.listen(8000, "localhost", (err)=>{console.log("listening....")})