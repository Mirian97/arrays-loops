const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesQueIniciamComA = [];

for (let nome of nomes) {
    if (nome[0] === "A" || nome[0] === "a") {
        nomesQueIniciamComA.push(nome);
    }
}
console.log(nomesQueIniciamComA);
