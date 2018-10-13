const reverseNumbers = function(numbers) {
  let index = numbers.length -1;
  let reversedNumbers = [];
  for(number of numbers) {
    reversedNumbers[index] = number;
    index--;
  }
    
  return reversedNumbers;
}
exports.reverseNumbers = reverseNumbers;

const selectEverySecondNum = function(numbers) {
  let index = 0;
  let selectedNumbers = [];

  for(let position = 0; position < numbers.length; position += 2){
    selectedNumbers[index] = numbers[position];
    index++;
  }

  return selectedNumbers;
}

exports.selectEverySecondNum = selectEverySecondNum;

const filterNumbers = function(numbers){

  let filteredNumbers = [[],[]];
  for(number of numbers){
    let index = number % 2;
    filteredNumbers[index].push(number);
    }

  return filteredNumbers[1];
}

exports.selectOddNumbers = filterNumbers;

const addNumbers = function(numbers) {
  let sum = 0;
  for(number of numbers) {
    sum = sum + +number;
  }

  return sum;
}

exports.addNumbers = addNumbers;

const generateFibonacci = function(totalNumOfTerms) {
  let series = [];
  series[0]=0;


  series[1]=1;

  for (let termNumber = 2; termNumber < totalNumOfTerms; termNumber ++){
    series[termNumber] = series[termNumber -1] + series[termNumber -2];
  }

  return series;
}

exports.generateFibonacci = generateFibonacci;

