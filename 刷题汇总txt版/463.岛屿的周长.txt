class Solution{
    public int islandPerimeter(int[][] grid) { //DFS的方法
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 1) {
                // 题目限制只有一个岛屿，计算一个即可
                return dfs(grid, r, c);
            }
        }
    }
    return 0;
}

int dfs(int[][] grid, int r, int c) {
    if (!(0 <= r && r < grid.length && 0 <= c && c < grid[0].length)) {
        return 1;
    }
    if (grid[r][c] == 0) {
        return 1;
    }
    if (grid[r][c] != 1) {
        return 0;
    }
    grid[r][c] = 2;
    return dfs(grid, r - 1, c)
        + dfs(grid, r + 1, c)
        + dfs(grid, r, c - 1)
        + dfs(grid, r, c + 1);
}
}





// class Solution {
//     public int islandPerimeter(int[][] grid) { //直接双重for循环方法
//         int count = 0;
//         int height = grid.length;
//         int width = grid[0].length;
//         int sum = 0;
//         for(int i = 0;i<height;i++){
//             for(int j =0;j<width;j++){
//                 if(grid[i][j] == 1){
//                     int lll = 0;
//                     if(i+1<0||j<0||i+1>height-1||j>width-1||grid[i+1][j]!=1) lll++;
//                     if(i-1<0||j<0||i-1>height-1||j>width-1||grid[i-1][j]!=1) lll++;      
//                     if(i<0||j+1<0||i>height-1||j+1>width-1||grid[i][j+1]!=1) lll++;       
//                     if(i<0||j-1<0||i>height-1||j-1>width-1||grid[i][j-1]!=1) lll++;
//                     sum = sum+lll;
//                 }
//             }
//         }
//         return sum;
//     }

// }