  import {renderbars,generateRandomArray,delay, manualInput, startButtonCreation, activateStartButton} from './app.js';
  import { updateDescription } from './description.js';
 import './app.js';
  let currentArray=generateRandomArray();
 
  async function mergeSort(arr, left, right) {
    if (left >= right) return;
    const bars=document.querySelectorAll(".bar");

  const mid = Math.floor((left + right) / 2);
   for (let i = left; i <= mid; i++) {
  bars[i].style.backgroundColor = 'lightcoral'; // left side
}
for (let i = mid + 1; i <= right; i++) {
  bars[i].style.backgroundColor = 'lightblue'; // right side
}

  await mergeSort(arr, left, mid);
  await mergeSort(arr, mid + 1, right);
  await merge(arr, left, mid, right);
}

async function merge(arr, left, mid, right) {
  const bars = document.querySelectorAll(".bar");
  const leftArray = arr.slice(left, mid + 1);
  const rightArray = arr.slice(mid + 1, right + 1);

 

  let i = 0, j = 0, k = left;

  while (i < leftArray.length && j < rightArray.length) {
    bars[k].style.background = 'black';
    await delay(1000);

    if (leftArray[i] <= rightArray[j]) {
      arr[k] = leftArray[i];
      bars[k].style.height = `${leftArray[i] * 3}px`;
      bars[k].nextElementSibling.innerText = leftArray[i];
      i++;
    } else {
      arr[k] = rightArray[j];
      bars[k].style.height = `${rightArray[j] * 3}px`;
      bars[k].nextElementSibling.innerText = rightArray[j];
      j++;
    }
    bars[k].style.background = 'green';
    k++;
  }

  while (i < leftArray.length) {
    bars[k].style.background = 'black';
    await delay(1000);

    arr[k] = leftArray[i];
    bars[k].style.height = `${leftArray[i] * 3}px`;
    bars[k].nextElementSibling.innerText = leftArray[i];
    bars[k].style.background = 'green';
    i++;
    k++;
  }

  while (j < rightArray.length) {
    bars[k].style.background = 'black';
    await delay(1000);

    arr[k] = rightArray[j];
    bars[k].style.height = `${rightArray[j] * 3}px`;
    bars[k].nextElementSibling.innerText = rightArray[j];
    bars[k].style.background = 'green';
    j++;
    k++;
  }
}

 
  const mergeButton=document.querySelector(".merge_button");
  mergeButton.addEventListener("click",()=>{
    
   updateDescription("merge");
       renderbars(currentArray);
 
   document.querySelectorAll("button").forEach(btn=>{
   
     btn.classList.remove("selected");
 
 
   });
     mergeButton.classList.add("selected");
   
      //ivde start button add aknm
      manualInput();
      startButtonCreation();
      const startButton=document.querySelector(".start-button");
      startButton.addEventListener("click",async()=>{
        await mergeSort(currentArray,0,currentArray.length-1);
      })
});