const original = [1, 4, 12, 21, 53, 88, 112];

const reoriginal = [];

for (numero of original) {
    if (numero % 2 === 0) {
        reoriginal.push(numero);
    }
}
console.log(reoriginal);