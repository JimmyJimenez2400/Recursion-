function fibonacci_recursive(numberInput, cage = [0, 1]) {
  if (numberInput <= 2) {
    return cage;
  }

  let previousFirst = cage[cage.length - 1]; // 1
  let previousSecond = cage[cage.length - 2]; // 0

  let sum = previousFirst + previousSecond; // 1


  cage.push(sum); //cage -> [0,1,1]

  return fibonacci_recursive(numberInput - 1, cage);


}


let e = fibonacci_recursive(3);

console.log(e)


