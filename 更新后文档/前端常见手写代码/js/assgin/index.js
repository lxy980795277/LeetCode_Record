
let obj={
    name:"tom",
    age:18,
    gf:{
        one:"lihua",
        two:"xiaofang"
    }
}

let obj2={};
Object.assign(obj2,obj);

obj2.name="nick"
obj2.gf.one="xiaoli"
console.log(obj);
console.log(obj2);