const functions = require('firebase-functions')
const express = require('express')
const app = express()
app.get("/api", (req, res) => {
    res.send("This is the API output MOTHERFUCKER")
  })
  app.get("/admin", (req, res) => {
    res.send("This is the admin page")
  })
  app.get('/mobile', (req, res) => {
    res.send("Hello from the Mobile")
  })

  exports.api = functions.https.onRequest(app)