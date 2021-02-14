var beffore = document.querySelector(".fa-chevron-left");
beffore.addEventListener('click', befforeF);
var after = document.querySelector(".fa-chevron-right");
after.addEventListener('click', afterF);


var pos = 1;
var slider = document.querySelector('.slider--item')
function befforeF(){
    pos--;
    slider.style.marginLeft = -pos +"00%"
}
function afterF(){
    pos++;
    if(pos == 4){
        pos=0
    }
     slider.style.marginLeft = -pos +"00%"
}

function teste(){
    
    afterF()
}
setInterval(teste, 3000)
