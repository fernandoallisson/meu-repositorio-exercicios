/* Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo. */


let number = 10; 

if (number<0){
    console.log(`O número ${number} é negativo`)
} else if (number == 0){
    console.log(`O número ${number} é zero`)
} else{
    console.log(`O número ${number} é positivo`)
}