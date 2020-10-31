// First add Function
function add(a, b) {
    return a + b;
}

// Second add function
function add(a, b) {
    if ((typeof a && typeof b) != "number")
        throw new Error("Parameters in add must be numbers")
    result = a + b
    if (parseInt(result) != result) {
        return parseFloat(result).toFixed(2);
    }
    return result
}

// Expectations
console.log(add(4, 5))          // 9
console.log(add(0.01, 0.02))    // 0.03
add("5", "2")                   // Error

// Writing Tests
