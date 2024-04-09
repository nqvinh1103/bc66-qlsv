// danh sách => array, điện thajoi => object
// danh sách điện thoại => array chứa object

var phone1 = {name: 'sam sung J7', price: 2000}
var phone2 = {name: 'sam sung J9', price: 9000}
var phone3 = {name: 'iphone 15', price: 15000}

var phoneArr = [phone1,phone2,phone3]

phoneArr.forEach(function(item){
    console.log(item.name);
})

// đếm số lượng điện thoại có giá nằm trong khoảng từ 7000 đến 10000
phoneAbove7000 = phoneArr.filter(function(item){
    return item.price>7000 && item.price<10000
})
// in ra tên các điện thoại đang có => duyệt mảng
var result = []
for(var i=0; i<phoneArr.length;i++){
    var phone = phoneArr[i]
    if(phone.price>=7000 && phone.price<=10000){
        result.push(phone)
    }
}
console.log('result: ', result);

// xóa điện thoại có tên iphone 15
for(var i=0; i<phoneArr.length;i++){
    if(phoneArr[i].name == 'iphone 15'){
        phoneArr.splice(i,1)
    }
}
console.log('phoneArr: ', phoneArr);

// tìm vị trí bằng findIndex

var index = phoneArr.findIndex(function(item){
    return item.name == 'iphone 15'
})
