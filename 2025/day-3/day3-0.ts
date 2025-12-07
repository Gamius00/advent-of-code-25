let count = 0
let batteryArray = []
let batteryEndCount = 0
const text = await Deno.readTextFile("2025/day-3/input.txt");
const array = text.split(/\s+/)

// The calculate func for the Battery
const calculate = () => {
    let firstBiggestNumber = { number: 0, index: 0 }
    let secondBiggestNumber = 0
    let gesamt = {result1: 0 , result2: 0}

    for (let step = 0; step < batteryArray.length; step++) {
        if (firstBiggestNumber.number < batteryArray[step]) {
                firstBiggestNumber = { number: batteryArray[step], index: step }
        }
    }

    for (let step = 0; step < firstBiggestNumber.index; step++) {
        if (secondBiggestNumber < batteryArray[step]) {
            secondBiggestNumber = batteryArray[step]
            gesamt.result1 = Number(secondBiggestNumber.toString() + firstBiggestNumber.number.toString())
        }
    }

    secondBiggestNumber = 0

    for (let step = firstBiggestNumber.index + 1; step + 1 > firstBiggestNumber.index && step < batteryArray.length; step++) {
        if (secondBiggestNumber < batteryArray[step]) {
            secondBiggestNumber = batteryArray[step]
            gesamt.result2 = Number(firstBiggestNumber.number.toString() + secondBiggestNumber.toString())
        }
    }

    if (gesamt.result1 > gesamt.result2) {
        batteryEndCount = batteryEndCount + gesamt.result1
    }

    else {
        batteryEndCount = batteryEndCount + gesamt.result2
    }

    console.log(batteryArray, gesamt)

    batteryArray = []
}

// The extract function from the input string
array.map((item) => {
    batteryArray = item.split("")
    console.log("Batterie Array: ", batteryArray)
    calculate()
})

console.log(batteryEndCount)