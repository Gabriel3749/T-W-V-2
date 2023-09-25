//declaração de variáveis
//var numero = 1;
//var decimal = 1.5;
//var texto= '';
//var texto = '';
//var texto = 2;


//let nome = '';
//const pi = 3.13456;
//console.log(nome);
//console.log("HOJE NÃO")

//Declarar vari ára representar dos elementos do jogo
let letra = 'X'; // X ou O

function joga(casa) {
    let celulaClicada = document.getElementById(casa).innerHTML;
    
    if(celulaClicada == 'X' || celulaClicada == 'O') {
        alert('esta célula já tem um valor!');
    } else {
        document.getElementById(casa).innerHTML = letra;
        if(letra == 'X') {
            letra = 'O';
        } else{
            letra = 'X';
        }
    }
}