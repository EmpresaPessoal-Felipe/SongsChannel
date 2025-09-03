// declarando as variaveis com DOM(Document model object)
const carrosselLista = document.querySelector(".carrossel-lista")
const carrosselItem = document.querySelectorAll(".carrossel-item")
const botaoAnterior = document.getElementsByClassName("btn-anterior")
const botaoProximo = document.getElementsByClassName("btn-proximo")

let contator=0;
const larguraItem= carrosselItem[0].offsetWidth +10;

botaoProximo.addEventListener("click"),()=>{
    if(contador <carrosselItem.length -1){
        contador++;
        carrosselLista.style.transform =`translateX(-${contador * larguraItem}px)`;

    }
}

botaoProximo.addEventListener("click",()=>{
    if(contador <carrosselItem.length -1){
        contador++;
        carrosselLista.style.transform =`translateX(-${contador * larguraItem}px)`;
    }
})