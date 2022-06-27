// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
  if (arr[0] > max) {
  max = arr[0]
  }
  if (arr[0] < min) {
  min = arr[0]
  }
  sum += arr[i];
  }
  avg = Number ((sum / arr.length).toFixed(2));


  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  for ( let i = 0; i < arr.length; i++){
sum += arr[i]}
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[i]);

  for (let i = 0; i < arrOfArr.length; i++){
  let funcResult = func(arrOfArr[i]);
  if (funcResult > max){
  funcResult = max}}

  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, diff;
  min = arr[0];
  max = arr[0];
  diff = Math.abs(max - min);

 for (let i = 0; i < arr.length; i++){
 if (arr[0] > max){
 max = arr[0];}
 if (arr[0] < min){
 min = arr[0];}
 }
 return diff;
}
