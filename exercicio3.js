let frase = "JavaScript é muito difícil";


console.log("Comprimento: ",frase.length);

let fraseMaiuscula = frase.toUpperCase();


console.log("Maiúscula:", fraseMaiuscula);


let palavras = frase.split(" ");

console.log("Separada:");
palavras.forEach(palavra => {
    console.log(palavra);
})