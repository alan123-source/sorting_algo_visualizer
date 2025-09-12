 export const algorithmInfo=[
  { name:"bubble",
    title:"Bubble Sort",
    body:"Bubble Sort compares adjacent elements and swap them if they are in the wrong order.It repeatdely passes through the list until it is sorted ",
    complexity:{
     best :"O(n)",
     average:"O(n²)",
     worst:"O(n²)",
     space:"O(1)",
     stable:"yes"

    },
    code:`def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]`
  },

  {
    name:"merge",
    title:"merge Sort",
    body:"Merge sort divides the array into halves ,sort them recursively,and then merges the sorted halves",
    complexity:{
     best :"O(n log n)",
     average:"O(n log n)",
     worst:"O(n log n)",
     space:"O(n)",
     stable:"yes"

    }
  },
   {
  name: "insertion",
  title: "Insertion Sort",
  body: "Insertion Sort builds the sorted array one element at a time by comparing and inserting it into the correct position.",
  complexity: {
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    stable: "yes"
  },
  code: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key`
}

 ];

 export function updateDescription(algoName){

   const algo=algorithmInfo.find(a=>a.name==algoName);
   if(!algo) return;
   const textDiv=document.querySelector(".text-description");
   textDiv.innerHTML=`
     <h2>${algo.title}</h2>
    <p>${algo.body}</p>
    <ul>
      <li><strong>Best Case:</strong> ${algo.complexity.best}</li>
      <li><strong>Average Case:</strong> ${algo.complexity.average}</li>
      <li><strong>Worst Case:</strong> ${algo.complexity.worst}</li>
      <li><strong>Space:</strong> ${algo.complexity.space}</li>
      <li><strong>Stable:</strong> ${algo.complexity.stable}</li>
    </ul>
      
   `;
  const codeBlock=document.querySelector(".js-algo-code");
  if(codeBlock&&algo.code){
   
    codeBlock.textContent=algo.code;

  }

  

}