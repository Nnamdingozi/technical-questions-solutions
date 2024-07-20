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