

const express=require("express")
const app=express()
const axios = require('axios');

app.get('/api/data', (req, res) => {
    // Make an API call using axios
    axios.get('http://universities.hipolabs.com/search?country=United+States')
      .then(response => {
        // Handle the API response

        //const d= JSON.stringify(response.data)
       
         const d= response.data
        //res.write()
      
       
        // res.write("<h1>d[0].country</h1>")
        res.write(d[0].country +"                  ")
        res.write(d[0].name +"                  ")
       
        res.write(d[1].country +"                   ")
        res.write(d[1].name+"                 ")
        
        // res.write(d[0].web_pages) //error in fetching this data
        //res.json(response.data);
        res.send()
      })
      .catch(error => {
        // Handle any errors that occurred during the API call
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      });
  });


  app.listen(8000, "localhost", (err)=>{

  })

