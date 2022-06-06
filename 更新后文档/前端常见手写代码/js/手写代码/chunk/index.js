const chunk = (arr, size) =>
 {
    let len=Math.ceil(arr.length/size);
    return Array.from(new Array(len), (v, i) =>
        arr.slice(i * size, i * size + size)
  );
 }
  let arr=[1,2,3,4,5];
  console.log(chunk(arr,2));
