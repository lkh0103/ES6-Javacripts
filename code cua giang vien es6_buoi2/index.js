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
    switch (restParam.length) {
        case 2: {
            console.log(restParam[0] + restParam[1]);
        }; break;
        case 3: {
            console.log(restParam[0] + restParam[1] + restParam[2])
        }; break;
        default: {
            console.log('Tham số không hợp lệ !');
        }
    }
}

//Thay thế overload function trong các ngôn ngữ lập trình khác

tinhTong(1, 2, 3);
tinhTong(1, 2, 3, 4, 3, 4, 5);
tinhTong(10, 20);



/*---- Bài tập 2: tính điểm trung bình ---- */
const tinhDiemTrungBinh = (...restParam) => {
    switch (restParam.length) {
        case 3: {
            let diemTrungBinh = (Number(restParam[0]) + Number(restParam[1]) + Number(restParam[2])) / 3;
            return diemTrungBinh;
        }
        case 4: {
            let diemTrungBinh = (Number(restParam[0]) + Number(restParam[1]) + Number(restParam[2]) + Number(restParam[3])) / 4;
            return diemTrungBinh;
        }
        default: {
            return 'Dữ liệu không hợp lệ !';
        }
    }
}

//Xây dựng sự kiện click cho nút tinh
document.querySelector('#btnTinhKhoi1').onclick = () => {
    //Lấy thông tin từ người dùng nhập vào 
    let diemToan = document.querySelector('#diemToan').value;
    let diemLy = document.querySelector('#diemLy').value;
    let diemHoa = document.querySelector('#diemHoa').value;

    let diemTrungBinhKhoi1 = tinhDiemTrungBinh(diemToan, diemLy, diemHoa);

    //Dom đến thẻ trên giao diện gán dữ liệu kết quả
    document.querySelector('#diemTrungBinhKhoi1').value = diemTrungBinhKhoi1.toFixed(2);
}

document.querySelector('#btnTinhKhoi2').onclick = () => {
    //Lấy thông tin từ người dùng nhập vào 
    let diemVan = document.querySelector('#diemVan').value;
    let diemSu = document.querySelector('#diemSu').value;
    let diemDia = document.querySelector('#diemDia').value;
    let diemAnh = document.querySelector('#tiengAnh').value;

    let diemTrungBinhKhoi2 = tinhDiemTrungBinh(diemVan, diemSu, diemDia, diemAnh);

    //Dom đến thẻ trên giao diện gán dữ liệu kết quả
    document.querySelector('#diemTrungBinhKhoi2').value = diemTrungBinhKhoi2.toFixed(2);
}


/*---- Spread operator ---- */
/*
    + Thường dùng để sao chép giá trị của object hoặc array 
*/
let sinhVien = { maSV: 5, tenSinhVien: 'Sĩ' };

let sinhVien2 = { ...sinhVien, lop: 'BC15', tenSinhVien: 'Khánh' };

sinhVien2.maSV = 10;
// sinhVien2.tenSinhVien = 'Khánh'

console.log('sinhVien', sinhVien);
console.log('sinhVien2', sinhVien2);


let arr1 = [1, 2, 3, 5];
let arr2 = [...arr1, 4];

// arr2.push(4);

console.log('arr1', arr1)
console.log('arr2', arr2)


// ------------------- Destructuring -------------------------- 

let product = {
    id: 1,
    name: 'Phone',
    price: 1000,
    img: 'https://picsum.photos/200/200',
    showInfo: function () {
        console.log('id', id);
        console.log('name', name);
    }
}
//es5
// let id = product.id;
// let name = product.name;
//es6
let { id, name, showInfo, ...rest } = product;
console.log(id, name);
console.log('rest', rest);
showInfo();

//tuple: có thể hiểu 1 object được thể hiện dưới dạng mảng
let product1 = [1, 'phone', 1000, 'https://picsum.photos/200/200', function () {
    console.log('id', id);
    console.log('name', name);
}]

