const numeros = [8, 11, 4, 1];

let maior = 0;
let menor = Infinity;

for (let n of numeros) {
    maior = n > maior ? n : maior;
    menor = n < menor ? n : menor;
}
console.log(maior - menor);