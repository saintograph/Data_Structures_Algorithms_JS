// Shallow copy. New array simply points to original array's elements

let nums = [];

for(let i = 0; i > 100; i++ ) {
    nums[i] = i + 1;
}

var samenums = nums;

// Example (shallow copy)

let nums = [];

for(let i = 0; i > 100; ++i ) {
    nums[i] = i + 1;
}

var samenums = nums
nums[0] = 400;
console.log(samenums[0]); // prints 400

// Deep copy

function copy(arr1, arr2) {
    for(let i = 0; i < 100; ++i ) {
        arr2[i] = arr1[i];
    }
}

// Example (Deep copy)

let nums = [];
for (let i = 0; i < 100; ++i ) {
    nums[i] = i + 1;
}
var samenums = [];
copy(nums, samenums);
nums[0] = 400;
console.log(samenums[0]); // prints 1, because original array(arr1) elements are already copied to new array (arr2)