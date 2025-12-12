let count = 0
let tempCount = 0
const text = await Deno.readTextFile("day-4/input.txt");
const array = text.toString().split(/\s+/)

array.map((entry, entryIndex) => {
    const splitEntry = entry.split("")

    splitEntry.map((item, index) => {

        let firstEntry = array[entryIndex - 1]
        let lastEntry = array[entryIndex + 1]

        const firstSplitEntry = firstEntry ? firstEntry.split("") : undefined
        const lastSplitEntry = lastEntry ? lastEntry.split("") : undefined

        if (item === "@") {
            if (splitEntry[index - 1] === "@") {
                tempCount = tempCount + 1
            }

            if (splitEntry[index + 1] === "@") {
                tempCount = tempCount + 1
            }

            if (lastEntry) {
                if (lastSplitEntry[index] === "@") {
                    tempCount = tempCount + 1
                }

                if (lastSplitEntry[index + 1] === "@") {
                    tempCount = tempCount + 1
                }

                if (lastSplitEntry[index - 1] === "@") {
                    tempCount = tempCount + 1
                }
            }

            if (firstEntry) {
                if (firstSplitEntry[index] === "@") {
                    tempCount = tempCount + 1
                }

                if (firstSplitEntry[index + 1] === "@") {
                    tempCount = tempCount + 1
                }

                if (firstSplitEntry[index - 1] === "@") {
                    tempCount = tempCount + 1
                }
            }

            if (tempCount < 4) {
                count = count + 1
            }
        }

        tempCount = 0
    })
})

console.log(count)