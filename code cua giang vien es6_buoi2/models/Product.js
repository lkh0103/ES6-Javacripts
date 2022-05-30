//export là cho phép các function, object, number, array ... sử dụng ở những file khác 

export function Product () {
    this.id='';
    this.name='';
    this.price='';
    this.showInfo = function () {
        console.log('id',this.id);
        console.log('name',this.name);
    }
}


export const arr  = [1,2,3,4,5]


//Mỗi file chỉ thực hiện duy nhất 1 lệnh export default

export default Product;