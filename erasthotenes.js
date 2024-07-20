


    const sieveOfEratosthenes = (limit) => {
        if (limit <= 1) {
          return [];
        }
        // Create the output
        const output = new Array(limit + 1).fill(true);
        // Mark 0 and 1 as non-prime
        output[0] = false;
        output[1] = false;
      
        // Iterate from 2 to the limit
        for (let i = 2; i <= limit; i++) {
          if (output[i] === true) {
            // Mark all multiples of i as non-prime
            for (let j = i * 2; j <= limit; j = j + i) {
              output[j] = false;
            }
          }
        }
        // option 1:replace true values with the corresponding number value and filter out non-primes
        return output.reduce((primes, current, index) => {
          if (current) {
            primes.push(index);
          }
          return primes
        }, []);
      }
      
      const test = sieveOfEratosthenes(13);
      // should return [2, 3, 5, 7, 11, 13]
      console.log(test);
      
      // Leave this line for testing:
      module.exports = sieveOfEratosthenes;





      const sieveOfEratosthenes2 = (limit) => {
        // Handle edge cases
        if (limit <= 1) {
          return [];
        }
        // Create the output
        const output = new Array(limit + 1).fill(true);
        // Mark 0 and 1 as non-prime
        output[0] = false;
        output[1] = false;
      
        // Iterate up to the square root of the limit
        for (let i = 2; i < Math.pow(limit, 0.5); i++) {
          if (output[i] === true) {
            // Mark all multiples of i as non-prime
            for (let j = Math.pow(i, 2); j <= limit; j = j + i) {
              output[j] = false;
            }
          }
        }
      
        // Remove non-prime numbers
        return output.reduce((primes, current, index) => {
          if (current) {
            primes.push(index);
          }
          return primes
        }, []);
      }
      


//from chatgpt


const sieveOfEratosthenes3 = (limit) => {
    if (limit <= 1) {
      return [];
    }
  
    // Step 1: Create an array of true values
    const isPrime = new Array(limit + 1).fill(true);
    // Mark 0 and 1 as non-prime
    isPrime[0] = false;
    isPrime[1] = false;
  
    // Step 2: Iterate from 2 to sqrt(limit)
    for (let i = 2; i <= Math.sqrt(limit); i++) {
      if (isPrime[i]) {
        // Step 3: Mark all multiples of i as non-prime
        for (let j = i * i; j <= limit; j += i) {
          isPrime[j] = false;
        }
      }
    }
  
    // Step 4: Collect all prime numbers
    const primes = [];
    for (let i = 2; i <= limit; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }
  
    return primes;
  };
  
  // Example usage
  const primesUpTo13 = sieveOfEratosthenes(13);
  console.log(primesUpTo13); // Output: [2, 3, 5, 7, 11, 13]
  