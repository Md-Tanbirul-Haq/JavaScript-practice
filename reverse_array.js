const number = [10, 20, 30, 40, 50]
// reverse_array = number.reverse()
// console.log(number)
// console.log(reverse_array)
// reverse_array = []

// console.log(typeof (reverse_array))
reverse_array = []

for (const n of number) {
    reverse_array.unshift(n)
}
console.log(reverse_array)




