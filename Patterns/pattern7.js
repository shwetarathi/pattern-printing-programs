/* Pattern 7
         *
        ***
       *****
      *******
     *********
*/

function pattern7(n) {
    let result = ""
    for (i = 1; i <= n; i++) {
        //space
        for (j = 1; j <= n - i; j++) {
            result += " "
        }
        //stars
        for (j = 1; j <= i * 2 - 1; j++) {
            result += '*'
        }
        // space
        for (j = 1; j <= n - i; j++) {
            result += " "
        }
        result += '\n'
    }
    return result
}

console.log(pattern7(5))