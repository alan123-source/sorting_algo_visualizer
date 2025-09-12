 import {renderbars,generateRandomArray,delay, manualInput, startButtonCreation, activateStartButton} from './app.js';
 import { updateDescription } from './description.js';
import './app.js';
 let currentArray=generateRandomArray();

 async function insertionsort(){
  console.log("insertin selected");
  const bars=document.querySelectorAll(".bar");
  for(let i=1;i<bars.length;i++){
   
    let j=i;
    while(j>0&&parseInt(bars[j-1].style.height)>parseInt(bars[j].style.height)) {
     
       bars[j].style.background='black';
       bars[j-1].style.background='black';
       await delay(2000);

       let tempHeight=bars[j].style.height;
       bars[j].style.height=bars[j-1].style.height;
       bars[j-1].style.height=tempHeight;

       let label1=bars[j].nextElementSibling;
       let label2=bars[j-1].nextElementSibling;
       [label1.innerText,label2.innerText]=[label2.innerText,label1.innerText];

       bars[j].style.background='red';
       bars[j-1].style.background='red';
       await delay(1000);

          bars[j].style.background='#1d4f19ff';
       bars[j-1].style.background='#194f19ff';
       
       j--;
    }

  }

  bars.forEach(bar=>{
    bar.style.background='green';
  });


 }

 const insertionButton=document.querySelector(".insertion_button");
 insertionButton.addEventListener("click",()=>{
   
  updateDescription("insertion");
      renderbars(currentArray);

  document.querySelectorAll("button").forEach(btn=>{
  
    btn.classList.remove("selected");


  });
    insertionButton.classList.add("selected");
  
     //ivde start button add aknm
     manualInput();
     startButtonCreation();
    
    activateStartButton(insertionsort);
 });