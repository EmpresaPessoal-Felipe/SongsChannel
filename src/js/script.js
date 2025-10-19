//ARRAY DE OBJETOS COM AS IMAGENS E INFORMAÇÕES DO BANNER
const bannerItems =[
{
    imagem:"./src/assets/img/poesia17.jpg",
    titulo: "Em Alta: Poesia acústica 17",
    descricao: "Pineapple StormTV"
},
{
    imagem:"./src/assets/img/molho.jpg",
    titulo: "Em Alta: Álbum Molho(Ao Vivo)",
    descricao: "Grupo menos é mais"
},

{
    imagem:"./src/assets/img/barcelona.jpg",
    titulo: "Em Alta: Barcelona",
    descricao: "Pk, L7NNON"
}

];

//DECLARANDO AS VARIAVEIS E ELEMENTOS COM DOM(DOCUMENT OBJECT MODEL)
let i= 0;// inicio da contagem das imagens
const tempo = 3500; // tempo em milissegundos
const elementoBanner = document.querySelector(".banner");
const elementoTitulo = document.querySelector(".banner-titulo");
const elementoDescricao = document.querySelector(".banner-descricao");


// FUNÇÃO PARA O SLIDESHOW

function slideShow(){
    // ALTERA A IMAGEM DE FUNDO DO BANNER
    // ``- template strings ou string literais forma de concatenar
    elementoBanner.style.backgroundImage = `url(${bannerItems[i].imagem})`;
    // ALTERA O TITULO DO BANNER
    elementoTitulo.textContent =bannerItems[i].titulo;
     // ALTERA O DESCRIÇÃO DO BANNER
    elementoDescricao.textContent = bannerItems[i].descricao;

    // INCREMENTA O INDECE (i) e reinicia quando chegar no final do array

    // se o i for maior que a quantidade de imagems volta para o inicio
    i++;
    if( i >= bannerItems.length){
        i =0;
    }
    // chama a função noamente após o tempo definido
    setTimeout(slideShow, tempo);

}
// inicia o slideShow da função
slideShow()