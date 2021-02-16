
var main = document.querySelector('#main');


for(let colX = 0 ; colX < 4;colX++){
   let colsX = document.createElement('div');
   colsX.classList.add('colunas')
   main.appendChild(colsX);
   for(let colY = 0; colY < 100;colY++){
      let coluna = document.querySelectorAll('.colunas');
      let colsY = document.createElement('img');
      let tam = Math.floor(Math.random() * 3 + 1)
      let pos = Math.random()
      colsY.src = `https://picsum.photos/600/600?random= ${pos}`;
      colsY.classList.add(`coluna--${tam}`)
      coluna[colX].appendChild(colsY);
      
   }
  
}
var posicaoImg;
var imgs = document.querySelectorAll('img')
var modal = document.querySelector("#modal").style;

for(let i=0; i<imgs.length; i++) {
   imgs[i].addEventListener("click", function() {
      posicaoImg = i
      let imgSelect = this.src;   
      modal.display = "block"
      modal.opacity = 1
      let insetImg = document.querySelector('#imgMain');
      let el_img = document.createElement('img');
      el_img.src = imgSelect;
      insetImg.appendChild(el_img);
   });
}

document.querySelector('.fa-close').addEventListener('click', () => modal.display = 'none');
var voltarDescricao = document.querySelector('#voltar');

document.querySelector('.fa-comment-o').addEventListener('click', () => {
   document.querySelector('#MainMsg').style.marginLeft = '-100%'
   voltarDescricao.style.visibility = 'visible'
});

voltarDescricao.addEventListener('click', () =>{
   document.querySelector('#MainMsg').style.marginLeft = '0%';
   voltarDescricao.style.visibility = 'hidden'
})

document.querySelector('#voltarImg').addEventListener('click', ()=>{
   if(posicaoImg == 0 ){
      posicaoImg = 0
   }else{
      posicaoImg --;
   }
   insertImg(posicaoImg)
});
document.querySelector('#proxImg').addEventListener('click', ()=>{
   if(posicaoImg == imgs.length){
      posicaoImg = imgs.length
   }else{
      posicaoImg ++
   }
   insertImg(posicaoImg)
});

function insertImg(posicao){
   let insetImg = document.querySelector('#imgMain');
      let el_img = document.createElement('img');
      el_img.src = imgs[posicao].src;
      insetImg.appendChild(el_img);
}






// 