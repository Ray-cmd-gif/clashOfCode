var x = 0
var y = 0
const n = parseInt(readline());
var inputs = readline().split(' ');
for (let i = 0; i < n; i++) {
    switch (inputs[i]) {
        case 'B':
            y-=1
            break;
        case 'F':
            y+=1
            break;
        case 'L':
            x+=1
            break
        default:
            x-=1
    }
}
console.log(Math.sqrt(x*x+y*y))
