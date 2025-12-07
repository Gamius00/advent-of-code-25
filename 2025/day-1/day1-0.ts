const text = await Deno.readTextFile("2025/day-1/input.txt");
const array = text.toString().split((/\s+/))
let count = 50
let password = 0

// Rotation of the safe
const rotate = (direction, drehung) => {
    if (direction === "R") {
        const test = (count % 100) + Number(drehung)
        if (test === 100) {
            count = 0
        }
        count = test % 100

        if (count === 0) {
            password = password + 1
        }
    }

    else {
        const test = drehung % 100
        count = ((100 - test) + count) % 100

        if (count === 0) {
            password = password + 1
        }
    }
}

array.map((item) => {
    const itemparts = item.split("")
    rotate(itemparts[0], itemparts.slice(1).join(""))
})

console.log(password)