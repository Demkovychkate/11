let btn1= document.querySelector('.btnOne');
let res1 = document.querySelector('.resOne');

let btn2= document.querySelector('.btnTwo');
let res2 = document.querySelector('.resTwo');


//Task1
function FirstTask(){
  let str1 = ' ';
  for (let i = 20; i <= 30; i=i+0.5) {
    str1 += i + ' ';
    res1.innerHTML= str1;
  }
}

btn1.onclick=FirstTask;

//Task2
function SecondTask(){
    let str2 = ' ';
    for (let i = 10; i <= 100; i=i+10) {
      str2 += (i*27) + ' ';
      res2.innerHTML= str2;
    }
  }
  
  btn2.onclick=SecondTask;
  
  