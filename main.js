const form = document.getElementById('form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const acerto = document.getElementById('numerosenviados'); // foi usado para tirar o alerta da tela no momento de acerto ou erro do preenchimento do formulário
const erro = document.getElementById('erro'); // foi usado para tirar o alerta da tela no momento de acerto ou erro do preenchimento do formulário

function preenchendoNumeros(campoA, campoB){
    return campoB > campoA;
}

form.addEventListener('submit', function(e){
    e.preventDefault(); // impede que o formulário seja carregado antes da hora

    let validarForm = preenchendoNumeros(campoA.valueAsNumber, campoB.valueAsNumber) //o AsNumber faz o site fazer a comparação entre números
    if(validarForm){
        acerto.style.display = 'block';
        campoA.value=''
        campoB.value=''
    } 



})

campoB.addEventListener('keyup', function(e){
    let validarForm = preenchendoNumeros(campoA.valueAsNumber, campoB.valueAsNumber)
    if (!validarForm){ // "!" serve como falso
        erro.style.display= 'block';
        acerto.style.display= 'none';
    } else{
        erro.style.display='none';
    }
})

// 