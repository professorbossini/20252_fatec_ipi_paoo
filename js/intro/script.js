//1 + 2 + ... + (n-1) + n
console.log('Começando...')
function calculoRapidinho(n){
  //fazer o seguinte teste
  //se o valor n for pelo menos 0, continuar como já é
  //caso contrário, devolver uma promise no estado rejected com a seguinte mensagem
  //Somente valores positivos, por favor
  return n >= 0 ? Promise.resolve((n / 2) * (n + 1)) : Promise.reject('Somente positivos')
}
let minhaPromise = calculoRapidinho(10)
minhaPromise
.then((res) => { 
  console.log(`Resultado: ${res}`)
})
.catch((erro) => {
  console.log(`Erro: ${erro}`)
})

let minhaPromise2 = calculoRapidinho(-6)
.then(res => {
  console.log(`Resultado: ${res}`)
})
.catch(erro => console.log(`Erro: ${erro}`))
console.log('Terminando...')

function f (a){
  console.log(a)
}
const a = 2
f(a)



// console.log('Começando...')
// function calculoDemorado(n){
//   let p = new Promise(function (resolve, reject){
//     let res = 0
//     for(let i = 1; i <= n; i++){
//       res = res + i;
//     }
//     resolve(res)
//   })
//   return p
// }
// let minhaPromise = calculoDemorado(10)
// //then/catch
// minhaPromise
// .then((somatorio) => {
//   console.log(`Somatório: ${somatorio}.`)
// })
// .catch((erro) => {
//   console.log(`Erro: ${erro}.`)
// })
// console.log('Terminando o script principal...')



// //inferno de callbacks
// //callback hell
// const fs = require('fs')
// const abrirArquivo = function(nomeArquivo){
//   const exibirConteudo = function(erro, conteudo){
//     if(erro){
//       console.log(`Deu erro: ${erro}`)
//     }
//     else{
//       console.log(`Conteúdo: ${conteudo}`)
//       const dobro = Number(conteudo.toString()) * 2
//       const finalizar = function(erro){
//         if(erro){
//           console.log(`Deu erro escrevendo o dobro: ${erro}`)
//         }
//         else{
//           console.log('A escrita do dobro deu certo')
          
//         }
//       }
//       fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//       console.log('Fim da exibirConteudo...')
//     }  
//   }
//   fs.readFile(nomeArquivo, exibirConteudo)
//   console.log('Fim da abrirArquivo...')
// }
// //chamar a função daqui a pouco
// abrirArquivo("arquivo.txt")

// // function demorada(tempo){
// //   const atualMaisTempo = new Date().getTime() + tempo
// //   while(new Date().getTime() <= atualMaisTempo);
// //   const d = 8 + 4
// //   return d
// // }
// // const a = 2 + 6
// // const b = 5 + 9
// // setTimeout(() => {
// //   const tempo = 7000
// //   const d = demorada(tempo)
// //   console.log(`d(${tempo}): ${d}`)
// // }, 0)

// // setTimeout(() => {
// //   const tempo = 1000
// //   const d = demorada(tempo)
// //   console.log(`d(${tempo}): ${d}`)
// // }, 0)


// // const e = 2 + a + b
// // console.log(`e: ${e}`)

// // const a = 2 + 7
// // const b = 5
// // console.log(a + b)

// // console.log('Eu primeiro...')
// // console.log('Agora eu...')
// // console.log('Sempre a última :(')


// // //uma concessionária com CNPJ e endereço, com logradouro, numero e bairro (pensar na estrutura que um bairro pode ter). Ela tem um estoque de veiculos. Cada um tem mraca, modelo e ano de fabricação. Precisa pensar que o número de veículos que a concessionária tem pode variar ao longo do tempo, ele pode estar vazio, pode ter 15 veiculos, pode ter 502 e assim por diante.

// // let calculadora = {
// //   soma: (a, b) => a + b,
// //   subtracao: function(a, b){
// //     return a - b
// //   } 
// // }
// // //dados esses dsi valores, aplicar todas as operações da clculadora sobre eles
// // //dessa vez, usando a função values, em vez de keys
// // let x = 2
// // let y = 3
// // // console.log(Object.values(calculadora))
// // for (let operacao of Object.values(calculadora)){
// //   //Antes de mostrar o resultado, mostrar o nome da função, interpolando em um único console.log ${}
// //   console.log(`${operacao.name}: ${operacao(x, y)}`)
// // }

