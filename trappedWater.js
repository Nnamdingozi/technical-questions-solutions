// The Problem
// Imagine a very heavy rainstorm over a highway that has many potholes and cracks. The rainwater will collect in the empty spaces in the road, creating puddles. Each puddle can only be as high as the road around it, as any excess water will just flow away.

// The capturing rainwater problem asks you to calculate how much rainwater would be trapped in the empty spaces in a histogram (a chart which consists of a series of bars). Consider the following histogram:



// solution1

 const trappedWater = (heightArray) => {
    let totalWater = 0;
    // initialze i to 1 and stop at height -1 since water cannot accumulate without leftbound and rightboud
    for(let i = 1; i < heightArray.length - 1; i++) {
        let leftbound = 0;
        let rightbound = 0;
        for (let j = 0; j <= i; j++) {
            leftbound = Math.max(leftbound, heightArray[j]);
        }
        for(let j = i; j < heightArray.length;  j++) {
            rightbound = Math.max(rightbound, heightArray[j]);
        }
        totalWater += Math.min(leftbound, rightbound) - heightArray[i] 
    }
    return totalWater
 }

 let testArray = [4, 2, 1, 3, 0, 1, 2];
 console.log(trappedWater(testArray));


 //method 2 using pointers

 const trappedWater2 = (heightArray) => {
let leftPointingIndex = 0;
let rightPointingIndex = heightArray.length - 1;
let leftMaxValue = 0;
let rightMaxValue = 0
let totalWater = 0;
while (leftPointingIndex < rightPointingIndex) {
    if(heightArray[leftPointingIndex] >= heightArray[rightPointingIndex]) {
        //procees th right since it has lower value
        if(heightArray[rightPointingIndex] >= rightMaxValue) {
            rightMaxValue = heightArray[rightPointingIndex]
        } else {
            totalWater += rightMaxValue - heightArray[rightPointingIndex]
        }
rightPointingIndex--
    } else { 
        //prcess the left since it is less in value than the right
        if(heightArray[leftPointingIndex] >=leftMaxValue) {
            leftMaxValue = heightArray[leftPointingIndex]
        } else {
totalWater += leftMaxValue - heightArray[leftPointingIndex];
        }
        leftPointingIndex++
    }
 
}
return totalWater
}
let testArray1 = [4, 2, 1, 3, 0, 1, 2];
 console.log(trappedWater2(testArray1))
