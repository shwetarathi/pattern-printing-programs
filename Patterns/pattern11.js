/* Pattern 11

1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1 

*/

function pattern11(n) {
    let result = ""
    let start = 1
    for (i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            start = 0
        }
        for (j = 1; j <= i; j++) {
            start = 1 - start
            result += start + " "
        }
        result += '\n'
    }
    return result
}

console.log(pattern11(5))