// // //GSON
// // // const concessionaria = {
// // //   cnpj: '00011122210001-45',
// // //   endereco: {
// // //     logradouro: 'Rua A',
// // //     numero: 120,
// // //     bairro: {
// // //       nome: 'Vila J',
// // //       regiao: 'zona norte'
// // //     }
// // //   },
// // //   veiculos: {
// // //     'ford': [
// // //       {
// // //         modelo: 'Ka',
// // //         anoDeFabricacao: 2015
// // //       },
// // //       {
// // //         modelo: 'Ecosport',
// // //         anoDeFabricacao: 2018
// // //       }
// // //     ],
// // //     'chevrolet': [
// // //       {
// // //         modelo: 'Onix',
// // //         anoDeFabricacao: 2025
// // //       } 
// // //     ]
// // //   }
// // // }
// // // for (let marca of Object.keys(concessionaria.veiculos)){
// // //   console.log(marca)
// // //   const veiculosDaMarca = concessionaria.veiculos[marca]
// // //   // console.log(veiculosDaMarca)
// // //   for (let veiculo of veiculosDaMarca){
// // //     console.log(veiculo.modelo)
// // //   }
// // // }

// // // for(let veiculoFord of concessionaria.veiculos.ford){
// // //   console.log(veiculoFord)
// // // }

// //   //escrever um for que, internamente, itera sobre cada possivel marca, para cada marca, mostrar somente o modelo do veiculo
// //   //dica: pesquise sobre 'keys' em Javascript

// //   // veiculos:[
// //   //   {
// //   //     marca: 'Ford',
// //   //     modelo: 'Ka',
// //   //     anoDeFabricacao: 2015
// //   //   },
// //   //   {
// //   //     marca: 'Chevrolet',
// //   //     modelo: 'Onix',
// //   //     anoDeFabricacao: 2022
// //   //   }
// //   // ]



// // // console.log(concessionaria.endereco.bairro.regiao)
// // // console.log(concessionaria['endereco']['bairro']['nome'])

// // // //objeto Javascript não é sinônimo de Objeto JSON (Javascript Object Notation), mas são parecidos
// // // //Uma pessoa se chama Maria, tem 21 anos e mora na Rua B, número 121
// // // let pessoa = {
// // //   nome: 'Maria',
// // //   idade: 21,
// // //   endereco: {
// // //     logradouro: 'Rua B',
// // //     numero: 121
// // //   }
// // // }

// // // console.log(pessoa.endereco.logradouro)
// // // console.log(pessoa['endereco']['numero'])
// // // console.log(pessoa['endereco'].logradouro)

// // //uma pessoa se chama João e tem 17 anos
// // // let pessoa = {
// // //   nome: 'João',
// // //   idade: 17
// // // }

// // // console.log('Me chamo ' + pessoa.nome)
// // // console.log('Minha idade é ' + pessoa['idade'])

// // // function saudacoesFactory(saudacao, nome){
// // //   let a
// // //   return function(){
// // //     console.log(`${saudacao}, ${nome}`)
// // //   }
// // // }

// // // let olaJoao = saudacoesFactory('ola', 'joao')
// // // let tchauJoao = saudacoesFactory('tchau', 'joao')
// // // olaJoao()
// // // tchauJoao()

// // // function ola(){
// // //   let nome = 'João'
// // //   return function(){
// // //     console.log(`Ola, ${nome}`)
// // //   }
// // // }
// // // let olaResult = ola()

// // // olaResult()


// // // function f(){
// // //   let nome = 'João'
// // //   function g(){
// // //     console.log(nome)
// // //   }
// // //   g()
// // // }
// // // f()


// // // //closures
// // // let umaFuncao = function(){
// // //   console.log('Fui armazenada em uma variável')
// // // }
// // // //umaFuncao()
// // // function f(funcao){
// // //   funcao()
// // // }
// // // //f(umaFuncao())
// // // function g(){
// // //   function outraFuncao(){
// // //     console.log('Fui criada por g')
// // //   }
// // //   return outraFuncao
// // // }
// // // f(g())()
// // // f(g)
// // // g()()
// // // const gResult = g()
// // //gResult()

// // // f(function(){
// // //   console.log("Sou uma function passada para f")
// // // })
// // // f(() => console.log("Sou uma arrow passada para f"))

// // //vetores, parte 2
// // // mapreduce
// // // const valores = [1, 2, 3, 4]
// // // const soma = valores.reduce((ac, v) => ac + v)
// // // console.log(soma)

