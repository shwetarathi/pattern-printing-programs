/* -- pattern 3 - N-Triangles

1
12
123
1234
12345

*/

function pattern3(n) {
    let result = ''
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            result += j + " "
        }
        result += "\n"
    }
    return result
}
console.log(pattern3(5))