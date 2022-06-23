module.exports = function toReadable(number) {
    const [units, dozens, hundreds] = number.toString().split('').reverse();
    if (number == 0) {
        return 'zero'
    }

    console.log(units, dozens, hundreds);

    const unitsArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    const universal = { 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen' };

    const dozensArray = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let result = '';


    if (hundreds) {
        result += `${unitsArray[hundreds]} hundred `
    }

    if (dozens) {

        if ((dozens + units) in universal) {
            result += universal[dozens + units] + ' '

        } else {
            result += dozensArray[dozens - 1] ? (dozensArray[dozens - 1] + ' ') : ''
        }
    }

    if (!((dozens + units) in universal) && units != 0) {
        result += `${unitsArray[units]}`

    } else if (!hundreds && !dozens && number.lenght === 1) {
        result += 'zero'
    }








    return result.trim()

}