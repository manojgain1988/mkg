//navemenu part start



// digital Clock.

function time(){

    var date = new Date();

    var hours=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();

    if(hours=="12"){
         var hr=12;
    }
    else if(hours=="24"){
        var hr=0;
    }
    else {
        var hr=hours%12;
    }

    if(hr<10){
         hr="0"+hr;
    }
    if(min<10){
         min="0"+min;
    }
    if(sec<10){
         sec="0"+sec;
    }

    var ampm=hours<12 ? "AM" :"PM";
    var timed = hr+":"+min+":"+sec+" ,"+ampm;

    document.getElementById('clock').innerText=timed;
}
setInterval(time, 1000);



// Countdown part

function timeCounter(){
     var now = new Date().getTime();
var deadLine = new Date("December 13, 2023 11:59:00").getTime();

var total = deadLine - now;

var s = Math.floor(total / 1000);
var m = Math.floor(s / 60);
var h = Math.floor(m / 60);
var d = Math.floor(h / 24);

s %= 60;
m %= 60;
h %= 24; 


s =( s < 10) ? "0" + s : s;
m =( m < 10) ? "0" + m : m;
h =( h < 10) ? "0" + h : h;
d =( d < 10) ? "0" + d : d;


document.getElementById('days').innerText = d;
document.getElementById('hours').innerText = h;
document.getElementById('minutes').innerText = m;
document.getElementById('seconds').innerText = s;
}

setInterval(timeCounter ,1000);


// calculator part start


var display = document.getElementById('display');

var btns = document.querySelectorAll(".btns button");

for( var i=0; i < btns.length; i++){
    var btn = btns[i];

    btn.addEventListener('click',function(e){
        var text=e.target.innerText;
       
        if(text === '='){
            var result =eval(display.value);
            display.value = result;
        }
        else if(text === 'AC'){
            display.value =" ";
        }

        else{
            display.value =display.value+ text;
        }

    });
      
}


// To_Top Part Start.

const toTop = document.querySelector('.to_top');

    window.addEventListener('scroll',() => {

    if(window.pageYOffset > 100){ 
        
        toTop.classList.add ('active');
    }
    else{
        toTop.classList.remove('active');
       }
})


// Read More Read Less part start

const text = document.querySelector('.text');
const readMore = document.querySelector('.read_more-btn');

    readMore.addEventListener('click',(e)=>{
    text.classList.toggle('show_more');

        if(readMore.innerHTML === "Read More"){
            readMore.innerHTML = "Read Less";
        }
        else{
            readMore.innerHTML="Read More";
        }
})

// Navigation Scroll On
const header = document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky',window.scrollY > 0)

    
})


// Age calculator

let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0];
let result = document.getElementById('result');



function calculateAge(){
let birthDate = new Date(userInput.value);

let d1 = birthDate.getDate();
let m1 = birthDate.getMonth() + 1;
let y1 = birthDate.getFullYear();

let today = new Date();

let d2 = today.getDate();
let m2 = today.getMonth() + 1;
let y2 = today.getFullYear();

let d3, m3, y3;

y3 = y2 - y1;

if(m2 >= m1){
   m3 = m2 - m1;
}
else{
    y3--;
    m3 = 12 + m2 - m1;
}

if(d2 >= d1){
    d3 = d2 - d1;
}
else{
   m3--;
   d3 = getDaysInMonth(y1, m1) + d2 - d1;   
}
if(m3 < 0){
    m3 = 11;
    y3--;
}
result.innerHTML = `You are ${y3} Yours, ${m3} Months  and ${d3} Days Olds.`;
}
function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}