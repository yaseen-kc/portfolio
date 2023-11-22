const prompt = require("prompt-sync")();

let limit = parseInt(prompt("Enter the array limit : "));
let arr = [];

for (let i = 0; i < limit; i++) {
  arr[i] = parseInt(prompt("Enter the values : "));
}

// sorting
for (let i = 0; i < limit; i++) {
  for (let j = i + 1; j < limit; j++) {
    if (arr[j] > arr[i]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

// array after sorting
let sortedString = "";
for (let i = 0; i < limit; i++) {
  sortedString += arr[i] + " ";
}

console.log("Sorted Array:", sortedString);
