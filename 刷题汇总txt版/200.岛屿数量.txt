class Solution {
    public int numIslands(char[][] grid) {   //DFS的方法 
        int count = 0;
        int height = grid.length;
        int width = grid[0].length;
        for(int i = 0;i<height;i++){
            for(int j =0;j<width;j++){
                if(grid[i][j] == '1'){
                    count ++ ;
                    dfs(grid,i,j,height,width);
                }
                
                
            }
        }
        return count;
    }

    public void dfs(char[][] nums,int i,int j,int height,int width){
        if(i>height-1|| i<0 || j>width-1||j<0){
            return ;
        }
        if(nums[i][j]== '1'){
            nums[i][j] = '2';
            dfs(nums,i-1,j,height,width);
            dfs(nums,i+1,j,height,width);
            dfs(nums,i,j-1,height,width);
            dfs(nums,i,j+1,height,width);
        }
    }

}