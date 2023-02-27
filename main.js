


// let name = [
//     {ten:'linh',tuoi:27},
//     {ten:'dung',tuoi:26},
//     {ten:'long',tuoi:20},
//     {ten:'lin',tuoi:29},
// ]
// let a = name.sort(function(item1,item2){
//     if(item1.tuoi>item2.tuoi) {
//         return -1
//     }
//     if(item1.tuoi==item2.tuoi) {
//         return 0
//     }
//     if(item1.tuoi<item2.tuoi) {
//         return 1
//     }
// })

// console.log(name)
// console.log(a)

// var number = [1,2,3,4,5]
// var b = number.map((item)=>{
//     return item*5
// })
// console.log(b)
// let c = [3,5,8,9]
// let s = c.find((item)=>{
//     return item > 4
// })
// console.log(s)


// var a = 'nguyen Van linh linh'

// var b = a.trim()
// console.log(b)
// console.log(a.indexOf('Van')) tìm kiếm bắt đầu của chuỗi ký tự
// console.log(a.substring(1,10)) cắt 1 số ký tự ra khỏi chuỗi
// console.log(a.replace(/linh/g,'dung')) thay thế ký tự này thành chuỗi ký tự khác
// console.log(a.split(" ")) tách chuỗi thành một mãng gồm nhiều chuỗi dựa vào điểm chung
// console.log(a.includes('linh')) tìm xem chuỗi đó có ptu đó k trả về true or false
// console.log(a.charAt(5)) lấy 1 ký tự ra khỏi chuỗi dựa vào vị trí của nó trong chuỗi


// let user = {name:'linh',age:26}
// console.log(`tôi tên là ${user.name} tuổi ${user.age}`);

// const cong = (n1,n2)=> {
//     var ketQua = n1 + n2
//     return ketQua
// }
// console.log(cong(1,5));


// const score = 3
// if (score < 4) {
//     console.log('yếu');
// }
// if (score >= 4 && score < 6) {
//     console.log('Trung bình');
// }
// if (score >= 6 && score < 8) {
//     console.log('Khá');
// }
// if (score >= 8 && score < 9) {
//     console.log('Giỏi');
// }
// if (score >= 9) {
//     console.log('Xuất xắc');
// }


// let score = 7
// switch (score) {
//     case 2:
//         console.log('yếu');
//         break;
//         case 7:
//             console.log('Tuyệt vời');

//     default:
//         console.log('Sai lầm');
//         break;
// }
// var arr = ['A', 'b', 'c', 'd']
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// var object = {
//     name:'linh',
//     age:27,
//     male:'nam'
// }
// for(var key in object){
//     console.log(object[key]);
// }

// var arr = ['a','b','c']
// for (var item of arr){
//     console.log(item);
// }

// for (var i = 0; i<10;i++){
//     if(i>6){
//         break;
//     }
//     console.log(i);
// }

// var day = new Date ()
// console.log(day);


// var day = new Date ('2022-5-9')
// var today = new Date(2022,5,7)
//  var tomorow = today.getDate() + 1
//  today.setDate(tomorow)
//  console.log(today);

// var day = Date.now()
// console.log(day);

// var today = new Date (1664021979256)
// console.log(today);

// var birthDay = ["14","2","1996"]
//  var joi = birthDay.join('-')
//  console.log(joi);

// var birthday = '15-2-1996'
// var tach = birthday.split('-')
// var newbir = `${tach[2]}-${tach[1]}-${tach[0]}`
// var newp = new Date(newbir) 
// console.log(newp);


// var number = Math.round(1.5)
// console.log(number);

// var number = Math.pow(3,8)
// console.log(number);

// var number = Math.sqrt(16)
// console.log(number);

// var number = Math.random()*10
// console.log(number);

// var arr = [1,5,7,9,34,3,3]
// var maxNumber = Math.max(...arr)
// var minNumber = Math.min(...arr)
// console.log(maxNumber);
// console.log(minNumber);

//Bài 1
var arr = [1, 5, 7, 8, 9, 15, 8]
//in các số chẵn của mảng
for (var i = 0; i < arr.length; i++) {
    var item = arr[i]
    if (item % 2 == 0) {
        console.log('các số chẵn:', item);
    }
}
//in các số lẽ của mảng
function sole(mang) {
    for (var i = 0; i < mang.length; i++) {
        var item = mang[i]
        if (item % 2 != 0) {
            console.log('các số lẽ', item);
        }
    }
}
sole(arr);
//in các số lớn hơn hoặc bằng 5 của mảng
function lonHon5(mang) {
    for (var i = 0; i < mang.length; i++) {
        var item = mang[i]
        if (item >= 5) {
            console.log('Số lớn hơn hoặc bằng 5:', item);
        }
    }
}
lonHon5(arr);
//cộng tổng các số chia hếtcho 5
var ketqua = 0
function tongChia5(mang) {
    for (var i = 0; i < mang.length; i++) {
        var item = mang[i]
        if (item % 5 == 0) {
            ketqua += item
        }
    }
    return ketqua
}
var chia5 = tongChia5(arr);
console.log('tổng các số chia hết 5:', chia5);
//tìm tích 3 số đầu của arr
var tichdau3 = arr[0] * arr[1] * arr[2]
console.log('tích 3 số đầu:', tichdau3);
//tìm xem trong mảng có phần tử nào là số 5 không
function tim5(mang) {
    for (let index = 0; index < mang.length; index++) {
        const item = mang[index];
        if (item == 5) {
            return true
        }
    }
    return false
}
var tim = tim5(arr);
console.log(tim);

//có bao nhiêu phử tử 8 trong mảng
var sophantu = 0
function demspt(mang) {
    for (let index = 0; index < mang.length; index++) {
        const item = mang[index];
        if (item == 8) {
            sophantu++
        }
    }
   return sophantu;
}
var dem = demspt(arr);
console.log('số phần tư 8 là:',dem);
//Tính tổng 3 phần tử cuối mảng
var tong3ptc = arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3]
console.log('Tổng 3 phần tử cuối mảng là:',tong3ptc);
/////bài tập về object
//Bài 1:in ra
var obj = {
    firtName:'Linh',
    lastName:'Nguyễn'
}
console.log(`Tôi tên là ${obj.firtName} Họ là ${obj.lastName} ???`);

//bài 2:Định một đối tượng là car gồm các thuộc tính hangXe là BMW,giá: 30000 USD,xuatXu ở Đức
let car = {
    hangXe : 'BMW',
    gia: '3000 USD',
    xuatXu: 'Đức'
}
console.log(car);
//Bài 3: Bổ sung thêm các thuộc tính khác
//a. Thêm một thuộc tính màu sắc của xe 'đen'
    car.mauSac = 'Đen'
    console.log(car);   
//b. Thay đổi thuộc tính giá thành 25000 USD
    car.gia = '25000 USD'
console.log(car);
//c. In ra thông số xe như:BMW đen xuất xứ ở Đức có giá thành 25000 USD
console.log(`${car.hangXe} ${car.mauSac} xuất xứ ở ${car.xuatXu} có giá thành ${car.gia}`);