// // // const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// // // nomes.
// // // const todosComecamComA = nomes.every(n => n.startsWith('A'))
// // // console.log(todosComecamComA)
// // // const peloMenosUmComecaComA = nomes.some(n => n.startsWith('A'))
// // // console.log(peloMenosUmComecaComA)
// // // //dada a coleção a seguir, produzir outra coleção contendo o quadrado de cada número
// // // //usando arrow functions e digitando a menor quantidade de caracteres possível
// // // const numeros = [1, 2, 3] //[1, 4, 9]
// // // console.log(numeros.map(n => n * n))
// // //['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina'] -> ['A', 'A', 'R', 'A', 'C']
// // // const res = nomes.map(function(nome){return nome[0]})
// // // console.log(res)
// // // const apenasComA = nomes.filter(nome => nome.startsWith('A'))
// // // console.log(apenasComA)
// // // //arrow functions
// // //tem exatamente um parâmetro: parênteses podem ser omitidos
// // // const dobro = n => 2 * n
// // // console.log(dobro(2))
// // //tem somente uma linha que produz um valor a ser devolvido: 
// // // const dobro = (n) => {
// // //   console.log('Calculando o dobro...') 
// // //   return 2 * n
// // // }
// // // console.log(dobro(1))
// // // const dobro = (n) => 2 * n
// // // console.log(dobro(5))

// // //tem somente uma linha: as chaves podem ser omitidas
// // // const hello = () => console.log("Hello")
// // // hello()
// // // const hello = () => {
// // //   console.log('Hello')
// // // }
// // // hello()

// // // const triplo = function(n = 5){
// // //   return 3 * n
// // // }
// // // console.log(triplo())
// // // console.log(triplo(10))

// // // const dobro = function (n){
// // //   return 2 * n
// // // }
// // // console.log(dobro(6))
// // ///callable "chamável", que pode ser chamado

// // // function soma(a, b){
// // //   return a + b
// // // }
// // // const res = soma(2, 3)
// // // console.log(res)
// // // function hello(){
// // //   console.log('Oi')
// // // }
// // // hello()
// // // function hello(nome){
// // //   console.log('Hello, ' + nome)
// // // }
// // // hello('Ana')
// // // int somar(int a, int b){
// // //   return a + b;
// // // }

// // //vetores
// // // v2 = [2, "abc", true]
// // // console.log(v2)
// // // for(let i = 0; i < v2.length; i++){
// // //   console.log(v2[i])  
// // // }
// // // v1 = []
// // // console.log(v1.length)
// // // v1[0] = 3.4
// // // console.log(v1.length)
// // // v1[10] = 2
// // // console.log(v1.length)
// // // v1[7] = "abc"

// // //comparação
// // //operadores == e ===
// // // [] new ArrayList<Object>();
// // // console.log([] == [])
// // // console.log([] == false)
// // // console.log(null == undefined)
// // // console.log (null == null)
// // // a = []
// // // b = 2
// // // b = "abc"
// // // if(b == a){

// // // }
// // // console.log(0 == [0, 1])
// // // console.log(true == "true")
// // // console.log(true == "1")
// // // console.log(true == 1)
// // // console.log(1 === "1")
// // // console.log(1 === 1)
// // // console.log(2 == "2")
// // // console.log(1 == 1)
// // //coerção
// // // const n1 = 2
// // // const n2 = '3'
// // // // coerção implícita
// // // const n3 = n1 + n2
// // // console.log(n3)
// // // // coerção explícita
// // // const n4 = n1 + Number(n2)
// // // console.log(n4)


// // //sistema de tipos
// // // let idade = 20
// // // console.log(typeof(idade))
// // // const nome = "Ana"
// // // console.log(typeof(nome))
// // // idade = "vinte"
// // // console.log(typeof(idade))
// // //declaração de variáveis
// // //const, let e var
// // //hoist, içar
// // // var idade = 18
// // // console.log("Oi, " + nome)
// // // if(idade >= 18){
// // //   var nome = "João"
// // //   console.log("Sim, " + nome + ". Você pode dirigir.")  
// // // }
// // // console.log(`Até mais, ${nome}`)
// // // int a;
// // // //String a;
// // // var linguagem = "Javascript"
// // // console.log("Aprendendo " + linguagem)
// // // var linguagem = "Java"
// // // console.log("Aprendendo " + linguagem)
// // // var c = 2
// // // var nome = "José"
// // // nome = "José da Silva"
// // // console.log(nome)
// // // let a = 2
// // // let nome = "José"
// // // console.log(a)
// // // console.log(nome)
// // // nome = "José da Silva"
// // // console.log(nome)

// // //String nome = "José"
// // // const nome = 'José'
// // // console.log(nome)
// // // nome = 'José da Silva'