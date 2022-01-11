// dot Notation, bracket Notation
// them key ko can bien contacts.key = value;
// them key can bien trong oj => [key] = value key;
// Lay value bang key . ['key']
// lay value bang bien [bien]

// function trong oj

// let email = 'soncao@gmail.com'
// let contacts = {
//     firstName: "Van",
//     lastName: "Nguyen",
//     numer: "0543236543",
//     likes: ["Pizza", "Coding", "Pho"],
//     [email]: email,
//     getInfor: function() {
//         console.log('ten' + this.firstName + " Ho" + this.lastName)
//     }
// }
// contacts.getInfor();

// constructor => phuong thuc sinh ra doi tuong
// ex

// function Human(name, age, numer, height){
//     this.name = name;
//     this.age = age;
//     this.numer = numer;
//     this.height =height;

// }
// let foo = {
//     a: 'hello', //0
//     b: 'world', //1
// };

// let qux = 'hello';

// function bar(argument1, argument2) {
//     argument1.a = 'hi';
//     argument2 = 'hi';
// }

// bar(foo, qux);
// console.log(foo.a);
// console.log(qux);
//
// const dog = {
//     age: 15,
//     getEat: function() {
//         console.log("Thit");
//     }
// }
// const mydog = {};
// mydog.__proto__ = dog;
// let myFamily = {
//     quantity: 4,
//     member: ["Dad", "Mom", "Me", "Daughter"],
//     location: "Vietnam",
// };
// const family = {};
// family.__proto__ = myFamily;

// console.log(family.quantity)
// let obj = {
//     foo: { a: "hello", b: "world" },
//     bar: ["example", "mem", null, { xyz: 6 }, 88],
//     qux: [4, 8, 12]
// };

// if (obj['bar']) {
//     for (let i in obj['bar']) {
//         for (let item in obj['bar'][i]) {
//             if (obj['bar'][i][item] === 6) {
//                 obj['bar'][i][item] = 606;
//             }

//         }
//     }
// }
// console.log(obj)




// console.log(Object.keys(obj))

// let arrKey = Object.keys(obj)
//     // obj.find(element => element.id === 3)
// console.log('bar' in arrKey)
// cách 1;
// console.log(obj.bar[3].xyz);
// let a = Object.values(object1).find((bar) => {
//     return obj.val == "bb"
// });
// let arrobj = Object.values(obj);
// console.log(arrobj);
// for (let i = 0; i < arrobj.length; i++) {

// }
function lookUpProfile(name, prop) {
    for (let x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop];
            } else {
                return "Không có thuộc tính trên ";
            }
        }
    }
    return "Không tồn tại thông tin trên";
}

function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (prop in contacts[i]) {
                return contacts[i][prop];
            } else {
                return "Không có thuộc tính trên ";
            }
        }
    }
    return "Không tồn tại thông tin trên";
}