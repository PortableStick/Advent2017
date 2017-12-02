// input - tsv rows
// output - computed checksum
let input = ''
process.stdin.setEncoding('utf8')
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk !== null) {
        input += chunk;
    }
})
process.stdin.on('end', () => console.log(checksum(input)))
function checksum(data) {
    return data.split('\n')
        .reduce((prev, curr) => {
            let minmax = curr.split('\t')
                .reduce((p, c) => {
                    p.min = Math.min(+c, p.min)
                    p.max = Math.max(+c, p.max)
                    return p
                }, {min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER})
            prev += minmax.max - minmax.min
            return prev
        }, 0)
}

