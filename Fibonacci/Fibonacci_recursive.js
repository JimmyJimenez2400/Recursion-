function fibonacci_recursive(numberInput, cage = [0, 1]) {
  if (numberInput <= 2) {
    return cage;
  }

  let previousFirst = cage[cage.length - 1];
  let previousSecond = cage[cage.length - 2];

  let sum = previousFirst + previousSecond;


  cage.push(sum);

  return fibonacci_recursive(numberInput - 1, cage);


}


let e = fibonacci_recursive(6);

console.log(e)


