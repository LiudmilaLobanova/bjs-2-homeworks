function getArrayParams(...arr) {
  if(arr.length == 0){
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce(function(sum, current){
    return sum + current
  });
  let avg = +(sum / (arr.length)).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if(arr.length == 0){
    return 0;
  }
  let sum = arr.reduce(function(sum, current){
    return sum + current
  });
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length == 0){
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let diff = max - min;
  return diff; 
}

function differenceEvenOddWorker(...arr) {
  if(arr.length == 0){
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement =  sumOddElement + arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length == 0){
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement ++;
    } 
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = arrOfArr[0][0];
  let result;
  for (let i = 0; i < arrOfArr.length; i++){
    result = func(...arrOfArr[i]);
    if(result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}

