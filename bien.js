//gán lại biến
var number = 30
number = 'số 30'
console.log(number);
//in ra thông tin tất cả mọi người 
var persons = [
    {
        name:'Nam',
        job:'Dev'
    },
    {
        name:'Dương',
        job:'Tester'
    }
]
for(let i = 0;i<persons.length;i++){
    let item = persons[i]
    console.log(`${item.name} có job là ${item.job}`);
}
// cho 1 object hay dùng for in để in ra tất cả các thuộc tính
var user = {
    name:'Nam',
    job:'Dev',
    phone:088843342,
    company:'Nodemy',
    group:['Nodejs.vn','Nodejs viet nam'],
    website:'http://nodemy.vn'
}
for (const key in user) {
   console.log(user[key]);
}
