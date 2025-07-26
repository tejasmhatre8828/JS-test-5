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










// // 3. Spiral Print of Matrix
// // Description: Print elements in spiral order.

// //     Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

var nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


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
// console.log("[",result.join(" "),"]", "result")



















// // 4. Search in 2D Matrix
// // Description: Return true if a given element exists.
// // Output: true


// var Input3 = matrix + target = 5
// [
//     [1, 2, 3],
//     [4, 5, 6]
// ]







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






// // 6. Count Zeros and Ones in a Matrix
// // Description: Count the number of 0s and 1s in a 2D matrix.
// // Output:
// // { zero: 4, one: 5 }


// var Input5 = [
//     [1, 0, 1],
//     [1, 1, 0],
//     [0, 0, 1]
// ]





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


// var Input7 = matrix + k = 5
// [
//     [2, 5, 7],
//     [1, 8, 3]
// ]






