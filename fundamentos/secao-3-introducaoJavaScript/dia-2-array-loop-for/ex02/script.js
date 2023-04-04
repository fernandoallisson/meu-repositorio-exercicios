let numbers = [52, 92, 32, 192, 7012, 812, 1012, 212, 352, 272, -8852, 12, ];
let sum = 0;
for (let i = 0; i <= numbers.length -1; i += 1){
    sum += numbers[i]
    console.log(numbers[i])
}

let media = sum/(numbers.length);
console.log(`A Soma dos valores é: ${sum}`)
console.log(`A média dos valores é: ${media}`)

if(media > 20){
    console.log("Valor maior que 20.")
} else {
    console.log("Valor menor ou igual a 20.")
}
let maxValue = numbers[0]; 
for (let i2 = 0; i2 < numbers.length; i2 += 1){
    if (numbers[i2] > maxValue){
        maxValue = numbers[i2]
    } 
}
console.log(`O valor maior no array é ${maxValue}`)


let minValue = numbers[0]; 
for (let i4 = 0; i4 < numbers.length; i4 += 1){
    if (numbers[i4] < minValue){
        minValue = numbers[i4]
    } 
}
console.log(`O valor menor no array é ${minValue}`)



let numeroImpar = []; 
let numeroImparRes;
for ( let i5 = 0; i5 <= numbers.length ; i5 += 1){
    if (!(numbers[i5] % 2) == 0){
        numeroImpar.push(numbers[i5])
    } else {
        numeroImparRes = "Nenhum número ímpar encontrado!"
    }
}
 if (numeroImpar.length == 0){
    console.log(numeroImparRes)
 } else {
    console.log(`Existem ${numeroImpar.length}.`)
    console.log(`Os números ímpares são: ${numeroImpar}`)
 }


let novoArray = []
for(let i3 = 1; i3 <= 25; i3 += 1){
    novoArray.push(i3)
}
console.log(` O novo array é: ${novoArray}`)

for (let i6 = 0; i6 <= novoArray.length-1; i6 += 1){
    console.log(`${i6+1}º - ${novoArray[i6]}/2 = ${novoArray[i6]/2}`)
}


let fatoria10 = [1];
for (let i7 = 1; i7 <= 10; i7 += 1){
    fatoria10 *= [i7]
}
console.log(`O fatorial de 10 é ${fatoria10}`)


let word = 'tryber';

let invertWord = []

for (let i8 = word.length-1; i8 >= 0; i8 -= 1){
    invertWord.push(word[i8])
}

console.log(invertWord.join("")) // Join é para juntar as letras que estavam separadas. O que está entre parênteses é para colocar entre as letras, que no caso é "nada". 

let arrayProgram = ['java', 'javascript', 'python', 'html', 'css'];
let maxword =''
let minWord = arrayProgram[0]

for (let i9 = 0; i9 < arrayProgram.length; i9 += 1){
    let actualWord = arrayProgram[i9];

    if(actualWord.length > maxword.length){
        maxword = actualWord;
    }

    if (actualWord.length < minWord.length){
        minWord = actualWord
    }

}

console.log(`A palavra maior é: ${maxword}`)
console.log(`A palavra menor é: ${minWord}`)