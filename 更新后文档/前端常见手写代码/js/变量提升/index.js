
function a(){
    try {
        throw new Error();
    } catch (x) {
        
        // var x=1;
        x=1;
        y=2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
}
a()

//var x=1时，输出1 undefined 2 此时x因为var，变量提升
//x=1时，会报错，找不到x，因为x=1，修改的只是catch的参数x，并不会挂载到全局作用域中