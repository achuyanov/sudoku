module.exports = function solveSudoku (matrix) {
    
    function solver (matrix) {
        let k, j, val ;
        
        for (k = 0; k < 9; k++) {

            for (j = 0; j < 9; j++) {

                if (matrix[k][j] === 0) {
                    
                    for (val = 1; val <= 9; val++) {

                        if (checkVal(matrix, k, j, val)) {

                            matrix[k][j] = val;
                            if (solver(matrix)) return true;
                            matrix[k][j] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    function checkVal (matrix, k, j, val) {
        let i, row, col;
        for (i = 0; i < 9; i++) {
            row = Math.floor(k / 3) * 3 + Math.floor(i / 3);
            col = Math.floor(j / 3) * 3 + i % 3;
            if ( (matrix[k][i] === val) || (matrix[i][j] === val) || (matrix[row][col] === val) ) return false;
        }
        return true;
    }


    solver(matrix);
    return matrix;
}
