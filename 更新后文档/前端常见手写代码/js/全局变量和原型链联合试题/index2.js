
//name:"A"和name="A"的区别
// 后者才是全局变量，前者只是a对象的一个属性name

// var a = {
// name: 'A',
// fun: function(){console.log(this.name);}
// };
// a.fun();//A
// a.fun.call({name: 'B'});//B
// var fun1 = a.fun;
// fun1();//undefined

var a = {
name: 'A',
fun: () => {
    //箭头函数继承上层作用域中的this，上层作用域是什么？显然是window，window上有无name，没有，所以返回undefined
    console.log(this.name);}
};
a.fun();
a.fun.call({name: 'B'});
var fun1 = a.fun;
fun1();