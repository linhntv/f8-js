//Chủ đề array method
//Bài 1:cho 1 mảng
var array = [1, 5, 7, 8, 9, 15]
//tìm các số lớn hơn 5 và tăng các giá trị đó lên 1
var newArray = array.map(item => {
    if (item > 5) {
        return item + 1
    } else {
        return item
    }
})
console.log(newArray);
//in ra các số chẵn trong mảng
var sochan = array.filter(function (item) {
    return item % 2 == 0
})
console.log(sochan);
//in các số lẻ
var sole = array.filter(function (item) {
    return item % 2 != 0
})
console.log(sole);
//in ra các số lớn hơn hoặc bằng 5 ttrong mảng
var lơnho5 = array.filter(function (item) {
    if (item > 5) {
        return item
    }
})
console.log(lơnho5);
//in ra các số chia hết cho 5 trong mảng
var chiahet5 = array.filter(item => item % 5 == 0)
console.log(chiahet5);
//dùng hàm slice để copy mảng từ phần thử số 3 đến cuối
var copyArr = array.slice(3, array.length)
console.log(copyArr);
//dùng hàm splice để xoá phần tử số 3 của mảng
array.splice(3, 1)
console.log(array);
//dùng push để thêm 1 phần tử ở cuối mảng
array.push(10)
console.log(array);
//dùng vòng for để tăng giá trị của mỗi phần tử trong mảng lên gấp đôi
var arr2 = []
for (var i = 0; i < array.length; i++) {
    var item = array[i]
    arr2.push(item * 2)
}
console.log(arr2);


//Bài 2:dung sort để sắp xếp mảng tăng dần hoặc giảm dần
var arr1 = [1, 8, 5, 2, 7, 6, 9, 2, 6]
//tăng dần 
var newarr1 = arr1.sort((item1, item2) => {
    if (item1 > item2) {
        return 1
    }
    if (item1 == item2) {
        return 0
    }
    if (item1 < item2) {
        return -1
    }
})
console.log(newarr1);
//giảm dần
var newarr = arr1.sort((item1, item2) => {
    if (item1 > item2) {
        return -1
    }
    if (item1 == item2) {
        return 0
    }
    if (item1 < item2) {
        return 1
    }
})
console.log(newarr);


//Bài 3
var persions = [
    {
        name: 'Trung',
        class: 'Nodemy01',
        dateJoin: '05-02-2020',
        age: 20
    },
    {
        name: 'Phong',
        class: 'Nodemy01',
        dateJoin: '06-01-2020',
        age: 19
    },
    {
        name: 'Nam',
        class: 'Nodemy01',
        dateJoin: '25-01-2020',
        age: 20
    }
]
//dùng sort để sắp xếp mảng theo age từ nhỏ đến lớn
var newPersions = persions.sort((item1, item2) => {
    if (item1.age > item2.age) {
        return 1
    }
    if (item1.age == item2.age) {
        return 0
    }
    if (item1.age < item2.age) {
        return -1
    }
})
console.log(newPersions);
//dùng sort để sắp xếp mảng theo dateJoin từ nhỏ đến lớn
function arrAo(dateAo) {
    var tachArr = dateAo.split('-')
    var noiDateAo = `${tachArr[2]}-${tachArr[1]}-${tachArr[0]}`
    return new Date(noiDateAo)
}
var xeptheongay = persions.sort((item1, item2) => {
    var date1 = arrAo(item1.dateJoin)
    var date2 = arrAo(item2.dateJoin)
    if (date1 > date2) {
        return 1
    }
    if (date1 == date2) {
        return 0
    }
    if (date1 < date2) {
        return -1
    }
})
console.log(xeptheongay);
//Dung filter để tìm 2 học sinh tham gia trước tháng 2
var truoc2 = persions.filter((item) => {
    var date3 = arrAo(item.dateJoin)
    return date3.getMonth() < 1
})
 console.log(truoc2);
//dùng map để tạo mảng mới có các name đều in hoa
var inHoa = persions.map((item)=>{
    item.name = item.name.toUpperCase()
    return item
})
console.log(inHoa);
 

//Bài 4:cho 1 object clone mọi thuộc tính từ object cũ bỏ vào object mới them property= true để phân biệt 
//và không lamf thay đổi mảng cũ
var doan ={
    name:'doan',
    age:22,
    salary:10000
}
var trung = {...doan}
trung.clone = true
trung.name = 'trung'
console.log(trung);