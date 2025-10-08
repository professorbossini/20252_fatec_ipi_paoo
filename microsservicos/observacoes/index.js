const { v4 : uuidv4 } = require('uuid')
const express = require('express')
const app = express()
app.use(express.json())

/*
{
  1: [
    {id: 100, texto: 'comprar acucar', lembreteId: 1}
  ],
  2: [
    {id: 1000, texto: 'qq coisa', lembreteId: 2}, 
    {id: 1001, texto: 'outra coisa', lembreteId: 2}
  ],
  3: [
  
  ]
}
*/
const observacoesPorLembrete = {}  
//POST /lembretes/1/observacoes (req, res) => {}
app.post('/lembretes/:id/observacoes', (req, res) => {
  const idObs = uuidv4()
  const { texto } = req.body
  const { id: lembreteId } = req.params
  const observacao = {id: idObs, texto, lembreteId}
  const observacoesDoLembrete = observacoesPorLembrete[lembreteId] || []
  observacoesDoLembrete.push({observacao})
  observacoesPorLembrete[lembreteId] = observacoesDoLembrete
  res.status(201).json(observacoesDoLembrete)
})

//GET /lembretes/:id/observacoes (req, res) => {}
app.get('/lembretes/:id/observacoes', (req, res) => {
  //devolver a lista de observações do lembrete cujo id faz parte do path
  //ou uma lista vazia se ainda não existir
  res.status(200).json(observacoesPorLembrete[req.params.id] || [])
})

app.post('/eventos', (req, res) => {
  const evento = req.body
  console.log(evento)
  res.end()
})

const port = 5000
app.listen(port, () => console.log(`Observações. Porta ${port}.`))


