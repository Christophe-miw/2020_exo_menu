$ = (n)=>{return document.getElementById(n)};
var x=document.getElementById("menu");
$('burger').onclick=function(){
    x.classList.toggle("off");
}