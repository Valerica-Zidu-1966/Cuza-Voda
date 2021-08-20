var date = new Date();
document.getElementById('an').innerHTML = data.getFullYear();

function show() {
    document.getElementById("side-menu").classList.toggle("show");
    
}
function data() {
    var date = new Date();
    var an, luna, zi;
    var text;

    zi = date.getDate();
    luna = date.getMonth() + 1;
    an = date.getFullYear();

    text = zi + "/" + luna + "/" + an;
    
   document.getElementById("text-data").innerHTML=text;
}
function sendEmail() {
    var nume=document.getElementById("nume").value;
    var mesaj=document.getElementById("mesaj").value;
    window.open('mailto:ziduvalerica@gmail.com?subject=' +  nume + '&body=' + mesaj);
  }
