//Xử lý chức năng thêm món ăn

import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js";
//Đối tượng quản lý dữ liệu món ăn trên <table></table>
let menu = new Menu();
document.querySelector('#btnThemMon').onclick = (event) => {
    event.preventDefault();//Hàm cản sự kiện reload browser
    //Lấy thông tin người dùng nhập vào từ các control input
    let monAn = new MonAn();
    //Dom đến tất cả input trong thẻ form (Vì giao diện chỉ có duy nhất 1 thẻ )
    let arrInput = document.querySelectorAll('form input,form select, form textarea');
    for(let tagInput of arrInput) {
        //Mỗi lần duyệt lấy ra value và id của thẻ đó
        let {id,value} = tagInput;
        //Gán vào món ăn các giá trị dựa trên id bởi vì id trùng với tên thuộc tính
        monAn[id] = value;
    }
    // console.log('monAn',monAn);
    //Thêm món ăn vào thuộc tính mangMonAn của đối tượng menu
    menu.themMonAn(monAn);
    console.log('menu',menu);    

    //Dom đến thẻ tbody tạo ra html dựa vào phương thức renderMonAn
    document.querySelector('tbody').innerHTML = menu.renderMonAn();
}

//Xử lý xoá món ăn
window.xoaMonAn = (maMon) => {
    // alert(maMon);

    menu.xoaMonAn(maMon);
    console.log('menu sau khi xoá',menu);
    //render lại table
    document.querySelector('tbody').innerHTML = menu.renderMonAn();


}

window.chinhSuaMon = (maMon) => {
    menu.chinhSuaMonAn(maMon);
}


document.querySelector('#btnCapNhat').onclick = (event) => {
    //Lấy dữ liệu từ người dùng đã thay đổi sau đó sẽ update lại menu
    let monAnCapNhat = new MonAn(); // 0xxx4x
    
    //dom đến các thẻ input
    let arrInput = document.querySelectorAll('form input,form select, form textarea');
    for(let tagInput of arrInput) {
        let {id,value} = tagInput;
        monAnCapNhat[id] = value;
    }
    //SAu khi lấy tất cả dữ liệu từ người dùng thay đổi thì gọi phương thức cập nhật menu
    menu.capNhatMenu(monAnCapNhat.id,monAnCapNhat);

    // render lại giao diện
    document.querySelector('tbody').innerHTML = menu.renderMonAn();

}

document.querySelector('#selLoai').onchange = (event) =>{

    //event.target => truy xuất ngược lại thẻ đang diễn ra sự kiện 
    let value = event.target.value;
    alert(value);

    //Chép fullmenu ra 1 biến
    let fullMenu = menu.mangMonAn;
    //Lấy menu hiện tại gán = menu filter
    menu.mangMonAn = menu.locMonAnTheoLoai(value);
    //Render ra giao diện
    document.querySelector('tbody').innerHTML = menu.renderMonAn();
    //Gán menu.mangMenu = menu gốc (fullMenu)
    menu.mangMonAn = fullMenu;
    // let value = document.querySelector('#selLoai').value;
}