/* Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados. */

const num2 = 2; 
const num7 = 7;
const num9 = 9; 

if (num2 > num7 && num2 >num9){
    console.log(`O número ${num2} é maior que todos os outros.`)
} else if (num7 > num9){
    console.log(`O número ${num7} é maior que todos os outros.`)
} else{
    console.log(`O número ${num9} é maior que todos os outros.`)
}