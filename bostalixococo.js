// Q1
let texto = "Aprendendo JavaScript é divertido e recompensador!";

console.log(texto.toUpperCase());

console.log(texto.includes("divertido"));

let palavras = texto.split(" ");
console.log(palavras);

let textoComHifen = palavras.join("-");
console.log(textoComHifen);

// Q2
let num1 = 200.456;
let num2 = 150.789;

console.log(Math.round(num1));

console.log("Máximo:", Math.max(num1, num2));
console.log("Mínimo:", Math.min(num1, num2));

console.log(Math.sqrt(num2));

console.log(num1.toExponential());

// Q3
let x = 8;
let y = 12;
let z = 8;

console.log(x >= y);

console.log(x != z);
console.log(x !== z);

console.log(x < y && z > x);

console.log(x === z || y < z);

// Q4
let nulo = null;

console.log(nulo == undefined);
console.log(nulo === undefined);

let indefinido;

console.log(isNaN(indefinido));

let numStr2 = "123abc";
let convertido = Number(numStr2);

console.log(isNaN(convertido));

// Q5
let numeros = [10, 20, 30, 40, 50];

numeros.push(60);
console.log(numeros);

let removido = numeros.pop();
console.log(removido);
console.log(numeros);

numeros.splice(2, 1);
console.log(numeros);

numeros.sort((a, b) => b - a);
console.log(numeros);

// Q6
let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
    endereco: {
      rua: "Rua das Flores",
      cidade: "São Paulo",
      estado: "SP"
    },
    apresentacao: function() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.profissao}.`;
    }
  };
  
  console.log(pessoa.apresentacao());
  
  console.log(pessoa.endereco.cidade);
  
  pessoa.profissao = "Gerente";
  console.log(pessoa);
  
  pessoa.telefone = "1234-5678";
  console.log(pessoa);
  
  // Q7
function soma(a, b) {
    return a + b;
  }
  
  function ehPar(numero) {
    return numero % 2 === 0;
  }
  
  function dobraValores(array) {
    return array.map(valor => valor * 2);
  }
  
  function contaCaracteres(str) {
    return str.length;
  }
  
  function fatorial(n) {
    if (n === 0) return 1;
    return n * fatorial(n - 1);
  }
  

  // Q8
let proximoAniversario = new Date("2024-12-25");

let dataAtual = new Date();

let diferenca = Math.ceil((proximoAniversario - dataAtual) / (1000 * 60 * 60 * 24));
console.log(diferenca);

let ano = dataAtual.getFullYear();
let mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
let dia = String(dataAtual.getDate()).padStart(2, '0');
console.log(`${ano}-${mes}-${dia}`);

let novaData = new Date(dataAtual);
novaData.setDate(dataAtual.getDate() + 30);
console.log(novaData.toISOString().split('T')[0]);

// Q9
function executaOperacao(a, b, operacao) {
    return operacao(a, b);
  }
  
  function soma(a, b) {
    return a + b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  console.log(executaOperacao(5, 3, soma));
  
  console.log(executaOperacao(5, 3, multiplicacao));
  
  function repetirOperacao(num, operacao) {
    for (let i = 0; i < num; i++) {
      console.log(operacao(i));
    }
  }
  
  function exemplo(n) {
    return n * 2;
  }
  
  repetirOperacao(5, exemplo);
  
  function contarOcorrencias(str, char) {
    let contador = 0;
    str.split('').forEach(c => {
      if (c === char) contador++;
    });
    return contador;
  }
  
  console.log(contarOcorrencias("Olá mundo!", 'o'));
  
  