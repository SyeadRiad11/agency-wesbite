let hamburger = document.querySelector("#hamburger");

let nav_links = document.querySelector(".nav_links");


hamburger.addEventListener('click' ,function(){
    nav_links.classList.toggle("show");
})


// change theme 

let icon =document.querySelector("#icon");
let path= document.querySelector(".pathFill");

icon.addEventListener("click", function(){
    document.body.classList.toggle("dark_theme");

if(document.body.classList.contains("dark_theme")){
    icon.src="img/sun.png"
}else{
    icon.src="img/moonBG.png"
}

// path hiding 

if(document.body.classList.contains("dark_theme")){
path.style.display="none";
}else{
    path.style.display="block";
}

})


// slider 

var control1 = document.querySelector('#control1');
var control2= document.querySelector('#control2');
var slider= document.querySelector('.slider');
var slider_container= document.querySelector(".slider_container");
// var client_name =document.querySelector(".client_name");

control1.addEventListener('click', function(){
    slider_container.style.transform="translateX(-33.33%)"

    
})
control2.addEventListener('click', function(){
    slider_container.style.transform="translateX(0)"
})



// counter /////////

// first 
var a= 0;
var time= document.querySelector('#time')
setInterval(counter , 1);


function counter(){

    // document.write(a++)
  if(a==346){
      clearInterval(counter());
  }else{
       time.innerHTML= a++ ;
  }
}


// second 

var b=0 ;
var time2 = document.querySelector('#time2');
setInterval((counterTwo) => {
    if(b==533){
        clearInterval(counterTwo())
    }else{
        time2.innerHTML=b++;
    }
}, 1);

// third 

var c=0 ;
var time3 = document.querySelector('#time3');
setInterval((counterThree) => {
    if(c==1533){
        clearInterval(counterThree())
    }else{
        time3.innerHTML=c++;
    }
}, 1);


// forth 

var d=0 ;
var time4 = document.querySelector('#time4');
setInterval((counterFour) => {
    if(d==33){
        clearInterval(counterFour())
    }else{
        time4.innerHTML=d++;
    }
}, 1);


// left right arrow////////////////////
var firstPart = document.querySelector('.mainScroll');
var SecondPart = document.querySelector('.mainScrollTwo');
var leftArrow= document.querySelector('#leftArrow');
var rightArrow= document.querySelector('#rightArrow');
var imageSlide= document.querySelector('.imageSlide');




leftArrow.addEventListener('click', function(){
    firstPart.style.display="none";
    SecondPart.style.display="flex";
SecondPart.style.transition="1s all";
})


rightArrow.addEventListener('click', function(){
    firstPart.style.display="flex";
    SecondPart.style.display="none";
SecondPart.style.transition="1s all";
})









