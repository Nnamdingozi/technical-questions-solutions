let myArray = [[10, 15, 30], [12, 15, 20], [17, 20, 32]];
let flattenedArray = myArray.flat(Infinity);
console.log(flattenedArray);
flattenedArray.sort((a, b) => a - b);
console.log(flattenedArray)

//use min heap for more efficient time complexity value

// class MinHeap {
//     constructor(){
//         this.heap = [null]
//     }
//     //insert values into the heap array
//     insert (item) {
// this.heap.push(item);
// bubbleUp();
//     }

//     bubbleUp(){
// let 
//     }
// }






function efficientSolution(heights) {
  let totalWater = 0;
  let leftPointer = 0;
  let rightPointer = heights.length - 1;
  let leftBound = 0;
  let rightBound = 0;

  while (leftPointer < rightPointer) {
    if (heights[leftPointer] >= heights[rightPointer]) {
      if (heights[rightPointer] >= rightBound) {
        rightBound = heights[rightPointer];
      } else {
        totalWater += rightBound - heights[rightPointer];
      }
      rightPointer--;
    } else {
      if (heights[leftPointer] >= leftBound) {
        leftBound = heights[leftPointer];
      } else {
        totalWater += leftBound - heights[leftPointer];
      }
      leftPointer++;
    }
  }

  return totalWater;
}

const testArray = [4, 2, 1, 3, 0, 1, 2];
console.log(efficientSolution(testArray)); // Output should be the total amount of water trapped

// Leave this so that we can test your code:
module.exports = efficientSolution;
