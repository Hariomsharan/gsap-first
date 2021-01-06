var fsnav = document.querySelector('#fsnav');
var nvbtn = document.querySelector('#nvbtn');
var close = document.querySelector('#close');

nvbtn.addEventListener('click', function(){
    fsnav.style.top = '0%';
})

close.addEventListener('click', function(){
    fsnav.style.top = '-100%';
})