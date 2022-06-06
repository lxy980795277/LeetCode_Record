

function get(obj,path,defaultvalue="undefined")
{
    let newPath=[];
    if(Array.isArray(path))
    newPath=path;
    else
    {
        newPath=path.replace(/\[/g,".").replace(/\]/g,"").split(".");
    }
    return newPath.reduce((pre,cur)=>{
        return (pre||{})[cur];
    },obj)||defaultvalue;
}

var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
console.log(get(object, 'a[0].b.c'));
// => 3

console.log(get(object, ['a', '0', 'b', 'c'])); 
// => 3
 console.log(get(object, 'a.b.c', 'default'));

