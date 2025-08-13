function saudacoesFactory(saudacao, nome){
  let a
  return function(){
    console.log(`${saudacao}, ${nome}`)
  }
}

let olaJoao = saudacoesFactory('ola', 'joao')
let tchauJoao = saudacoesFactory('tchau', 'joao')
olaJoao()
tchauJoao()

// function ola(){
//   let nome = 'João'
//   return function(){
//     console.log(`Ola, ${nome}`)
//   }
// }
// let olaResult = ola()

// olaResult()


// function f(){
//   let nome = 'João'
//   function g(){
//     console.log(nome)
//   }
//   g()
// }
// f()


// //closures
// let umaFuncao = function(){
//   console.log('Fui armazenada em uma variável')
// }
// //umaFuncao()
// function f(funcao){
//   funcao()
// }
// //f(umaFuncao())
// function g(){
//   function outraFuncao(){
//     console.log('Fui criada por g')
//   }
//   return outraFuncao
// }
// f(g())()
// f(g)
// g()()
// const gResult = g()
//gResult()

// f(function(){
//   console.log("Sou uma function passada para f")
// })
// f(() => console.log("Sou uma arrow passada para f"))

//vetores, parte 2
// mapreduce
// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) => ac + v)
// console.log(soma)

// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// nomes.
// const todosComecamComA = nomes.every(n => n.startsWith('A'))
// console.log(todosComecamComA)
// const peloMenosUmComecaComA = nomes.some(n => n.startsWith('A'))
// console.log(peloMenosUmComecaComA)
// //dada a coleção a seguir, produzir outra coleção contendo o quadrado de cada número
// //usando arrow functions e digitando a menor quantidade de caracteres possível
// const numeros = [1, 2, 3] //[1, 4, 9]
// console.log(numeros.map(n => n * n))
//['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina'] -> ['A', 'A', 'R', 'A', 'C']
// const res = nomes.map(function(nome){return nome[0]})
// console.log(res)
// const apenasComA = nomes.filter(nome => nome.startsWith('A'))
// console.log(apenasComA)
// //arrow functions
//tem exatamente um parâmetro: parênteses podem ser omitidos
// const dobro = n => 2 * n
// console.log(dobro(2))
//tem somente uma linha que produz um valor a ser devolvido: 
// const dobro = (n) => {
//   console.log('Calculando o dobro...') 
//   return 2 * n
// }
// console.log(dobro(1))
// const dobro = (n) => 2 * n
// console.log(dobro(5))

//tem somente uma linha: as chaves podem ser omitidas
// const hello = () => console.log("Hello")
// hello()
// const hello = () => {
//   console.log('Hello')
// }
// hello()

// const triplo = function(n = 5){
//   return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))

// const dobro = function (n){
//   return 2 * n
// }
// console.log(dobro(6))
///callable "chamável", que pode ser chamado

// function soma(a, b){
//   return a + b
// }
// const res = soma(2, 3)
// console.log(res)
// function hello(){
//   console.log('Oi')
// }
// hello()
// function hello(nome){
//   console.log('Hello, ' + nome)
// }
// hello('Ana')
// int somar(int a, int b){
//   return a + b;
// }

//vetores
// v2 = [2, "abc", true]
// console.log(v2)
// for(let i = 0; i < v2.length; i++){
//   console.log(v2[i])  
// }
// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log(v1.length)
// v1[10] = 2
// console.log(v1.length)
// v1[7] = "abc"

//comparação
//operadores == e ===
// [] new ArrayList<Object>();
// console.log([] == [])
// console.log([] == false)
// console.log(null == undefined)
// console.log (null == null)
// a = []
// b = 2
// b = "abc"
// if(b == a){

// }
// console.log(0 == [0, 1])
// console.log(true == "true")
// console.log(true == "1")
// console.log(true == 1)
// console.log(1 === "1")
// console.log(1 === 1)
// console.log(2 == "2")
// console.log(1 == 1)
//coerção
// const n1 = 2
// const n2 = '3'
// // coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// // coerção explícita
// const n4 = n1 + Number(n2)
// console.log(n4)


//sistema de tipos
// let idade = 20
// console.log(typeof(idade))
// const nome = "Ana"
// console.log(typeof(nome))
// idade = "vinte"
// console.log(typeof(idade))
//declaração de variáveis
//const, let e var
//hoist, içar
// var idade = 18
// console.log("Oi, " + nome)
// if(idade >= 18){
//   var nome = "João"
//   console.log("Sim, " + nome + ". Você pode dirigir.")  
// }
// console.log(`Até mais, ${nome}`)
// int a;
// //String a;
// var linguagem = "Javascript"
// console.log("Aprendendo " + linguagem)
// var linguagem = "Java"
// console.log("Aprendendo " + linguagem)
// var c = 2
// var nome = "José"
// nome = "José da Silva"
// console.log(nome)
// let a = 2
// let nome = "José"
// console.log(a)
// console.log(nome)
// nome = "José da Silva"
// console.log(nome)

//String nome = "José"
// const nome = 'José'
// console.log(nome)
// nome = 'José da Silva'