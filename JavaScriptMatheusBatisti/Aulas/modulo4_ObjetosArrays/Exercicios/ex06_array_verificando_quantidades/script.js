let produtos1 = ['sal', 'açucar', 'goiaba']

let produtos2 = ["arroz", "feijão", "macarrão", "farofa", "linguiça"];

function verificandoQuantitativo(arr) {
    if(arr.length >= 5){
        console.log('A lista e muito grande')
    }else{
        console.log('A lista e muito pequena')
    }
}

verificandoQuantitativo(produtos1);
verificandoQuantitativo(produtos2);