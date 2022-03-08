var i=0;
var image=document.getElementById("card1");
// Добавьте свои картинки в массив через запятую
var imgs=new Array('card2.png');
function imgsrc() {
i++;i%=imgs.length;
image.src = imgs[i];