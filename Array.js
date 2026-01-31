const number = [10, 20, 30, 40, 50]
for (const n of number) {
    console.log(n)
}
console.log("\n\n")
for (const n in number) {
    console.log(number[n])
}
console.log("\n\n")
for (let i = 0; i < number.length; i++) {
    console.log(number[i])
}