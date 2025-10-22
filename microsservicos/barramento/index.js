//se o import não funcionar
// const express = require('express')
// const axios = require('axios')
import express from 'express'
import axios from 'axios'
const app = express()
app.use(express.json())


//POST /eventos
app.post('/eventos', (req, res) => {
  const evento = req.body
  console.log(evento)
  axios.post('http://localhost:4000/eventos', evento)
  axios.post('http://localhost:5000/eventos', evento)
  axios.post('http://localhost:6000/eventos', evento)
  res.end()
})

const port = 10000
app.listen(port, () => {
  console.log(`Barramento. Porta ${port}.`)
})