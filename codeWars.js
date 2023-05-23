//_____________________________________________________________________ TASK2
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){
return string.split(' ');
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  const newSimbol = 'U';
  const oldSimbol = 'T';
  newString = ''
  for (let i = 0; i < dna.length; i++) 
    if (dna[i] === oldSimbol)
      newString += newSimbol
    else
      newString += dna[i]
  return newString;
} 

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn){
  let minElementValue = arr[0]
  let minElementIndex = 0
  for (let i = 0; i < arr.length; i++){
    if (minElementValue >= arr[i]){
      minElementValue = arr[i];
      minElementIndex = i;
       }
    }
  if (toReturn === 'value')
      return minElementValue;
  else if (toReturn === 'index')
      return minElementIndex;
}

// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  queue.reverse()
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === 'wolf') {
      if (i === 0)
        return 'Pls go away and stop eating my sheep'
      else
        return 'Oi! Sheep number ' + i + '! You are about to be eaten by a wolf!'
    }
  }
}

// https://www.codewars.com/kata/beginner-lost-without-a-map
function maps(x){
  const doubles = x.map((x) => x * 2);
  return doubles
}

// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive (arr) {
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    myArr.push(arr[0] + i);
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== myArr[i]) {
        return arr[i];
    }
  }
        return null;  
}
// ______________________________________________________________________________TASK3
// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);  
  }
}

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
    return Number((2 * Math.PI * circle.radius).toFixed(6));
}

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  let array = [];
  for (let key in obj) {
    if (key.length === 5) {
      array.push(key);
    }
    if (typeof obj[key] === 'string' && obj[key].length === 5) {
      array.push(obj[key]);
    }
  }
    return array;
}
