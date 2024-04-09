// object ~ đối tượng 

// tạo 1 object để lưu thông tin của người dùng

/*
    var name ={
        key:value
    }
*/
var user1 = {
    name: 'Alice',
    gmail: 'alice@gmail.com',
}
var user2 = {
    name: 'Bob',
    gmail: 'bob@gmail.com',
}
// so sánh array và object
/**
 Array: cần lưu các data cùng nhóm ~ dùng dấu [] ~ truy xuất tới phần tử bên trong dựa vào index (list - [] - index)
 Object: cần lưu các thông tin khác nhau cùng trỏ tới 1 đối tượng ~ dấu { } ~ truy xuất value thông qua key (object - {} - key)
 */
// tạo object chứa thông tin 1 con mèo
var cat = {
    name: 'miu', // property
    color: 'white', // property
    speak: function(){
        // method
        console.log('meo meo');
    },
    child:{
        name: 'kitty',
        color: 'white',
        speak: function(){
            console.log('kitty meo meo');
        }
    }
}
// in ra tên của con mèo
// object.key
console.log(cat.name);
cat.speak()
cat.child.speak()

var bot = {
    name: 'mob', // property
    color: 'red', // property
    run: function(){
        // method
        console.log('bruhhhh');
    }
}
console.log(bot.color);
bot.run()

// con trỏ this ( sử dụng bên trong object)

var dog={
    name: 'lulu',
    color: 'black',
    speak: function(){
        console.log('gâu gâu, tôi tên:',this.name);
    },
    introduce: function(){
        console.log('Hi everyone');
        this.speak()
    }
}

dog.speak()
dog.introduce()
// update value của key
dog.color = 'super black'
console.log(dog.color);
