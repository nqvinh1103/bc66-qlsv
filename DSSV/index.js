var dssv = []
// tạo function render table


// lấy dữ liệu từ localStorage render lên table
var dataJson = localStorage.getItem('DSSV')
// convert json thành array để đem đi duyệt 
if(dataJson !== null){
    // kiểm tra nếu data khác null không có dữ liệu thì không render
    dssv = JSON.parse(dataJson)
    renderDssv(dssv)
}
/*
1. Lấy thông tin từ form
2. Tạo object dự vào bước 1
3. Thêm object sinh viên vào mảng sinh viên
4. Render array thành table
*/

function themSV(){
    // lấy thông tin từ form
    var ma = document.getElementById('txtMaSV').value
    var ten = document.getElementById('txtTenSV').value
    var email = document.getElementById('txtEmail').value
    var matKhau = document.getElementById('txtPass').value
    var toan = document.getElementById('txtDiemToan').value*1
    var ly = document.getElementById('txtDiemLy').value*1
    var hoa = document.getElementById('txtDiemHoa').value*1
    // tạo object
    var sv = {
        ma: ma,
        ten: ten,
        email: email,
        matKhau: matKhau,
        toan: toan,
        ly: ly,
        hoa: hoa,
        dtb: function(){
            return (this.toan + this.ly + this.hoa)/3
        }
    }
    // lưu sv vào danh sách
    dssv.push(sv)
    // lưu data xuống localStorage
    // b1: conver array to json
    var dataJson = JSON.stringify(dssv)
    // b2: lưu json vào vùng nhớ localStorage
    localStorage.setItem('DSSV',dataJson)
    // render array thành table
    renderDssv(dssv)
}
function xoaSV(id){
    // xóa => splice => tìm index
    var index = dssv.findIndex(function(item){
        return item.ma == id
    })
    dssv.splice(index,1)
    renderDssv(dssv)
}
// localStorage JS ~ giữ lại data không bị mất sau khi load lại trang ~ chỉ lưu được json
// JSON.stringtify => convert array to JSON
// JSON.parse => convert json thành array

// lưu xuống: JSON.stringtify => localStorage.setItem(key,value)
// lấy lên: localStorage.getItem(key) => JSON.parse