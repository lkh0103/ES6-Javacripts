// console.log(123)
import { MonAn } from '../models/MonAn.js';

document.querySelector('#btnThemMon').onclick = () => {
    //Lấy thông tin người dùng nhập vào từ giao diện chứa trong object MonAn


    //Dùng es6 để lấy thông tin người dùng nhập vào gán vào object MonAn
    let arrInput = document.querySelectorAll('#foodForm input, #foodForm select, #foodForm textarea');

    let monAn = new MonAn();
    // monAn.maMon  = document.getElementById('maMon').value;
    for (let theInput of arrInput) { // <input id="maMon" value="001" />,  <input id="tenMon" value="Cơm chiên cá mặn" />
        //Lấy ra lần lượt các thẻ 
        let { id, value } = theInput;
        monAn[id] = value;
    }

    //Từ thông tin object các món ăn => tạo ra các thẻ li
    let content = ``;
    for (let tenThuocTinh in monAn) {
        //Kiểm tra nếu như là tinhGiaKhuyenMai và hienThiThongTin thì không tạo ra <li></li>
        if (tenThuocTinh !== 'tinhGiaKhuyenMai' && tenThuocTinh !== 'hienThiThongTin' && tenThuocTinh !== 'hinhMon') {
            content += `<li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 class="my-0">${tenThuocTinh}</h6>
            </div>
            <span id="spMa" class="text-muted">${monAn[tenThuocTinh]}</span>
            </li>
        `
        } else {
            if (tenThuocTinh === 'tinhGiaKhuyenMai') {
                content += `<li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 class="my-0">${tenThuocTinh}</h6>
            </div>
            <span id="spMa" class="text-muted">${monAn[tenThuocTinh]()}</span>
            </li>`
            }
            if(tenThuocTinh === 'hinhMon') {
                content += `<li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 class="my-0">${tenThuocTinh}</h6>
                </div>
                <img src="${monAn[tenThuocTinh]}" width="200" height="200" alt="..." />
                </li>`
            }
        }
    }

    //Sau khi tạo ra chuỗi li từ các thuộc tính => DOM ul gán innerHTML = chuỗi li đó
    document.querySelector('ul.list-group').innerHTML = content;


    console.log(monAn);


}