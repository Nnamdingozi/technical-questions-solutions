
// Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

// Do this in linear time and in-place.

// For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].








const segregate = (arr) => {
    const order = { 'R': 0, 'G': 1, 'B': 2 };
    arr.sort((a, b) => {
      return order[a] - order[b]
    });
}

const testArr = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];
segregate(testArr)
console.log(testArr);




//using pointers
const strictSwap = (arr) => {
    let start = 0;
    let middle = 0
    let end = arr.length - 1;
    while(middle < end) {
        if(arr[middle] === 'R') {
           [ arr[start], arr[middle]] = [arr[middle], arr[start]]
           start++;
           middle++
        } else if(arr[middle] === 'G') {
            middle++
        }else {
            [arr[middle], arr[end]] = [arr[end], arr[middle]];
            end--
        }

    }
};
strictSwap(testArr);
console.log(testArr);