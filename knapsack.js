// The Problem
// The first step to solving this problem is to understand the parameters involved. You will be given:

// the total amount of weight you can carry (weightCap)
// the weights of all of the items in an array (weights)
// the values of all of the items in an array (values)
// Your function should return the maximum value that you will be able to carry.

// An Example
// Let’s say that you have a knapsack that can only carry 5 pounds, and the house you’re robbing has three items that you want to steal:

// A ring that weighs 1 pound with a value of $250
// Earrings that weigh 3 pounds with a value of $300
// A necklace that weighs 5 pounds with a value of $500
// This information can be summarized as follows:

// weightCap = 5 
// weights = [1, 3, 5]
// values = [250, 300, 500]
// You have four possible ways to fill your knapsack:

// Take only the ring, giving you $250
// Take only the earrings, giving you $300
// Take only the necklace, giving you $500
// Take the ring and the earrings, giving you $550
// Since the ring and the earrings have a combined weight of 4 pounds, taking both gives you the maximum value while staying within your weight capacity. Now that you’re familiar with the problem, let’s take a look at two different approaches to solving it!


// solution one, recussion

function recursiveKnapsack (weightcap, weight, value, i) {
    if(weightcap === 0 || i === 0) {
        return 0;
    }
    if(weight[i - 1] > weightcap) {
        return recursiveKnapsack(weightcap, weight, value, i - 1);
    } else {
        const includedItems = value[i - 1] + recursiveKnapsack(weightcap - weight[ i - 1], weight, value, i - 1);
        const excludedItems = recursiveKnapsack(weightcap, weight, value, i - 1);
        return Math.max(includedItems, excludedItems);
    }
    
};

let weightCap = 5 
let weights = [1, 3, 5]
let values = [250, 300, 500]

console.log(recursiveKnapsack(weightCap, weights, values, 3));


// solution two, using dynamic programming

const dynamicKnapsack = function(weightCap, weights, values) {
    const numItem = weights.length;
    const matrix = new Array(numItem);
    
    for (let index = 0; index <= numItem; index++) {
      matrix[index] = new Array(weightCap + 1);
      for (let weight = 0; weight <= weightCap; weight++) {
        // Write your code here:
        if (index === 0 || weight === 0) {
          matrix[index][weight] = 0;
        } else if (weights[index - 1] <= weight) {
          const includeItem = values[index - 1] + matrix[index - 1][weight - weights[index - 1]];
          const excludeItem = matrix[index - 1][weight];
          matrix[index][weight] = Math.max(includeItem, excludeItem);
        } else {
          matrix[index][weight] = matrix[index - 1][weight];
        }
      }
    }
    return matrix[numItem][weightCap]; 
  };
  
  // Use this to test your function:
  const weightCap1 = 50;
  const weights1 = [31, 10, 20, 19, 4, 3, 6];
  const val1 = [70, 20, 39, 37, 7, 5, 10];
  console.log(dynamicKnapsack(weightCap1, weights1, val1));
  
  // Leave this so we can test your code:
  module.exports = dynamicKnapsack;