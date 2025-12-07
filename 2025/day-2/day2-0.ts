const text = await Deno.readTextFile("2025/day-2/input.txt");
const array = text.toString().split(",")
let invalidIds = 0

array.map((item) => {
    const startEnd = item.split("-").map(number => {return number})

    for (let step = Number(startEnd[0]); step <= Number(startEnd[1]); step++) {
        if (step.toString().split("").length % 2 === 0) {
            const test = step.toString().split("").length / 2
            const part1 = Number(step.toString().slice(0, test))
            const part2 = Number(step.toString().slice(test))

            if (part1 === part2) {
                invalidIds = invalidIds + Number(part1.toString() + part2.toString())
            }
        }
    }
})

console.log(invalidIds)