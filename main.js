


let promise= new Promise(function(resolve){
    
}) ;
promise(1000) 
    .then(function(){
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve([1,2,3]);
            },3000);
        })
    })
    .then(function(data){
        console.log(data);
        return 2
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(){

    })
