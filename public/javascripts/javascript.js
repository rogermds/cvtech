//variaveis globais recebendo a div de botões e div respectivamente
const controlls = document.querySelector(".controlls");


window.addEventListener("load", ()=>{
    //recebendo referenrecia das imagens do DOM para criar evento de click
    let btnPrt = document.getElementById("btPrt");
    let btnBck = document.getElementById("btBck");
    
    //Atribuindo Event Listener às imagens
    btnPrt.addEventListener("click", printView);
    btnBck.addEventListener("click", backPage);
    //-------------------------------------------
    const content = document.querySelector("body");
    //Event Listener para click no body 
    //(após impressão, cancelar impressão, ou click fora do modal de impressão)
    content.addEventListener("mouseover", switchControll);
    //-------------------------------------------
});
//função para ocultar div de controlls e abrir painel de impressão
function printView(){
    controlls.style.display = 'none';
    window.print();
}

//Função para retornar exibição div controlls após painel impressão
function switchControll(){
    controlls.style.display = 'block';
}

//Função para retornar 1 nivel no historico do navegador
function backPage(){
    window.history.back();
}
