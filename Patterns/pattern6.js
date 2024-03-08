/*
12345
1234
123
12
1
*/

function pattern6(n) {
    let result = ""
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= (n - i + 1); j++) {
            result += j
        }
        result += '\n'
    }
    return result
}

console.log(pattern6(5))