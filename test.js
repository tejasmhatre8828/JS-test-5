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

// let left1 = 0;
// let right1 = Input1[0].length - 1;
// let top1 = 0;
// let bottom1 = Input1.length - 1;

// const result1 = []

// for (let i = left1; i <= right1 - 1; i++) {
//     // var addition = left1 + ((top1 + 1) + right1 - 1)
//     console.log(left1)

// }


// console.log(left1)
// console.log(top1)
// console.log(addition)



// // console.log(result.join(" "), "result")






// // 3. Spiral Print of Matrix
// // Description: Print elements in spiral order.

// //     Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

var Input2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let left2 = 0;
let right2 = Input2[0].length - 1;
let top2 = 0;
let bottom2 = Input2.length - 1;

const result2 = [];

// for (let i = left2; i <= right2; i++) {
//     console.log(Input2[top2][i]);
//     result2.push(Input2[top2][i]);
// }
// top2++;
// for (let i = top2; i <= bottom2; i++) {
//     console.log(Input2[i][right2]);
//     result2.push(Input2[i][right2]);
// }
// right2--;

for (let i = right2; i <= left2; i++) {
    console.log(Input2[bottom2][i]);
    result2.push(Input2[bottom2][i]);
}

console.log("[", result2.join(", "), "]", "result")



















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






