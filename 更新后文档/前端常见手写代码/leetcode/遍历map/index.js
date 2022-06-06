let map=new Map();
map.set("name","tom");
map.set("age",10);
for (let key in map)
{
    console.log(key);
}
for (let [key,val] of map)
{
    console.log(key,val);
}