
function deepClone(obj)
{
    let tempobj=Array.isArray(obj)?[]:{};
    for(let key in obj)
    {
        if(typeof obj[key]=="object")
        tempobj[key]=deepClone(obj[key]);
        else
        tempobj[key]=obj[key];
    }
    return tempobj
}


var arr = {
    name: '浪漫主义码农',
    age: 20,
    address: ['jiangxi', 'changsha'],
    friends: {
        friend1: '张三',
        friend2: '李四'
    },
    fun: function(){
        console.log("我是" + this.name + "的对象")
    }
}
var brr = deepClone(arr)
brr.name = '法外狂徒张三'
brr.address[0] = '长沙'
console.log("arr为", arr)
arr.fun()
console.log("brr为", brr)
brr.fun()


