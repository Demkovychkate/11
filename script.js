let btn1= document.querySelector('.btnOne');
let res1 = document.querySelector('.resOne');

//Task1
function FirstTask(){
  let str1 = ' ';
  for (let i = 20; i <= 30; i=i+0.5) {
    str1 += i + ' ';
    res1.innerHTML= str1;
  }
}

btn1.onclick=FirstTask;