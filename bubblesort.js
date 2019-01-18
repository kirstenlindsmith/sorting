function swap(array, index){
   let swapNumber = array.splice(index, 1)
   array.splice(index + 1, 0, swapNumber) 
}

function compare(left, right){
  if (left < right) return true
  return false
}

function bubbleSort(array) {
    let swapCounter = 0;

    for (let i = 0; i < array.length; i++) {
        const currElement = array[i]
        const nextElement = array[i + 1]
        if (!compare(currElement, nextElement)) {
            swap(array, i, array[i])
            swapCounter++
        }
    }

    return array
}
