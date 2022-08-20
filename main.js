// //arrow function

// var Car = (a, collection) => {
//     return a + ' is ' + collection;
// }
// console.log(Car('My car ', "limited edition"));

// var Car1 = (a, collection) => a + ' are in ' + collection;
// console.log(Car1('My Cars', "My Garage"));


// var fruit = items => ' I love ' + items;
// console.log(fruit('watermelone'));



// //class
// class items extends fruit {
//     constructor() {
//         super();
//         this.name = 'orange';

//     }
//     fruit() {
//         return this.name;
//     }

// }
// var item = new items();
// console.log(items)


// const s1 = 'hello';
// console,log(typeof s1);

// const s2 = new String('hello');
// console.log(typeof s2);


// console.log(window);
// window.alert(1);

// const book1 = {
//     title: 'My life be like',
//     author: 'Aziz',
//     year: '2050',

//     getSummary: function() {
//         return `${this.title} was written by
//         ${this.author} in ${this.year}`;

//     }
// };
// console.log(book1.getSummary ());


// const book2 = {
//     title: 'My life be like',
//     author: 'Aziz',
//     year: '2049',

//     getSummary: function() {
//         return `${this.title} was written by
//         ${this.author} in ${this.year}`;

//     }
// };
// console.log(Object.values(book2));
// console.log(Object.keys(book2));

//spread operator

function sum(x,y,z){
    return x+y+z;
}
const array = [5, 8, 6];
console.log(sum(...array));