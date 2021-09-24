const { readFile, writeFile, unlink } = require('fs');

// const first= readFileSync('./app/result.txt','utf8')
// const second= readFileSync('./app/yo.txt','utf8')

console.log("start")


readFile('./app/yo.txt', 'utf8', (err, result) => {

    if (err) {
        console.log(err)
        return
    }
    const second = result;
    readFile('./app/yo.txt', 'utf8', (err, result) => {


        if (err) {
            console.log(err)
            return
        }
        const first = result;
        writeFile('./okay.js', `here is the result ${first}, ${second}`,
        (err, result) => {
            if(err) {
                console.log(err)
                return;
                
            }
            console.log("done with the task")
 






})
    })
})

    console.log("startingnext task")