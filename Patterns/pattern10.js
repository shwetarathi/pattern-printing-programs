/* Pattern 10
*
**
***
****
*****
****
***
**
*

*/

function pattern1(n) {
    let result = ""
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            result += '*'
        }
        result += "\n"
    }
    return result
}

function pattern5(n) {
    let result = ""
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n - i + 1; j++) {
            result += '*'
        }
        result += "\n"
    }
    return result
}

function pattern10(n) {
    let result = ""
    result += pattern1(n)
    result += pattern5(n)
    return result
}

console.log(pattern10(5))