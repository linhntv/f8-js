



var promise1= new Promise(function(resolve){
   setTimeout(function(){
    resolve([1]);
   },1000)
})
let promise2= new Promise(function(resolve){
    setTimeout(function(){
        resolve([2,3]);
    },2000)
})
Promise.all([promise1,promise2])
    .then(
        function(result){
           let result1 = result[0]
           let result2 = result[1]
           console.log(result1.concat(result2))
        }
    )