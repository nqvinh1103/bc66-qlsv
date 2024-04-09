// index.js ~ file chính
// controller.js ~ file phụ
// tạo function render table
function renderDssv(svArr){
    var contentHTML = ''
    // duyệt mảng
    for(var i=0;i<svArr.length;i++){
        var sv = svArr[i]
        var trString =`<tr>
                            <td>${sv.ma}</td>;                
                            <td>${sv.ten}</td>                       
                            <td>${sv.email}</td>                       
                            <td>0</td>
                            <td><button onclick="xoaSV('${sv.ma}')" class ='btn btn-danger'>Xóa</button></td>
                        </tr>`
        contentHTML += trString
    }
    document.getElementById('tbodySinhVien').innerHTML = contentHTML
}

