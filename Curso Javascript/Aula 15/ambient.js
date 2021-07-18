var num = [4,6,9]
num[3] = 6
num.push(7)
num.length 
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]} `)

var pos = num.indexOf(4)
console.log(`O valor 4 está na posição: ${pos}`)