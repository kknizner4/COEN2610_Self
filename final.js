// final.js - RESTful API server using http: 
// Katie Knizner 9 May 2022
// To start server:  $ node app.js
// For client with localhost use web browser:  http://localhost:3000 or
// For remote host use http://bloomcounty.eng.mu.edu:3000
//
//
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Riddle me this Batman!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
