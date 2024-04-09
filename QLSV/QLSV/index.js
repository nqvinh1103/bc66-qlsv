/**
 1. lấy thông tin từ form
 2. tạo object dự vào bước 1
 3. show object lên layout
 */
function submit(){
    // object sẽ gồm 7 key ( phương thức + thuộc tính )
    var maSV = document.querySelector('#txtMaSV').value
    var tenSV = document.querySelector('#txtTenSV').value
    var loaiSV = document.querySelector('#loaiSV').value
    var diemToan = document.querySelector('#txtDiemToan').value*1
    console.log('diemToan: ', diemToan);
    var diemVan = document.querySelector('#txtDiemVan').value*1
    console.log('diemVan: ', diemVan);
    // tạo object
    var sv = {
        maSV: maSV,
        tenSV: tenSV,
        loaiSV: loaiSV,
        diemToan: diemToan,
        diemVan: diemVan,
        diemTB: function(){
            var dtb = (this.diemToan+this.diemVan)/2
            return dtb
        },
        xepLoai: function(){
            var dtb = this.diemTB()
            if(dtb>=5){
                return "Đậu"
            }
            else{
                return "Rớt"
            }
        }
    }
    document.querySelector('#spanXepLoai').innerText = sv.xepLoai()
    document.querySelector('#spanTenSV').innerText = sv.tenSV
    document.querySelector('#spanMaSV').innerText = sv.maSV
    document.querySelector('#spanDTB').innerText = sv.diemTB()
    document.querySelector('#spanLoaiSV').innerText = sv.loaiSV
}
