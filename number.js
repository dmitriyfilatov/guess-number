#! /usr/bin/env node
const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const randNumber = Math.floor(Math.random() * (101))

let count = 0

question()
function question() {
    const msg = !count ? `Загадано число от 0 до ${101}. Попробуйте угадать: ` : 'Повторите попытку: '
    rl.question(msg, (answer) => {
        const answerNumber = parseInt(answer, 10)
        count++
        if (typeof answerNumber === 'NaN') {
            console.log('попробуйте загадать число!')
            question()
        } else if (answerNumber < randNumber) {
            console.log('больше!')
            question()
        } else if (answerNumber > randNumber) {
            console.log('меньше!')
            question()
        } else {
            console.log(`Отгадано число: ${randNumber}`)
            rl.close()
        }
    })
}

