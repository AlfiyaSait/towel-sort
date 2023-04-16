
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix!=[] && matrix) { // матрица не пустой массив и существует
    let resArr=[];
    for (let i=0; i<matrix.length; i++) {
      for (let j=0; j<matrix[i].length; j++) {
        if (i%2===0) {
          resArr.push(matrix[i][j]);
        } else {
          resArr.push(matrix[i][matrix[i].length - 1 - j])
        }
      }      
    }
    return resArr;
  } else {
    return [];
  } 
}

// console.log (module.exports([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]));
