/* 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro. */

let ang1 = 1;
let ang2 = 3;
let ang3 = 10; 
let res;

if ( 0 < ang1 <= 60 && ang2 > 0 && ang2 <= 60 && ang3 > 0 && ang3 <= 60){
  res = "Os Ângulos informados são números que representam triângulos"
} else{
    res = "Erro, os números informados não representam os ângulos de um triângulo"

}

console.log(res)