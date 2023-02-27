//bài 1: cho
var birthday1 = '26-11-1992'
var birthday2 = '27-11-1994'
//đổi định dạng lại thành năm tháng ngày
function đinhang(birt) {
    var newbirt = birt.split('-')
    var noibirt = `${newbirt[2]}-${newbirt[1]}-${newbirt[0]}`
    return new Date(noibirt)
}
// console.log(đinhang(birthday1));
// console.log(đinhang(birthday2));
var birthday1 = đinhang(birthday1)
var birthday2 = đinhang(birthday2)
console.log(birthday1);
console.log(birthday2);
//so sánh ai lớn tuổi hơn
const sosanh = (birthday1, birthday2) => {
    if (birthday1 > birthday2) {
        return '2 lớn tuổi hơn 1'
    } else {
        return '1 lớn tuổi hơn 2'
    }
}
console.log(sosanh());

//Bài 7:
//tạo ra các số random 
//1-10
var a = Math.random() * 10
console.log(a);
//50-100
var b = Math.random() * 50 + 50
console.log(b);
//làm tròn số 5.7667654
var c = Math.round(5.7667654)
console.log(c);
//làm tron trên
var d = Math.ceil(3.456)
console.log(d);
//làm tròn dưới
var e = Math.floor(4.8)
console.log(e);
//lấy bao nhiêu số thập phân
var f = 3.45566
var g = f.toFixed(2)
console.log(g);
//cộng 2 string thành số
var so1 = '8'
var so2 = '5'
var ketqua = parseInt(so1) + parseInt(so2)
console.log(ketqua);
//tinha 2^10
var h = Math.pow(2,10)
console.log(h);