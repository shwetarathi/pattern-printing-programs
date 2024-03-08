/* - Pattern 1 - N-Forest

****
****
****
****

*/

function pattern1(n) {
    let result = ''
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            result += '*'
        }
        result += '\n'
    }
    return result
}

console.log(pattern1(4))