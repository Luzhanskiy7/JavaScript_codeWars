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
