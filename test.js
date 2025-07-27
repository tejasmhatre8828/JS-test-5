// // 1. Transpose of a Matrix
// // Description: Convert rows to columns and vice versa.

// // var Input = [
// //     [1, 2],
// //     [3, 4],
// //     [5, 6]
// // ]

// // let left = 0;
// // let right = Input[0].length - 1;
// // let top = 0;
// // let bottom = Input.length - 1;

// // const result = []
// // const resultA = []
// // const resultB = []

// // for (let i = top; i <= bottom; i++) {
// //     console.log(Input[i][left]);
// //     resultA.push(Input[i][left]);

// // }
// // left++;
// // // top++;

// // for (let i = top; i <= bottom; i++) {
// //     console.log(Input[i][right]);
// //     resultB.push(Input[i][right]);
// // }

// // console.log("[", resultA)
// // console.log(resultB, "]")







// // 2. Diagonal Sum of Square Matrix
// // Description: Find the sum of both main diagonals.
// // Output: 25 (1+5+9 + 3+5+7 – 5 (counted twice)) 


// var Input1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// let n = Input1.length;
// let sum = 0;

// for (let i = 0; i < n; i++) {
//     sum += Input1[i][i];
//     sum += Input1[i][n - 1 - i];
// }

// if (n % 2 === 1) {
//     sum -= Input1[Math.floor(n / 2)][Math.floor(n / 2)];
// }

// console.log("Sum of both diagonals:", sum);








// // 3. Spiral Print of Matrix
// // Description: Print elements in spiral order.

// //     Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// var nums = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]


// let left = 0;
// let right = nums[0].length - 1;
// let top = 0;
// let bottom = nums.length - 1;

// const result=[];

// while (left <= right && top <= bottom) {

//     for (let i = left; i <= right; i++) {
//         console.log(nums[top][i]);
//         result.push(nums[top][i]);
//     }
//     top++;

//     for (let i = top; i <= bottom; i++) {
//         console.log(nums[i][right]);
//         result.push(nums[i][right]);
//     }
//     right--;

//     if (top <= bottom) {
//         for (let i = right; i >= left; i--) {
//             console.log(nums[bottom][i]);
//             result.push(nums[bottom][i]);
//         }
//         bottom--;

//     }
//     if (left <= right) {
//         for (let i = bottom; i >= top; i--) {
//             console.log(nums[i][left]);
//             result.push(nums[i][left]);
//         }
//         left++;
//     }
// }
// console.log("[",result.join(", "),"]", "result")






// // 4. Search in 2D Matrix
// // Description: Return true if a given element exists.
// // Output: true


// var Input3 = //matrix + target = 5
// [
//     [1, 2, 3],
//     [4, 5, 6]
// ]

// let searchInMatrix = (matrix, target) => {
//   let targetFound = false;

//   for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < matrix[row].length; col++) {
//       if (matrix[row][col] == target) {
//         targetFound = true;
//       }
//     }
//   }

//   return targetFound;
// };

// console.log(
//   searchInMatrix(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//     ],
//     5
//   )
// );





// // 5. Rotate Matrix by 90 Degrees Clockwise
// // Description: Rotate a square matrix in -place.
// // Output:
// // [
// //     [3, 1],
// //     [4, 2]
// // ]

// var Input4 =
//     [
//         [1, 2],
//         [3, 4]
//     ]


// function rotateMatrix90Clockwise(matrix) {
//     const n = matrix.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         matrix[i].reverse();
//     }
//     return matrix;
// }

// console.log(rotateMatrix90Clockwise(Input4));




// // 6. Count Zeros and Ones in a Matrix
// // Description: Count the number of 0s and 1s in a 2D matrix.
// // Output:
// // { zero: 4, one: 5 }


// var Input5 = [
//     [1, 0, 1],
//     [1, 1, 0],
//     [0, 0, 1]
// ]

// let countZerosAndOnes = (input) => {
//   let obj = { zero: 0, one: 0 };

//   for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < input[0].length; j++) {
//       if (input[i][j] == 0) {
//         obj.zero++;
//       } else if (input[i][j] == 1) {
//         obj.one++;
//       }
//     }
//   }

//   return obj;
// };

// console.log(
//   countZerosAndOnes([
//     [1, 0, 1],
//     [1, 1, 0],
//     [0, 0, 1],
//   ])
// );




// // 7. Set Matrix Zeros
// // Description: If any element is 0, set its entire row and column to 0.
// // Output:
// // [
// // [1, 0, 3],
// // [0, 0, 0],
// // [7, 0, 9]
// // ]

// var Input6 = [
//     [1, 2, 3],
//     [4, 0, 6],
//     [7, 8, 9]
// ]






// // 8. Count Elements Greater than a Threshold
// // Description: Count how many elements are greater than a given number k.

// // Output: 2 (7 and 8)


// var Input7 = //matrix + k = 5
// [
//     [2, 5, 7],
//     [1, 8, 3]
// ]

// let greaterThanThreshold = (input7, k) => {
//   let count = 0;

//   for (let row = 0; row < input7.length; row++) {
//     for (let col = 0; col < input7[row].length; col++) {
//       if (input7[row][col] > k) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

// console.log(
//   greaterThanThreshold(
//     [
//       [2, 5, 7],
//       [1, 8, 3],
//     ],
//     5
//   )
// );




// 9. Find Row with Maximum Sum 
// Description: Return the row which has the highest sum of elements. 
// Output: [4, 5, 6]


var Input8 =
    [
        [1, 2, 3],
        [4, 5, 6],
        [0, 1, 1]
    ]


// 10. Boundary Elements of a Matrix 
// Description: Print all boundary (outer layer) elements of a matrix. 
// Output: [1, 2, 3, 6, 9, 8, 7, 4]

var Input9 =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]



let left9 = 0;
let right9 = Input9[0].length - 1;
let top9 = 0;
let bottom9 = Input9.length - 1;

const result9 = [];


for (let i = left9; i <= right9; i++) {
    console.log(Input9[top9][i]);
    result9.push(Input9[top9][i]);
}
top9++;

for (let i = top9; i <= bottom9; i++) {
    console.log(Input9[i][right9]);
    result9.push(Input9[i][right9]);
}
right9--;
for (let i = right9; i >= left9; i--) {
    console.log(Input9[bottom9][i]);
    result9.push(Input9[bottom9][i]);
}
bottom9--;

for (let i = bottom9; i >= top9; i--) {
    console.log(Input9[i][left9]);
    result9.push(Input9[i][left9]);
}

console.log("[", result9.join(", "), "]", "result")

