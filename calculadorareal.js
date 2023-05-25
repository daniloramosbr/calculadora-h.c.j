const firstTxt = document.getElementById('txtfirst')
const secondTxt = document.getElementById('txtsecond')
const numberbuttons = document.getElementsByClassName('txtnumber')
const numbersimbols = document.getElementsByClassName('txtsimbol')
const alldel = document.getElementsByClassName('txtalldel')
const del = document.getElementsByClassName('txtdel')
const equal = document.getElementsByClassName('txtequal')

class Calculator {
    constructor(firstTxt, secondTxt) {
        this.firstTxt = firstTxt
        this.secondTxt = secondTxt
        this.allclear()
    }

    appendSimbols(simbol) {
    if (this.first == '') return 
    if (this.second != '') {
        this.calc()
    }
    if (this.second == '') {
     this.second = this.first
    }
 
    this.first = `${this.first}${simbol}`
    this.simbol = simbol
    this.numbers = ''
    }
    
    appendNumber(number) {
     this.first = `${this.first}${number}`
    this.numbers += number

    }
    calc() {
        let resultado

        const secondfloat = parseFloat(this.second)
        const numberfloat = parseFloat(this.numbers)

        if(isNaN(numberfloat) || (isNaN(secondfloat))) return 

       switch (this.simbol) {
        case '+':
            resultado = secondfloat + numberfloat
            break;
        case '-':
            resultado = secondfloat - numberfloat
            break;
        case '÷':
            resultado = secondfloat / numberfloat
            break;
        case 'x':
            resultado = secondfloat * numberfloat
            break;
        default:
            return
       }
       
       this.second = resultado
       this.simbol = undefined
    }


    delete() {
    this.first = this.first.slice(0, -1)
    this.second = ''
    this.numbers = ''
    
    }

    allclear() {
        this.numbers = ''
        this.first = ''
        this.second = ''
        this.operation = undefined
    }

    UpdateDisplay() {
        this.firstTxt.innerText = this.first
        this.secondTxt.innerText = this.second
    }
    
}
const ActiveCalculator = new Calculator(firstTxt, secondTxt)

for (let equals of equal ) {
    equals.addEventListener('click', () => {
    ActiveCalculator.calc()
    ActiveCalculator.UpdateDisplay()
    })
}

for (let numberbutton of numberbuttons) {
    numberbutton.addEventListener('click', () => {
    ActiveCalculator.appendNumber(numberbutton.innerText)
    ActiveCalculator.UpdateDisplay()
    })
}

for(let numbersimbol of numbersimbols) {
    numbersimbol.addEventListener('click', () => {
    ActiveCalculator.appendSimbols(numbersimbol.innerText)
    ActiveCalculator.UpdateDisplay()
    })
}

for(let alldels of alldel) {
    alldels.addEventListener('click', () => {
    ActiveCalculator.allclear()
    ActiveCalculator.UpdateDisplay()
})}

for (let dels of del) {
dels.addEventListener('click', () => {
    ActiveCalculator.delete()
    ActiveCalculator.UpdateDisplay()
})}