require('dotenv').config()
const axios = require('axios')

//async/await


// const PROTOCOL = process.env.PROTOCOL
// const BASE_URL = process.env.BASE_URL
// const APPID = process.env.APPID
// const UNITS = process.env.UNITS
// const Q = process.env.Q
// const LANG = process.env.IDIOM
// const CNT = process.env.CNT

//async/await
function fatorial(n){
  if(n < 0) return Promise.reject('Valor não pode ser negativo')
  let res = 1
  for(let i = 2; i <= n; i++) res *= i
  return Promise.resolve(res)

}

async function chamadaComAsyncAwait(){
  const n1 = 5, n2 = -2
  try{
    const res1 = await fatorial(n1)
    console.log(`Fatorial de ${n1}: ${res1}`)  
  }
  catch(err){
    console.log(`Erro: ${err}`)
  }

  try{
    const res2 = await fatorial(n2)
    console.log(`Fatorial de ${n2}: ${res2}`)
  }
  catch(erro){
    console.log(`Erro: ${erro}`)
  }
}

chamadaComAsyncAwait()
console.log('Terminando script principal...')



// function chamadaComThenECatch(){
//   const n1 = 5, n2 = -2;  
//   fatorial(n1)
//   .then(res => console.log(`Fatorial de ${n1}: ${res}`))
//   .catch(err => console.log(`Erro: ${err}`))

//   fatorial(n2)
//   .then(res => console.log(`Fatorial de ${n2}: ${res}`))
//   .catch(err => console.log(`Erro: ${err}`))
// }

// chamadaComThenECatch()

// async function hello(nome){
//   return `Oi, ${nome}`
// }
// async function outra(){
//   await
// }
// hello("Ana").then(res => console.log(res))
// function hello(nome){
//   // return `Oi, ${nome}`
//   const p = new Promise((resolve, reject) => {
//     resolve(`Oi, ${nome}`)
//   })
//   return p
// }
// const res = hello('Ana')
// res.then((textoResultante) => {
//   console.log(textoResultante)
// })


// console.log(res)
// scanf("%d", &a);
// printf("%d", a);
// printf("Tchau");

// axios.get(url).then(res => {
//   console.log('seila')
// })
// console.log('oi')

// const { 
//   PROTOCOL, 
//   BASE_URL, 
//   APPID, 
//   UNITS, 
//   Q,
//   IDIOM: LANG,
//   CNT 
// } = process.env


// const URL = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&units=${UNITS}&q=${Q}&lang=${LANG}&cnt=${CNT}`

// console.log(URL)

// const promiseResultante = axios.get(URL)

// promiseResultante
// .then(resposta => {
//   const url2 = resposta.url2
//   axios.get(url2).then(resposta2 => {
//     const url3 = resposta2.url3
//     axios.get(url3).then(resposta3 => {

//     })
//   })
// })
// .then((resposta) => {
//   resposta.data.list.forEach((previsao) => {
//     console.log(`Data: ${new Date(previsao.dt * 1000)}`)
//     console.log(`Temp min: ${previsao.main.temp_min}`)
//     console.log(`Temp max: ${previsao.main.temp_max}`)
//     console.log(`Umidade: ${previsao.main.humidity}`)
//     console.log(`Descrição: ${previsao.weather[0].description}`)
//     console.log(`****************`)
//   })

//   return resposta
// })
// .then((resposta) => {
//   //console.log(resposta)
//   const list = resposta.data.list
//   console.log(list)
//   return list
// })
// .then((resposta) => {
//   // exibir temperatura minima e maxima da primeira previsao
//   console.log(`Temp min: ${resposta[0].main.temp_min}`)
//   console.log(`Temp max: ${resposta[0].main.temp_max}`)
//   return resposta[0].weather
// })
// .then((resposta) => {
//   //exibir só a description
//   console.log(resposta[0].description)
// })
// .catch((erro) => {
//     console.log(`Erro: ${erro}`)

// })

// console.log('Terminando...')
