
function clock(){
    let monthNames = [ "January","February","March","April","May","June"
        ,"July","August","September", "October","November","december"];
    let dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

let today =  new Date();
document.getElementById('date').innerHTML =(dayNames[today.getDay()]+" "+ today.getDate() +' ' + monthNames[today.getMonth()] +' ' + today.getFullYear());

let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
let day =h<11? 'AM':'PM';
 h=h<10?'0'+h:h;
 m=m<10?'0'+m:m;
 s=s<10?'0'+s:s;

 document.getElementById('hours').innerHTML=h;
 document.getElementById('min').innerHTML=m;
 document.getElementById('sec').innerHTML=s;
}
setInterval(clock,1000);
console.log(new Date());