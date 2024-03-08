/* Pattern 9
         *
        ***
       *****
      *******
     *********
     *********
      *******
       *****
        ***
         *
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

function pattern9(n) {
    let result = "";
    result += pattern7(n)
    result += pattern8(n)
    return result
}

console.log(pattern9(5))