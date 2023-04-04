let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function verifClient(name) {
    if (typeof name === 'string' && clientesTrybeBank.includes(name)) {
        return true;
    } else {
        console.log("Cliente inexistente!");
        return false;
    }
}

function removeClient(name) {
    if (verifClient(name)) {
        let searchName = clientesTrybeBank.indexOf(name);
        clientesTrybeBank.splice(searchName, 1);
    }
    return clientesTrybeBank;
}

removeClient("Fernando");
console.log(clientesTrybeBank);
