let input = ''
process.stdin.setEncoding('utf8')
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if(chunk !== null) {
        input += chunk;
    }
})
process.stdin.on('end', () => console.log(checksum(input)))

function checksum(input) {
    return input.trim().split('\n')
        .reduce((prev, curr) => {
            const row = curr.split('\t')
            for(let i = 0, len = row.length; i < len; i++) {
                for(let j = i + 1; j < len; j++) {
                    if(row[i] % row[j] === 0) {
                        prev += row[i] / row[j];
                        return prev
                    } else if(row[j] % row[i] === 0) {
                        prev += row[j] / row[i]
                        return prev
                    }
                }
            }
            return prev
        }, 0)
}
