// 8 hàm thường dùng cho array

// Array.push():dùng để thêm 1 phần tử vào cuối mảng
// var arr = [1,2,3,4]
// arr.push(5)
// console.log(arr);

//Array.pop():dùng để loại bỏ phần tử cuối mảng ra khỏi aray
// var arr = [1,2,3,4]
// arr.pop()
// console.log(arr);

//Array.slice(number1,number2):dùng để trích xuất hay nói cách khác là 
//copy 1 đoạn phần tử từ mảng cũ cho trước
// để tạo một mảng mới(ví trí bắt đầu trích xuất và kết thúc trích xuất sẽ bằng với 
//tham số chngs ta truyền vào hàm)
//cú pháp:
// var arr = [1,2,3,4,5,6]
// var newArr = arr.slice(2,5)
// console.log(newArr);

//Array.splice() dùng để thêm/xoá 1 số phần tử ra khỏi mảng tuỳ thuộc vào 3 tham số truyền vào
//cú pháp:arr.splice(vị trí bắt đầu xoá,số phần tử xoá,phần tử muốn thêm trước vị trí bắt đầu)
//xoá:khi chỉ truyền 2 tham số thì 2 tham số chính là vị trí bắt đầu và số phần tử cần xoá
// var arr = [1,2,3,4,5,6,7]
// var newArr = arr.splice(3,1)
// console.log(newArr);
//thay thế hoặc thêm vào trước vị trí bắt đầu
// var arr = [1,2,3,4,5]
// arr.splice(3,0,9)
// console.log(arr);

//Array.sort():dùng để sắp xếp các phần tử theo thứ tự(nếu k truyền gì vào thì nó sẽ sắp xếp từ nhỏ đến lớn
//còn truyền tham số vào thì có 2 dạng từ nhỏ đến lớn hoặc ngược lại)
//cú pháp: 
// arr.sort(function(item1,item2){
//     if(item1>item2){
//         return 1 
//     }
//     if(item1==item2){
//         return 0
//     }
//     if(item1<item2){
//         return -1 
//     }
// })
// var arr = [4,5,7,2,9,1,3]
// arr.sort()
// console.log(arr);
// var arr = [2,8,9,3,4,1,5,6]
// arr.sort((item1,item2)=>{
//     if(item1>item2){
//         return 1
//     }
//     if(item1==item2){
//         return 0
//     }
//     if(item1<item2){
//         return -1
//     }
// })
// console.log(arr);

//Array.join() từ nhiều chuỗi nối thành 1 chuỗi 
//var arr = ['a', 'b', 'c']
/*var n = arr.join(' ')*/
//console.log(n);

//arr.shirt() cắt phần tử đầu
//arr.includes
    // var arr = ['a','b','c']
    // var c = arr.includes('b')
    // console.log(c);


//Array.map():được dùng để lặp từng phần tử con của mảng cũ rồi tạo ra 1 mảng mới tuỳ thuộc vào call back
//ta truyền vào với mục đích gì nó sẽ k làm thay đổi giá trị của mảng cũ
//cú pháp: arr.map(function(item){code})
                    // var arr = [1,2,3,4,5]
                    // var newArr = arr.map(item=> item * 2)
                    // console.log(newArr);

//Array.filter():dùng để lặp vào từng phần tử con của mảng xem thằng nào thoả mảng điều kiện  
//để lấy ra (filter trả ra 1 mảng mới và không làm thay đổi mảng cũ) 
//cú pháp: Array.filter(function(item){code})
                    // var arr = [1, 2, 3, 4, 5, 6]
                    // var newArr = arr.filter(item => item > 2)
                    // console.log(newArr);

//Array.find():dùng để lặp vào từng phần tử của mảng để tìm phần tử đầu tiên nào thoả điều kiện
//và dừng lặp trả ra giá trị đó (find trả ra một object và cũng không làm thay đổi mảng cũ)
//cú pháp:arr.find(function(item){code})
                    // var arr = [1,2,3,4,5,6]
                    // var newArr = arr.find(item=>item>3)
                    // console.log(newArr);



                    //các hàm thường làm việc với string
//String.lenght:dùng để lấy ra độ dài của chuỗi
                // var userName = 'nguyễn văn linh'
                // console.log(userName.length);

//String.strim():dùng để xoá những khoảng trắng ở 2 đầu của chuỗi
                // var str = ' Nguyễn Văn Linh '
                // var newStr = str.trim()
                // console.log(newStr.length);
                // console.log(str.length);

//String.indexOf('ký tự'):dùng để tìm vị trí của 1 phần tử nào đó trong chuỗi
//(tham số truyền vào là 1 chuỗi ký tư)
                // var str = 'Nguyễn Văn Linh'
                // console.log(str.indexOf('Văn'));

//String.subString(vị trí1,vị trí2):dùng để lấy ra một số ký tự của chuỗi
                // var str = 'Nguyễn Văn Linh'
                // var newT = str.substring(3,9)
                // console.log(str.substring(4,9));
                // console.log(newT);

//string.replace('phần tủ cần thay','phần tủ thay thế'):dùng để thay thế 1 số phần tử 
//của chuỗi thành 1 số phần tử khác
                // var str = 'nguyễn văn linh'
                // var newStr = str.replace('linh','dung')
                // console.log(newStr);

//string.toUperCase():chuyển tất cả phần tử của chuỗi thành in hoa,nó không tương tác 
//với chuỗi gốc mà chỉ trả ra 1 chuỗi mới nên cần gán giá trị lại cho nó
                // var str = 'nguyễn văn linh'
                // str = str.toUpperCase()
                // console.log(str);
//string.toLowerCase():chuyển tất cả phần tử của chuỗi thành chữ thường........gán giá trị lại cho nó
                // var str = 'Nguyễn Văn Linh'
                // str = str.toLocaleLowerCase()
                // console.log(str);

//string.charAt(vị trí muốn lấy ra):lấy 1 ký tự ra khỏi chuỗi dựa vào tham số truyền vào
                // var str = 'nguyen van linh'
                // var newStr = str.charAt(5)
                // console.log(newStr);

//string.split('điểm chung'):dùng để tách các phần tử của chuỗi thành một mảng gồm nhiều chuỗi
//dựa vào điểm chung của chúng
                // var str = 'nguyen van linh'
                // var newStr = str.split(' ')
                // console.log(newStr);

//string.inclues('ký tự cần tìm'):dùng để tìm xem ký tự truyền vào có trong chuỗi hay không(true or false)
                // var str = 'nguyen van linh'
                // var newStr = str.includes('van')
                // console.log(newStr);

                //các kiểu dữ liệu trong js thường sử dụng
//string:''
//boolean:true or false
//number: số,NaN
//array:[]
//object:{}


                //các giá trị đăc biệt trả về false khi ép về kiểu boolean
//false
//'':chuỗi rỗng
//0
//NaN:not a number:khi dùng 1 số trừ cho 1 chuỗi thì nó sẽ trả về NaN
//null:(có giá trị)giá trị không có nghĩa hay giá trị rác
//undefind:không có giá trị(khi đặc 1 biến mà không gán giá trị cho nó thì nó sẽ trả ra udf)