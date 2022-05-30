// Lấy ra những phần tử SP là hang SX SONY (thuần JS)
let mangDTSONY = [];
for (let index = 0; index < mangSanPham.lenght; index++); {
    // Mỗi lần duyệt lấy ra 1 sp
    let sp = mangSanPham[index];
    if (sp.hangSX === 'SONY') {
        mangDTSONY.push(sp);
    }
}
console.log(mangDTSONY)


// Fillter trả về 1 mảng thỏa điều kiện arrow Function (ES6)

let mangSONY = mangSanPham.filter(sanPham => sanPham.hangSX === 'SONY');

// let mangSONY = mangSanPham.filter((sanPham,index) => {
//     if (sanPham.hangSX === 'SONY'); {
//         return true;
//     }
//     return false;
// });

// find
let sp4 = mangSanPham.find(sanPham => sanPham.maSP === 4);
if(sp4) {
    sp4.gia = 5000;
    console.log(sp4);
} else{
    console.log('ko tim thay san pham')
}

// Findindex: trả về vị trí phần tử đầu tiên của đối tượng tìm thấy. Nếu ko tìm thấy thì trả về giá trị -1
let indexSP5 = mangSanPham.findIndex(sanPham => sanPham.maSP === 5);
if(indexSP5 !== -1){ // Tim thay
    console.log('index sp5', indexSP5)
    // thay doi gia tri
    mangSanPham[indexSP5].gia = 10000000;
    console.log('mangSP thay doi', mangSanPham)
} else{
    console.log('ko tim thay sp 5')
}

// Map(): dùng để chuyển đổi mảng này thành mảng khác

let mangStringHTML = mangSanPham.map((sanPham,index) => {
    
    return `
    <div class="col-4">
        <div class="card">
            <div class="card-header">
                <img src="http://..." class="w-100"/>
            </div>
            <div class="card-body">
                <p>${sanPham.tenSP}</p>
                <p>${sanPham.gia}</p>
            </div>
        </div>
    </div>
    `
})

mangStringHTML.forEach (htmlSP, index => {
    document.querySelector(#dssp).innerHTML += htmlSP;
}) // bên file html nhớ tạo 1 cái div class container rồi thêm id là dssp

// result [`<div></div>`,`<div></div>`,`<div></div>`,`<div></div>`]

// reduce có 3 tham số
let tongTien = mangSanPham.reduce((tienCongDon, sanPham, index) => {
    let tongTien = tienCongDon + sanPham.gia
    // return để lấy giá trị xử lý
    return tongTien; //1: 1000, 2: 3000(do tiencongdon ko con la so 0 nua)
}, 0);

let mangStringHTML = mangSanPham.reduce((html, sanPham, index) => {
    return html += `
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <img src="http://..." class="w-100"/>
                </div>
                <div class="card-body">
                    <p>${sanPham.tenSP}</p>
                    <p>${sanPham.gia}</p>
                </div>
            </div>
        </div>
    `

},'')

document.querySelector('#dssp').innerHTML = stringHTML;


// sort (): sắp xếp

// bé -> lớn
let mangSanPhamSortTheoTen = mangSanPham.sort((sp,spTruoc) => {
    let tenSP = sp.tenSP.toLowerCase();
    let tenSPTruoc = spTruoc.tenSP.toLowerCase();

    if (tenSP < tenSPTruoc) {
        return -1;
    }
        return 1;
})

console.log('mangSPTheoTen',mangSanPhamSortTheoTen);

// lớn -> bé hoặc hàm reverse (trong file PDF)