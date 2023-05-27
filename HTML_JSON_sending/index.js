const express=require("express")

const app=express()


app.get("/", (req,res)=>{
   
    res.write(" <h1>data part 1 is sent </h1>")
    res.write("<h1>data part 2 is sent </h1>")
    res.write("<h1>data part 3 is sent </h1>")
    res.send()
 });

 // how to send object(in o/p side it would be in json format)


  app.get("/object", (req,res)=>{
     res.send({
        id: "1",
        name: "alexa",
     }
     )})

     //send obect using  res.json
     app.get("/obj", (req,res)=>{
        res.json({
           id: "200",
           name: "jerry",
        }
        )})
      
        //send array of object
        app.get("/arrayObj", (req,res)=>{
            res.json([
                {
               id: "200",
               name: "jerry",
            },
            {
                id: "201",
                name: "alexa ",
             },
             {
                id: "202",
                name: "iphone",
             },
 

        ]
            )})
          


 // how to send array of object



 app.l
 isten(8000, "localhost", (err)=>{
    console.log(" listening  ...........")
  })