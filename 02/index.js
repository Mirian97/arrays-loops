const letras = ["A", "a", "B", "C", "", "e"];

let vogalMaiuscula = 0;
let vogalMinuscula = 0;

for (let letra of letras) {
    if (letra === "E") {
        vogalMaiuscula++;
    }
}

for (let letra of letras) {
    if (letra === "e") {
        vogalMinuscula++;
    }
}
const pluralSingular = vogalMaiuscula === 1 || vogalMinuscula === 1 ? "letra" : "letras";

if (vogalMaiuscula === 0) {
    console.log(`Nenhuma letra "E" foi encontrada.`);
} else {
    console.log(`Foram encontradas ${vogalMaiuscula} ${pluralSingular} "E".`);
}

if (vogalMinuscula === 0) {
    console.log(`Nenhuma letra "e" foi encontrada.`);
} else {
    console.log(`Foram encontradas ${vogalMinuscula} ${pluralSingular} "e".`);
}


