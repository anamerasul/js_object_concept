// using object literal t
const student ={name:'sakib',job:'cricket'}

const person =new Object();

console.log(person);

// const human =Object.create(null);
const human =Object.create(student);

console.log(human);

// class

class People {
        constructor(name,age){
                this.name=name;
                this.age=age;
        }
}

const peop= new People('manus',12);

console.log(peop);

// function

function Manus(name){
        this.name=name;

}

const Man =new Manus('kader');

console.log(Man)