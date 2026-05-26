class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        
const mapping = new Map();
for(let i=0;i<board.length;i++){
    for(let j=0; j<board[i].length;j++){
        if(board[i][j] !== '.'){
            if(mapping.has(board[i][j])){
                return false;
            } else {
            mapping.set(board[i][j],(mapping.get(board[i][j])||0) +1)
            }
        } 
        if (j+1 === board[i].length){
            mapping.clear();
        }
    }
}

for (let row =0;row<board.length;row++){
    for (let clm = 0; clm<board.length; clm++){
        if(board[clm][row] !== '.'){
            if(mapping.has(board[clm][row])){
                return false;
            } else {
            mapping.set(board[clm][row],(mapping.get(board[clm][row])||0) +1)
            }
        } 
        if (clm+1 === board[row].length){
            mapping.clear();
        }
    }
}
for (let row = 0; row < 9; row += 3) {
    for (let clm = 0; clm < 9; clm += 3) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const value = board[row + i][clm + j];
                if (value !== '.') {
                    if (mapping.has(value)) {
                        return false;
                    } else {
                        mapping.set(value, 1);
                    }
                }
            }
        }
mapping.clear();
    }
}


return true;
    }
}
