


// const addUpToK = (list, k) => {
//     for (let i = 0; i < list.length; i++) {
//         for (let j = 1; j < list.length; j++) {
//             if (list[i] + list[j] === k) {

//                 return true;
//             }
          
//         }
    
//     }
//     return false;
// }
// const result = addUpToK([10, 15, 3, 15], 17)
// console.log(result);




const twoNum = (list, k) => {
    const seen = new Set();
    for(const num in list) {
        if(seen.has(k - num)) {
            return true;
        }
        seen.add(num)
    }
    return false
}

//Example usage:
   const nums = [10, 15, 3, 7];
  const k = 17;
  console.log(twoSum(nums, k));  
  