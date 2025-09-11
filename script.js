const avanca = document. queryselectorA11('.btn-proximo');
const reiniciarBtn = document.getE1ementById('.btn-reniciar');

avanca.forEach(button => {
button.addEventListener('click',function(){
    const atual = document.querySelector('.ativo');
    const proximopasso='passo-'+this.getAttribute('data-proximo')
atual.clslist.remove('ativo');
const proximoElemento= document.gtElemenbyId(proximoPasso);



if (proxmoElemento){
    proximoElemento.classList.add('ativo');
} else {
    console.error(`Elemento com ID"${proximoPasso}não encontrado.`)
}





})
} 



)