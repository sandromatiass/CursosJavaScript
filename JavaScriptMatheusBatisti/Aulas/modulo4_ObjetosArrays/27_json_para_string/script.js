let pessoa = {
    "nome": "Sandro",
    "idade": 28,
    "profissão": "programador",
    "hobbies": ["filmes", "livros", "basquete"]
}

let jsonParaString = JSON.stringify(pessoa);

console.log(jsonParaString)

let stringParaJson = JSON.parse(jsonParaString);

console.log(stringParaJson)

console.log(stringParaJson.hobbies[0]);