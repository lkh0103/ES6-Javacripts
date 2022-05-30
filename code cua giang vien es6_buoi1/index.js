/* ---------------- Từ khoá khai báo biến ------------------- */
/*  
    Sự khác biệt giữa khai báo var, let và const:
    var: Phạm vi hoạt động trên toàn bộ các scope (Nếu khai báo trùng tên biến thì var cho phép ghi đè giá trị biến trước đó)

    let: Phạm vi hoạt động trên từng scope (Trong cùng 1 scope nếu khai báo biến giống tên nhau sẽ báo lỗi, Nếu khác scope thì sẽ tự hiểu 2 biến khác nhau)

    const: Giống như let nhưng không thể gán lại giá trị mới được. Đối với giá trị lưu trữ là object(hoặc array) thì không thể gán lại = object (hoặc array) khác mà chỉ có thể thay đổi được thuộc tính (hoặc phần tử bên trong);

    //Dùng let thay var khi khai báo biến trong ES6
    Cơ chế hoisting: chỉ hổ trợ var, không hổ trợ let và const
*/

let title = 'cybersoft';
// let title = 'xxx';
{
    let title = 'abc';

    console.log('title1', title);
} //scope

const DOMAIN = 'http:svcy.myclass.vn/api/....'
console.log('title2', title);
const pi = 3.141592654;
// pi = 321312;
const hocVien = {
    maHocVien: 1,
    tenHocVien: 'Khánh'
} // 0xx476

hocVien.maHocVien = 1;
hocVien.tenHocVien = 'abc';


// var hoTen;


// hoTen = 'Sĩ đẹp trai';

// console.log('hoTen',hoTen);

// let hoTen = 'abc';


/* ----------------------------- ArrowFunction ------------------ */
/*
    Khái niệm về arrow function 
    + Cú pháp của arrow function được rút gọn so với function (Nếu hàm chỉ có 1 tham số thì có thể loại bỏ dấu ngoặc của tham số, nếu hàm có 1 lệnh return thì có thể loại bỏ scope và chữ return )
    + arrowfunction không hổ trợ cơ chế hoisting
*/


//es5
function hello(name) {
    return 'hello ' + name;
}

// var hello = function (name) {
//     return 'hello ' + name;
// }

// document.querySelector('body').innerHTML = hello('Sĩ');

//es6 (Viết ngắn gọn)
const hello_es6 = name => 'hello ' + name;

//es6 (Viết đầy đủ)
const hello_es6_full = (name) => { return 'hello ' + name }


// document.querySelector('body').innerHTML = hello_es6('Sĩ');

/* ------------- Ngữ cảnh con trỏ this ------------------ */
/*
    this: 
     + Ngữ cảnh mặc định sẽ trỏ về window
     + Khi sử dụng this trong object thì this sẽ là object đó
     + Khi sử dụng this trong function hoặc prototype thì this sẽ là function hoặc prototype đó
*/
//Ngữ cảnh mặc định của con trỏ this là window
// var tenHocVien = 'abc';
// tenHocVien = 'abc';
window.tenHocVien = 'abc';
console.log(tenHocVien);
//Nếu sử dụng this trong object thì ngữ cảnh mặc định của this là object
let lopHoc = {
    maLop: 'BC15',
    tenLop: 'BootCamp 15',
    hienThiThongTin: function () {
        console.log('Mã lớp: ', this.maLop);
        console.log('Tên lớp: ', this.tenLop);

        console.log('this', this)
    }
}
lopHoc.hienThiThongTin();
//Nếu sử dụng this trong function (hoặc prototype) thì this sẽ là function (hoặc prototype) đó
function SinhVien() {
    this.maSinhVien = '001';
    this.hoTen = 'Nguyễn Văn A'
    this.hienThiThongTin = function () {
        console.log(this.maSinhVien);
        console.log(this.hoTen);
    }
}

let sv = new SinhVien();
sv.hienThiThongTin();



let lopHocObject = {
    maLop: 'BC15',
    tenLop: 'BootCamp 15',
    hienThiThongTin: function () {
        let showInfo = () => {
            console.log('Mã lớp: ', this.maLop);
            console.log('Tên lớp: ', this.tenLop);
        }
        showInfo();
    }
}

lopHocObject.hienThiThongTin();


function main() {

    return function () {
        console.log('abc')
    }
}


main()();

// let result = main();
// result();
//---------------------- Bài tập 1 -----------------
/*
    Cho mảng các màu sau : ['red','green',....]
    + Yêu cầu 1: Từ mảng màu dùng javascript render ra các nút button tương ứng 

    + Yêu cầu 2: Xây dựng xử lý cho các nút button khi nhấn vào button nào thì màu sắc của div#home đổi thành màu sắc đó
 */

let arrColor = ['red', 'green', 'blue', 'pink', 'yellow', 'orange']

// //Tạo ra 1 button
// var button = document.createElement('button');
// button.innerHTML = 'red';
// button.style.backgroundColor = 'red';
// button.onclick = function () {
//     document.querySelector('#home').style.color='red';
// }

// document.querySelector('#colors').append(button);

function renderButton() {
    for (let i = 0; i < arrColor.length; i++) {
        //Mỗi lần duyệt lấy ra 1 màu 
        let color = arrColor[i];
        //Tạo ra 1 nút button
        let button = document.createElement('button');
        button.innerHTML = color;
        button.style.backgroundColor = color;
        //Định nghĩa sự kiện click cho button
        button.onclick = function () {
            document.querySelector('#home').style.color = color;
        }
        document.querySelector('#colors').appendChild(button);
    }
}

renderButton();

/* ------------------- Default params ---------------------- */
// Default param là cách set giá trị mặc định cho tham số của hàm khi ta không truyền giá trị cho nó, hàm sẽ tự lấy giá trị mặc định.

let getUserInfo = (name = 'Mị', age = 18) => {
    if (age > 0 && age < 30) {
        console.log(name + ' đang còn trẻ ' + name + ' muốn đi chơi!');
    }
}

getUserInfo('Sĩ', 15);

/* ------------------------ Rest Parameter ------------------*/


function tinhTong(...restParam) {
    switch(restParam.length){
        case 2 : {
            console.log(restParam[0] + restParam[1]);
        };break;
        case 3: {
            console.log(restParam[0] + restParam[1] + restParam[2])
        };break;
        default: {
            console.log('Tham số không hợp lệ !');
        }
    }
}

//Thay thế overload function trong các ngôn ngữ lập trình khác

tinhTong(1,2,3);
tinhTong(1,2,3,4,3,4,5); 
tinhTong(10,20);