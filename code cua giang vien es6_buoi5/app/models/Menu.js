export class Menu {
    mangMonAn = []; //Chứa các object món ăn 
    //[{maMon:1,tenMon:'a',...},{maMon:2,tenMon:'b',...}]

    themMonAn = (monAn) => {
        this.mangMonAn.push(monAn);
    }


    renderMonAn = () => {
        let stringHTML = this.mangMonAn.reduce((htmlTR,monAn,index)=>{ 
            htmlTR += `<tr>
                <td>${monAn.maMon}</td>
                <td>${monAn.tenMon}</td>
                <td>${monAn.loaiMon === 'loai1' ? 'Chay' : 'Mặn'} </td>
                <td>${monAn.giaMon}</td>
                <td>${monAn.khuyenMai}%</td>
                <td>${monAn.tinhGiaKhuyenMai()}</td>
                <td>${monAn.tinhTrang}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaMonAn('${monAn.maMon}')">Xoá</button>
                    <button class="btn btn-primary ml-2" onclick="chinhSuaMon('${monAn.maMon}')" data-toggle="modal" data-target="#exampleModal" >Sửa</button>
                </td>
            </tr>`;
            return htmlTR;
        },'');
        return stringHTML;
    }
    chinhSuaMonAn = (maMon) => {
        //Dựa vào mã món tìm ra món ăn được chỉnh sửa (find)
        let monAnChinhSua = this.mangMonAn.find(mon => mon.maMon === maMon);
        if(monAnChinhSua) {
            //Load lên các modal popup
            let arrInput = document.querySelectorAll('form input,form select, form textarea');
            // [input#maMon, input#tenMon, input#khuyenMai,...]
            // document.getElementById('maMon')
            arrInput.forEach((tagInput,index) => {
                let {id} = tagInput; //id lần lượt là 'maMon', 'tenMon', 'khuyenMai', ....

                //Dựa vào id để lấy ra giá trị từng thuộc tính
                tagInput.value = monAnChinhSua[tagInput.id];
            })
        } 
    }
    // python
    // pascal , c , c++


    xoaMonAn = (maMon) => {
        //this.mangMonAn = [{maMon:1,tenMon:'a',...},{maMon:2,tenMon:'b',...}]

        // splice(index,1) 
        let index = this.mangMonAn.findIndex(mon => mon.maMon === maMon);
        if(index !== -1) {
            this.mangMonAn.splice(index,1);
        }

        //cách 2: 
        // this.mangMonAn = this.mangMonAn.filter(mon => mon.maMon !== maMon);
        
    }

    
    capNhatMenu = (maMon,monAnCapNhat) => {
        //Tìm ra món ăn cần chỉnh sửa trong mảng để cập nhật món ăn đó
        // this.mangMonAn = [{maMon:1,tenMon:'a',...},{maMon:2,tenMon:'b',...}]
        let monAnUpdate = this.mangMonAn.find(mon => mon.maMon);
        // monAnUpdate = monAnCapNhat => sai 
        // [0xxx2x,0xxx3x]
        // monAnUpdate = 0xxx3x
        // 0xxx3x.maMon = abc
        // monAnUpdate = 0xxx4
        if(monAnUpdate) {
            // monAnUpdate.tenMon = monAnCapNhat.tenMon; 
            // monAnUpdate.khuyenMai = monAnCapNhat.khuyenMai; 
            for(let thuocTinhMonAn in monAnUpdate) {
                if(thuocTinhMonAn !== 'maMon')
                {
                    //Lấy từng thuộc tính thằng trong mảng gán = từng giá trị của thằng trên giao diện
                    monAnUpdate[thuocTinhMonAn] = monAnCapNhat[thuocTinhMonAn];
                }
            }
        }
    }

    locMonAnTheoLoai = (tenLoai) => {

        if(tenLoai === 'all') {
            return this.mangMonAn;
        }
        let result = this.mangMonAn.filter(mon => mon.loaiMon == tenLoai);
        //Tạo ra 1 kết quả giống với kết quả filter nhưng khác địa chỉ ô nhớ
        return [...result];
    }

}