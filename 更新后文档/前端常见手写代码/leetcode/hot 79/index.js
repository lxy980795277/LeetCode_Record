let direction=[[0,1],[0,-1],[1,0],[-1,0]];
var exist = function(board, word) {
    let m=board.length;
    let n=board[0].length;
    let flag=Array.from(new Array(m),()=>new Array(n).fill(false));
    let tempstr="";
    for(let i=0;i<m;i++)
    {
        for(let j=0;j<n;j++)
        {
            if(board[i][j]!==word[0])
            continue;
            tempstr+=board[i][j];
            flag[i][j]=true;
            if(dfs(board,word,flag,1,tempstr,i,j))
            return true;
            tempstr=tempstr.slice(0,tempstr.length-1);
            flag[i][j]=false;
        }
    }
    return false;
};

function dfs(board,word,flag,index,tempstr,tempm,tempn)
{
    let m=board.length;
    let n=board[0].length; 
    if(index>word.length) return false;
    // console.log(tempstr);
    if(tempstr===word)
    return true;

    for(let i=0;i<4;i++)
    {
        let nextm=tempm+direction[i][0];
        let nextn=tempn+direction[i][1];
        if(nextm<0||nextm>=m||nextn<0||nextn>=n||flag[nextm][nextn]==true)
        continue;
        flag[nextm][nextn]=true;
        tempstr+=board[nextm][nextn];
        if(dfs(board,word,flag,index+1,tempstr,nextm,nextn))
        return true;
        tempstr=tempstr.slice(0,tempstr.length-1);
        flag[nextm][nextn]=false;

    }
    return false;

}
let board=[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let word="ABCCED";
let res=exist(board,word);
console.log(res);