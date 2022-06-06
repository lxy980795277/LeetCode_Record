

function Person(name,age){
    this.name=name;
    this.age=age;
}

function new_obj(){
    let obj={};
    let fn=[].shift.apply(arguments);
    obj.__proto__=fn.prototype;
    fn.apply(obj,arguments);
    return obj;
}

let person=new_obj(Person,"tom",20);
console.log(person);