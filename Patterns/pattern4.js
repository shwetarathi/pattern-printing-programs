/* -- pattern 4 - Triangle

1
22
333
4444
55555

*/

function pattern4(n) {
    let result = ""
    for (i = 1; i <= n; i++) {
        for (j = 0; j < i; j++) {
            result += i
        }
        result += '\n'
    }
    return result
}

console.log(pattern4(5))