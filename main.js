



var promise = Promise.resolve([1,2,3]);
promise
    .then(function(result){
        console.log(result)
    })
    .catch()