let [idProduct, nameProduct, priceProduct, showInfoProduct] = [1, 'phone', 1000, 'https://picsum.photos/200/200', function () {
    console.log('id', id);
    console.log('name', name);
}]
// let result = [[1,'name1'],[2,'name2']]
// for(let i=0;i<result.length;i++) {
//     let [id,name] = result[i];
//     result[i][0];
//     result[i][1];
// }
console.log('nameProduct', nameProduct);
// console.log('nameProduct',product1[1]) 
// product1[4]();

/* --------------------- object literal --------------------- */
let tenHV = 'Nguyễn Văn Tèo';

let hocVienCyber = {
    tenHV,
    hienThiThongTin() {
        console.log('abc');
    }
}

console.log(hocVienCyber);
hocVienCyber.hienThiThongTin();
/* ----------------------- dynamic key -------------- */

let tenThuocTinh = 'key';

let myObject = {
    [tenThuocTinh]: 'abc'
}



console.log(myObject);

/* ------------------------------ for of, for in ------------------- */
let arrProduct = [
    { id: '1', name: 'Iphone', price: 1000, img: 'https://picsum.photos/id/1/200/200' },
    { id: '2', name: 'Iphone X', price: 2000, img: 'https://picsum.photos/id/2/200/200' },
    { id: '3', name: 'Iphone XS', price: 3000, img: 'https://picsum.photos/id/3/200/200' },
]

//console.log
// for (let i = 0; i < arrProduct.length; i++) {
//     let product = arrProduct[i];
//     console.log(product)
// }

//for of : Dùng để duyệt mảng các object

for(let product of arrProduct) {
    console.log(product)
}

//for in: Dùng để duyệt index các phần tử của mảng, duyệt các key của object
for(let index in arrProduct) {
    console.log('index',index);
    console.log('product',arrProduct[index])
}

let prod =  { id: '1', name: 'Iphone', price: 1000, img: 'https://picsum.photos/id/1/200/200' }

// console.log(prod.id)
// console.log(prod.name);
// console.log(prod.price);

for(let tenThuocTinh in  prod){
    console.log(tenThuocTinh);
    console.log(prod[tenThuocTinh])
}

// let arrObject = {
//     '0sa09sa9d0': { id: '1', name: 'Iphone', price: 1000, img: 'https://picsum.photos/id/1/200/200' },
//     '90321jj123': { id: '2', name: 'Iphone', price: 1000, img: 'https://picsum.photos/id/1/200/200' },
//     'd09sa9dsa9': { id: '3', name: 'Iphone', price: 1000, img: 'https://picsum.photos/id/1/200/200' },
// }

// for(let key in arrObject) {
//     console.log(arrObject[key]);
// }

/* -------------------- Import export ----------- */
import {Product,arr} from './models/Product.js';

//Khi import có thể đổi tên bất kỳ miễn là không có {} .
import ProductDefault from './models/Product.js'

let pro = new Product();

console.log('pro',pro);
console.log('arr',arr);




// ------- Bài tập thông tin nhân viên


//Xây dựng sự kiện nút button#btnInThongTin
document.querySelector('#btnInThongTin').onclick = (event) => {
    //event là tham số có sẵn của các event javascript
    event.preventDefault();//Cản browser submit

    //selector ảnh hưởng đến các thẻ nào thì khi dom => truy xuất được đến các thẻ đó

    let arrInput = document.querySelectorAll('#form-nhan-vien input'); // [domTheMa,domTheTen,domTheLuongCB,domTheSoGioLam]

    // console.log(arrInput);
    let nhanVien = {};
    for(let theInputDuocDom of arrInput) {
        // console.log('theInput',theInputDuocDom);
        //Lấy ra các giá trị thuộc tính sau khi dom
        let {id,value} = theInputDuocDom;

        nhanVien = {...nhanVien,[id]:value }
        
    }

    console.log(nhanVien);
}

// var the = document.querySelector('#maNhanVien');
// maNhanVien = the.clas


// var tagMaNhanVien = document.querySelector('#maNhanVien');
// let {id,value} = tagMaNhanVien;
// let id = tagMaNhanVien.id;
// let value = tagMaNhanVien.value;
// let name ='class';

// let sinhVien = {id:1,name:'Sĩ'};
// let sinhVien2 = {...sinhVien, [name]:'BC15'};

// let name = 'id'

// let myObject = {
//     [name]:'abc'
// }

// myObject.id 
