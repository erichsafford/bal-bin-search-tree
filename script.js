// const prettyPrint = (node, prefix = "", isLeft = true) => {
//     if (node === null) {
//       return;
//     }
//     if (node.right !== null) {
//       prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
//     }
//     console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
//     if (node.left !== null) {
//       prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
//     }
//   };


// Mergesort functions
function mergeSort(array) {
    if (array.length <= 1) {
        return array
    }

    const middle = Math.floor(array.length / 2)
    const left = mergeSort(array.slice(0, middle))
    const right = mergeSort(array.slice(middle))

    return merge(left, right)
}

function merge(left, right) {
    const result = []
    let x = 0
    let y = 0

    while (x < left.length && y < right.length) {
        if (left[x] <= right[y]) {
            result.push(left[x])
            x++
        } else {
            result.push(right[y])
            y++
        }
    }

    while (x < left.length) {
        result.push(left[x])
        x++
    }

    while (y < right.length) {
        result.push(right[y])
        y++
    }
    return result
}

// Class declarations
class Node {
    constructor(value = null) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(arr) {
        this.root = null
    }

}

// Process array and remove duplicates
function processArray(arr) {
    let sorted = mergeSort(arr)
    let uniqueSet = removeDuplicates(sorted)
    return uniqueSet
}

function removeDuplicates(arr) {
    return [...new Set(arr)]
}

// Main tree building function (recursive)

function buildTree(arr, start, end) {
    if (start > end) {
        return null
    }
    let mid = parseInt((start + end) / 2)
    let node = new Node(arr[mid])
    node.left = buildTree(arr, start, mid - 1)
    node.right = buildTree(arr, mid + 1, end)


    return node

}


let bst = new BinarySearchTree()
let node = new Node()

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const uniqueSet = processArray(arr)
const n = uniqueSet.length
let root = buildTree(uniqueSet, 0, n - 1)
console.log(root)