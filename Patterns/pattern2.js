/* -- pattern 2 : N/2-Forest

*
**
***
****
*****

*/

function pattern2(n) {
    let result = ''
    for (i = 0; i < n; i++) {
        for (j = 0; j <= i; j++) {
            result += '*'
        }
        result += '\n'
    }
    return result
}
console.log(pattern2(5))