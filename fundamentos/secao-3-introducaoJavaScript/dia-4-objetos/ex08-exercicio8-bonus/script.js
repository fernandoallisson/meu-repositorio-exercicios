let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};
// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
function addLesson (object, key, value){
   return object.key = value
}

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKeys (object){
    return Object.keys(object)
}
// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

function sizeObject (object) {
    return object.length
}
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function valuesObject (object) {
    return Object.values(object)
}

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

function allLessons (object){
    return Object.assign({}, {
        lesson1: lesson1, 
        lesson2: lesson2, 
        lesson3: lesson3,
    });
}

// Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalEstudantes = (object) => {
    let total = 0;
    let key = Object.keys(object)
    for (let numero in key) {
        total += object[key[numero]].numeroEstudantes;
    }
    return total
}

// Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
//  Output: 'Matemática'


const getValueByNumber = (lesson, num) => {
    return Object.values(lesson)[num];
}
