let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addClientName (name){
    if(typeof name == "string"){
        return clientesTrybeBank.push(name)
    } else {
        return console.log("Erro");
    }
}

console.log(addClientName("fernando"));
console.log(clientesTrybeBank);