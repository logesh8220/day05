
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
median = [1,2,4,4,4,6,7]
let result = median.filter(function(a,b){

    return b==median.indexOf(a)
    
})
console.log(result)

