//使用g，全局匹配，两个c都被替换为h
let res='abcdcba'.replace(/c/g, "h");
// 不使用g，只匹配一次，第二个c不会被替换
let res2='abcdcba'.replace(/c/, "h");
let res3='abcdCba'.replace(/c/g, "h");
console.log(res);
console.log(res2);
console.log(res3);