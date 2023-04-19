let numero = [0,1,2,3,4,5,6,7,8,9]

//neste caso aqui o mesmo mostra apenas o numero que esta na 4 posição
console.log(numero.slice(4,5))
//já neste ele mostra do 4 ao 5 pq o paramentro para um índice antes no caso vai mostra [4 ,5]
console.log(numero.slice(4,6))
// ja aqui começa a contar apartir  da segunda vai de 2 á 9
console.log(numero.slice(2))
//para contar ao contrário
console.log(numero.slice(-2))
// imprimindo apartir o número 3 porem sem o dois ultimos números
console.log(numero.slice(3,-2))