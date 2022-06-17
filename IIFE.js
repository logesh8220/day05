//IIFE(Immediately Invoked Function Expression)

(()=>{
    let oddNo = (function(a){
        let oddArray =[];
      for(let key of a){
           if(key%2!==0){
              oddArray.push(key)
        }
       }
        return oddArray;
   })
   console.log(oddNo([343,464,56,35,345]))
})();



(()=>{
    let caps = (function(a){
        let upperAray=[]
        let upper = a.toUpperCase(a)
        upperAray.push=upper
        return upperAray
    })
    console.log(caps("logeshthirumurugan"))
})();



(()=>{
    let sum =(function(arry){
        let sumArray =0
        for(let key in arry){
           sumArray+=arry[key]
        }
        return sumArray
       })
       console.log(sum([34,4564,5,45,4,54,54,5,45,5]))
})();




(()=>{
    let palindromes = (function(a){
        let paliArray =[];
        for(let key of a){
           if(key%11===0){
               paliArray.push(key)
        }
       }
        return paliArray;
    })
    console.log(palindromes([333,53,3443,3223, 11, 22, 33, 99, 121]))
})();





(()=>{
    median = [1343,534,3333,3333,3333,35353,556]
    let result = median.filter(function(a,b){
    
        return b==median.indexOf(a)
        
    })
    console.log(result)
    
})()