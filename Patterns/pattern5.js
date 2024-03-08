/* -- pattern 5

*****
****
***
**
*

*/

function pattern5(n) {
    let result = ""
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= (n - i + 1); j++) {
            result += '*'
        }
        result += '\n'
    }
    return result
}

console.log(pattern5(5))