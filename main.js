



var promise = Promise.reject('có lỗi');
promise
    .then(function(result){
        console.log(result)
    })
    .catch(function(err){
        console.log('err:',err)
    })