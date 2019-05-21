function afunc(myArray, newValue) {
  for ( let i of myArray ) {
    if (myArray[i] === newValue) {
      result=myArray
      break
    } else {
    if (i=(myArray.length-1)) {
      result = myArray.concat(newValue)
    } else {
      continue
    }
    }
  } return result
}

console.log(afunc([1,2,3,4,5],10))
