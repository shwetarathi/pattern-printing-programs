/* Pattern 12

1      1
12    21
123  321
12344321

*/


function pattern12(n) {
    let result = ""
    let space = 2 * (n - 1)
    for (i = 1; i <= n; i++) {
        //numbers
        for (j = 1; j <= i; j++) {
            result += j
        }
        //space
        for (j = 1; j <= space; j++) {
            result += ' '
        }
        //numbers
        for (j = i; j >= 1; j--) {
            result += j
        }
        result += "\n"
        space -= 2
    }
    return result
}
console.log(pattern12(8))