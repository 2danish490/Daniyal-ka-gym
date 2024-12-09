let menu =document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar')
function show(){
    let nav=document.getElementById('menu');
    nav.setAttribute('class','hide');

    let cros=document.getElementById('cancel');
    cros.setAttribute('class','show');

    let tog=document.getElementById('opt')
    let res= tog.getAttribute('class')
    if(res=='hide'){
        tog.setAttribute('class','show')
    }
   
}

function hide(){
    let cross=document.getElementById('cancel')
    cross.setAttribute('class','hide');

    let nav=document.getElementById('menu');
    nav.setAttribute('class','show');

    let tog=document.getElementById('opt')
    let res= tog.getAttribute('class')
    if(res=='show'){
        tog.setAttribute('class','hide')
    }
    
}


window.onscroll=()=>{
    //when will scrollbar down then navbar will hide
    let tog=document.getElementById('opt')
    tog.setAttribute('class','Hide');
   
   //and then menu-icon will shown in front
    let nav=document.getElementById('menu');
    nav.setAttribute('class','show');

    //and cross icon will hide but menu icon are shown in front
    let cross=document.getElementById('cancel')
    cross.setAttribute('class','hide');
    
}
//typing text code
var typed = new Typed('.multiple-text', {
    strings: ['Body Banao', 'intrest Builder','Weight Gain','Strength Training','Fat Lose','WeightLifting','Running'],
    typeSpeed: 70,
    backSpeed:60,
    loop:"Infinity"
});