

//Task Anonymous

 let oddNo = (function(a){
      let oddArray =[];
    for(let key of a){
         if(key%2!==0){
            oddArray.push(key)
      }
     }
      return oddArray;
 })
 console.log(oddNo([1,2,3,4,5,6,7,8,9]))

 //Convert string to caps Array
 let caps = (function(a){
     let upperAray=[]
     let upper = a.toUpperCase(a)
     upperAray.push=upper
     return upperAray
 })
 console.log(caps("guvigeek"))

 //Sum Of all numers
 let sum =(function(arry){
  let sumArray =0
  for(let key in arry){
     sumArray+=arry[key]
  }
  return sumArray
 })
 console.log(sum([1,2,3,4,5,6,7]))

// is Prime

let isPrime = function(a){
    for(var i = 2 ; i*i < a; i++)
        if(a%i==0)
        return false;
    return a > 1
    }

console.log(isPrime([12,2,3]))



//palindromes Numbers

let palindromes = (function(a){
    let paliArray =[];
    for(let key of a){
       if(key%11===0){
           paliArray.push(key)
    }
   }
    return paliArray;
})
console.log(palindromes([1, 2, 3 , 4, 11, 22, 33, 99, 121]))

// return duplicates
duplicates = [1,2,4,4,4,6,7]
let result = duplicates.filter(function(a,b){

    return b==duplicates.indexOf(a)
    
})
console.log(result)

// median of two sorted arrays
let arr1 = [12,13,14,15,16,17]
let arr2 = [9,8,7,6,5,4,3,2,1]
let concatArr = arr1.concat(arr2)
let Arr = (function(A){
    for (var i = 1; i < A.length; i++)
        for (var j = 0; j < i; j++)
            if (A[i] < A[j]) {
              var x = A[i];
              A[i] = A[j];
              A[j] = x;
            }
        return A
    })
    let resultsort = Arr(concatArr)
    console.log(resultsort)
    let sortarr = resultsort
    let median = Math.floor(sortarr.length / 2)
    console.log(median)

