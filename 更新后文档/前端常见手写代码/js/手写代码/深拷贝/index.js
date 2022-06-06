
// function deepClone(obj)
// {
//     let objClone=Array.isArray(obj)?[]:{};
//     if(obj&&typeof obj==="object")
//     {
//         for(let key in obj)
//         {
//             if(obj.hasOwnProperty(key))
//             {
//                 if(obj[key]&&typeof obj[key]==="object")
//                 objClone[key]=deepClone(obj[key]);
//                 else
//                 objClone[key]=obj[key];
//             }
//         }
//     }
//     return objClone;
// }




function deepClone(obj){
    const tempobj=Array.isArray(obj)?[]:{};
    if(obj&&typeof obj==="object")
    {
        for(let key in obj)
        {
            if(key&&obj[key]==="object")
            tempobj[key]=deepClone(obj[key]);
            else
            tempobj[key]=obj[key];
        }
    }
    return tempobj;
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

