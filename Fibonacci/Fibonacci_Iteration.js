function fibonacci_iteration(numberInput) {
  let result = [0, 1];
  for (let i = 2; i < numberInput; i++) {
    let f1 = result[i - 1];
    let f2 = result[i - 2];

    sum = f1 + f2;

    //push sum number into array
    result.push(sum);
  }
  return result;
}

let hello = fibonacci_iteration(6);

console.log(hello);
