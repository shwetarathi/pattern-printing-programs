/* Pattern 8
     *********
      *******
       *****
        ***
         *
*/

function pattern8(n) {
    let result = ""
    for (i = 1; i <= n; i++) {
        //space
        for (j = 1; j <= i; j++) {
            result += " "
        }
        //stars
        for (j = 1; j <= (n - i) * 2 + 1; j++) {
            result += '*'
        }
        //space
        for (j = 1; j <= i; j++) {
            result += " "
        }
        result += '\n'
    }
    return result
}

console.log(pattern8(30))