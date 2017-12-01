// input - array of numbers
// output - computed sum

let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk !== null) {
        input += chunk;
    }
});

process.stdin.on('end', () => {
    console.log(inverseCaptcha(input));
});

function inverseCaptcha(input) {
    return doCountWork(input, 1);
}

function inverseCaptchaHalfRing(input) {
    let distance = Math.floor(input.trim().length / 2);
    return doCountWork(input, distance);
}

function doCountWork(input, distance) {
    let total = 0;
    let arr = input.trim().split('');

    for(let i = 0, len = arr.length; i < len; i++) {
        if(arr[i] === arr[(i + distance) % len]) {
            total += +arr[i];
        }
    }
    return total;
}
