const multNum = (arr) => {
    const n = arr.length
    let leftProduct = new Array(n).fill(1);
    let rightProduct = new  Array(n).fill(1);
    let finalResult = new Array(n);

    for(let i = 1; i < n; i++) {
        leftProduct[i] = leftProduct[i -1] * arr[i -1];
    
    }
    for(let i = n -2; i >= 0; i--) {
        rightProduct[i] = rightProduct[i + 1] * arr[i + 1];
        
    }
    for(let i = 0; i < n; i++) {
        finalResult[i] =   leftProduct[i] * rightProduct[i] ;
    }

  return finalResult;

}
console.log(multNum([1, 2, 3, 4, 5]));





