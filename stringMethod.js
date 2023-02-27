//Bài 1:cho string
var greeting = 'Welcome to Nodemy, Nodemy is stand for for Nodejs Academy'
//Đếm xem có bao nhiêu ký tự
console.log(greeting.length);
//find tìm xem nodemy nằm ở vị trí nào
console.log(greeting.indexOf('nodemy'));
//find tìm xem Nodemy nằm ở vị trí nào
console.log(greeting.indexOf('Nodemy'));
//dùng .subsring() đê lấy chữ Academy
console.log(greeting.indexOf('Academy'));
var newStr = greeting.substring(50,greeting.length)
console.log(newStr);
//dùng .split() để tách các từ
var tachgr = greeting.split(' ')
console.log(tachgr);
//dùng .strim() để xó các khoảng trắng 2 rìa
greeting.trim()
console.log(greeting);
//dùng .includes() để tìm xem Nodemy có trong chuỗi đó không
console.log(greeting.includes('Nodemy'))
//dùng .startsWith() kiểm tra xem có bắt đầu với Welcome không
console.log(greeting.startsWith('Welcome'));
//dùng .replace() để thay thế Nodemy thành NODEMY
var newIn = greeting.replace(/Nodemy/g,'NODEMY')
console.log(newIn);
//dùng .toUpercase() để in hoa chuỗi
greeting = greeting.toUpperCase()
console.log(greeting);
//dùng .charAt để lấy 1 ký tự ở vị trí số 4
var lay = greeting.charAt(4)
console.log(lay);