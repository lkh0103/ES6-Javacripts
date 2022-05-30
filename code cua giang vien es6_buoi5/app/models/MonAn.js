export class MonAn {
    //Khai báo thuộc tính
    hinhMon = '';
    maMon = '';
    tenMon = '';
    loaiMon = '';
    giaMon = 0;
    khuyenMai = 0;
    tinhTrang = 0;
    moTa = '';

    constructor() {

    }
    //Khai báo phương thức
    tinhGiaKhuyenMai = () => {
        let giaKhuyenMai = this.giaMon * (100 - this.khuyenMai ) /100;
        return giaKhuyenMai;

    }

    // hienThiThongTin = () => {

    // }

}