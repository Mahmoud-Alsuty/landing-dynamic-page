

const a = document.getElementById('rr').addEventListener('click', function press(){
document.getElementsByClassName('wrapper')[0].classList.toggle('collapse');
 });
const sec1 = document.getElementsByClassName('sec1');
const sec2 = document.getElementsByClassName('sec2');
const sec3 = document.getElementsByClassName('sec3');
const sec4 = document.getElementsByClassName('sec4');
const ch1 = document.getElementsByClassName('home');
const ch2 = document.getElementsByClassName('settings');
const ch3 = document.getElementsByClassName('help');
const ch4 = document.getElementsByClassName('get');
const ch5 = document.getElementsByClassName('sign');

ch1[0].addEventListener('click', function  (){
sec1[0].scrollIntoView({behavior:'smooth'});

  
})
ch2[0].addEventListener('click', function  (){
sec2[0].scrollIntoView({behavior:'smooth'});
  
})
ch3[0].addEventListener('click', function (){
sec3[0].scrollIntoView({behavior:'smooth'});
  
})
ch4[0].addEventListener('click', function  (){
sec4[0].scrollIntoView({behavior:'smooth'});
  
})
    
window.addEventListener('scroll',function(){
  if(sec1[0].getBoundingClientRect().top < window.innerHeight){
    sec1[0].classList.add('active');
    ch1[0].classList.add('active');
  }else{
    sec1[0].classList.remove('active');
    ch1[0].classList.remove('active');
  
  }
})
window.addEventListener('scroll',function(){
  if(sec2[0].getBoundingClientRect().top < window.innerHeight){
    sec2[0].classList.add('active');
    ch2[0].classList.add('active');
    sec1[0].classList.remove('active');
    ch1[0].classList.remove('active');
  }else{
    sec2[0].classList.remove('active');
    ch2[0].classList.remove('active');
  
  }
})
window.addEventListener('scroll',function(){
  if(sec3[0].getBoundingClientRect().top < window.innerHeight){
    sec3[0].classList.add('active');
    ch3[0].classList.add('active');
    sec1[0].classList.remove('active');
    ch1[0].classList.remove('active');
    sec2[0].classList.remove('active');
    ch2[0].classList.remove('active');
  }else{
    sec3[0].classList.remove('active');
    ch3[0].classList.remove('active');
  
  }
})
window.addEventListener('scroll',function(){
  if(sec4[0].getBoundingClientRect().top < window.innerHeight){
    sec4[0].classList.add('active');
    ch4[0].classList.add('active');
    sec1[0].classList.remove('active');
    ch1[0].classList.remove('active');
    sec2[0].classList.remove('active');
    ch2[0].classList.remove('active');
    sec3[0].classList.remove('active');
    ch3[0].classList.remove('active');
  }else{
    sec4[0].classList.remove('active');
    ch4[0].classList.remove('active');
  
  }
})
