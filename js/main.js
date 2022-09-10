import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'

const form = document.getElementById("datecalc")

form.onsubmit = (event) => {
    event.preventDefault();
    // console.log('form', event.target)
    const formData = new FormData(event.target)

    const firstDate = formData.get('firstDate')
    const secondDate = formData.get('secondDate')

    if (!firstDate || !secondDate) {
        printError('Oooops -> put date')
    } else {
        const dateDiff = getDateDiff(firstDate, secondDate)
        printResult(dateDiff)
    }
}
