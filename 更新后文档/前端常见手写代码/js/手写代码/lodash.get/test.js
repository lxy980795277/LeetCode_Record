
function get(obj,path,defaultValue="undefined")
{
    let newpath;
    if(typeof path==="string")
    newpath=path.replace(/\[/g,".").replace(/\]/g,"").split(".");
    else
    newpath=path;

    return newpath.reduce((pre,cur)=>{
        return (pre||{})[cur];
    },obj)||defaultValue
}

var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
console.log(get(object, 'a[0].b.c'));
// => 3

console.log(get(object, ['a', '0', 'b', 'c'])); 
// // => 3
 console.log(get(object, 'a.b.c', 'default'));

