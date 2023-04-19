let funcionario = {
    //propiedades
    nome: 'Sandro',
    sobrenome: 'Matias',
    idade: 28,
    cargo: 'Suporte T.I.',
    //criando metodos
    apresentar: function(){
        console.log('Já Abriu o chamado!')        
    }
}

funcionario.setor = "Clinicas";

console.log(funcionario.setor);

funcionario.salario = 1.688;

delete funcionario.salario;

console.log(funcionario.salario);

console.log(funcionario.nome); // acessando as propiedades dentro do objeto
// Não e necessário colocar dentro de um cosole log pq já tem um console dentro da função.
funcionario.apresentar();

let outroFuncionario = {
   funcao: 'Desenvolvedor', 
}

Object.assign(funcionario, outroFuncionario);

console.log(funcionario, outroFuncionario)