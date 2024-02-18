function merge_sort(array){
  if(array.length === 1){
    return array;
  }else{
    let result = [];
    let cutArrayInHalf = Math.floor(array.length/2);
    let leftHalf = merge_sort(array.slice(0, cutArrayInHalf));
    let rightHalf = merge_sort(array.slice(cutArrayInHalf));
    
    let i = 0;
    let j = 0;
    let k = 0;

    while( i < leftHalf.length && j < rightHalf.length){
      if(leftHalf[i] < rightHalf[j]){
        result[k++] = leftHalf[0];
        i++;
      }else{
        result[k++] = rightHalf[j];
        j++;
      }
    }

    for(; i < leftHalf.length; i++){
      result[k++] = leftHalf[i];
    }

    for(; j < rightHalf.length; j++){
      result[k++] = rightHalf[j];
    }

    return result;
  }
}

let not_sorted = [4, 3,2,1];

let sorted = merge_sort(not_sorted);

console.log(sorted);
