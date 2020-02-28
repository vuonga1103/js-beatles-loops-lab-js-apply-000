// add solution here
var theBeatlesPlay = (arrayMusician, arrayInstrument) => {
  //returns an array of strings containing what instruments each musician plays
  let newArray = [];
  for (let x = 0; x < arrayMusician.length; x++) {
    let musician = arrayMusician[x];
    let instrument = arrayInstrument[x];
    newArray.push(`${musician} plays ${instrument}`);
  }
  return newArray;
}

var johnLennonFacts = arrayFacts => {
  let x = 0;
  let newArr = [];
  while (x < arrayFacts.length) {
    newArr.push(`${arrayFacts[x]}!!!`);
    x++;
  }
  return newArr;
  //use a while loop to loop over the array and add "!!!" to the end of every fact.
  //return an array of strings with exclamation points
}

var iLoveTheBeatles = num => {
  let arr = [];

  do {
    arr.push('I love the Beatles!');
    num++;
  } 
  while (num < 15);

  return arr;
}

