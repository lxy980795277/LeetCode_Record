function teacher(name,age){
    this.name = name
    this.age = age
}

function new_teacher()
{
    let obj={};
    const father=[].shift.apply(arguments);
    obj.__proto__=father.prototype;
    father.apply(obj,arguments);
    return obj;
}





var a = new_teacher(teacher,"小王",25)
console.log(a)