import { updateDescription } from "./description.js";
import './animation.js';
import './insertion.js';
import './mergesort.js';
// Create an empty array to store bar values

 
const num_bars = 15;  // Number of bars to generate
const min = 10;       // Minimum height value
const max = 100;      // Maximum height value

// Generate random values for the bars and store in the array
 export function generateRandomArray( num_bars=15,min=10,max=100 ){

 const array=[];
for (let i = 0; i < num_bars; i++) {
  const value = Math.floor(Math.random() * (max - min + 1)) + min;
  array.push(value);
}



console.log(array); 
return array;

}// Log the array for debugging

 export function renderbars(array){
  
   const container = document.querySelector(".bars-container");
  container.innerHTML = '';  // Clear previous bars if any

  // Create and append bars with labels for each value

  array.forEach(value => {
    const barcontainer = document.createElement('div');
    barcontainer.classList.add("bar-container");

    const bar = document.createElement('div');
    bar.classList.add('bar');
    
    bar.style.height = `${value*3}px`;  // Scale height for visual effect
    console.log("hi");

    const label = document.createElement('div');
    label.classList.add('bar-label');
    label.innerText = value;  // Show value below each bar

    barcontainer.appendChild(bar);
    barcontainer.appendChild(label);
    container.appendChild(barcontainer);
  });


}

 export   function manualInput(){
  const inputField=document.querySelector(".manual-input");
  const generateBtn=document.querySelector(".manual-generate-button");
  generateBtn.addEventListener("click",()=>{
     generateBtn.classList.add("active");
     const userInput=inputField.value.trim();
     const parsed=userInput.split(',').map(Number).filter(n=>!isNaN(n));
     if(parsed.length>0){
       currentArray=parsed;
       renderbars(currentArray);

     }else{
      
      alert("please enter a valid comma seperated list of numbers");

     }
  });
    inputField.addEventListener("keydown",(event)=>{
   
      if(event.key==='Enter'){
        generateBtn.click();
      }

    });
}

 export function startButtonCreation(){
  // Prepare the control section for start button
  const control = document.querySelector('.controls');
  control.innerHTML = '';  // Clear previous controls if any

  let startbutton = document.createElement('button');
  startbutton.classList.add('start-button');
  startbutton.innerText = 'start';
  control.appendChild(startbutton);
  }
  export   function activateStartButton(algorithmName){
     const startbutton=document.querySelector(".start-button");
     const generateBtn=document.querySelector(".manual-generate-button")
    startbutton.addEventListener("click",()=>{
       document.querySelectorAll(".algorithm_buttons button").forEach(btn=>btn.disabled=true);
       startbutton.disabled=true;

       startbutton.classList.add('active');
       algorithmName().then(()=>{
        document.querySelectorAll(".algorithm_buttons button").forEach(btn=>btn.disabled=false);
        startbutton.disabled=false;
        startbutton.classList.remove("selected");
        generateBtn.classList.remove("active");
       })

    });
  }
   
  let currentArray=generateRandomArray();
// Select the bubble sort button
const bubble_button = document.querySelector(".bubble_button");

// Handle click event for Bubble Sort button
bubble_button.addEventListener("click", () => {

  updateDescription("bubble");
  renderbars(currentArray);


  // Remove 'selected' class from all algorithm buttons
  document.querySelectorAll(".algorithm_buttons button").forEach(btn => {
    btn.classList.remove("selected");
  });

  console.log("bubble sort selected");

  // Add 'selected' class to highlight the clicked button
  bubble_button.classList.add('selected');

  
  

  // Get the container to display bars
//ivde manual input koduknm

  manualInput();
//ivde startbutton function

   startButtonCreation();
  // Start button click triggers bubble sort
  activateStartButton(bubbleSort);
  
});

// Delay function using Promise for animation timing
 export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Bubble Sort algorithm with visual animation
async function bubbleSort() {
  const bars = document.querySelectorAll('.bar');

  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      // Highlight bars being compared
      bars[j].style.background = 'black';
      bars[j + 1].style.background = 'black';

      // Parse heights for comparison
      const val1 = parseInt(bars[j].style.height);
      const val2 = parseInt(bars[j + 1].style.height);

      if (val1 > val2) {
        await delay(400);  // Wait before swapping

        // Swap bar heights
        bars[j].style.height = `${val2}px`;
        bars[j + 1].style.height = `${val1}px`;

        // Swap label text (values below bars)
        const label1 = bars[j].nextElementSibling;
        const label2 = bars[j + 1].nextElementSibling;
        const tempText = label1.innerText;
        label1.innerText = label2.innerText;
        label2.innerText = tempText;

        // Color bars red after swap
        bars[j].style.background = 'red';
        bars[j + 1].style.background = 'red';
      }

      await delay(500);  // Wait after each step
      // Reset bar color
      bars[j].style.background = '#194b4f';
      bars[j + 1].style.background = '#194b4f';
    }

    // Mark the last sorted bar green
    bars[bars.length - 1 - i].style.background = 'green';
  }

  // Mark the first bar as sorted too
  bars[0].style.background = 'green';
}

const toggleBtn = document.querySelector('.toggle-code-btn');
const codeContainer = document.querySelector('.code-container');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.add("selected");
  if (codeContainer.style.display === 'none') {
    codeContainer.style.display = 'block';
    toggleBtn.textContent = 'Hide Code';
    
  } else {
      toggleBtn.classList.remove("selected");
    codeContainer.style.display = 'none';
    toggleBtn.textContent = 'Show Code';
  }
});

 window.addEventListener("DOMContentLoaded",()=>{
    bubble_button.click();
 });
