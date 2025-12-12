let count = 0
const input = await Deno.readTextFile("day-5/input.txt")
const splitInput = input.toString().split(/\s+/);
const ingredientIDRange  = []
const ingredientIDs  = []



splitInput.map((value) => {
    if (value.split("").find(item => item === "-")) {
        ingredientIDRange.push(value)
    }

    else {
        ingredientIDs.push(value)
    }
})

ingredientIDRange.map((range) => {
    const rangeArray = range.split("-")

    for (let step = 0; step < ingredientIDs.length; step++) {
        if (Number(rangeArray[0]) <= Number(ingredientIDs[step]) && Number(ingredientIDs[step]) <= Number(rangeArray[1])) {
            delete ingredientIDs[step]
            count = count + 1
        }
    }
})

console.log(count)