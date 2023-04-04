let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
//   Complete a função customerInfo() para que seu retorno seja similar a 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.

// De olho na dica 👀: Note que o parâmetro da função já está sendo passado na chamada da função.

// Complete a função orderModifier() para que seu retorno seja similar a 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
// Modifique o nome da pessoa compradora para Luiz Silva;
// Modifique o valor total da compra para R$ 50,00.




function customerInfo(order) {
      let fullNameClient  = order.name;
      let fullNameClientDelivery = order.order.delivery.deliveryPerson;
      let tell = order.phoneNumber;
      let street = order.address.street; 
      let num = order.address.number; 
      let ap = order.address.apartment
    return `Olá, ${fullNameClientDelivery}, entrega para: ${fullNameClient}, Telefone: ${tell}, R. ${street}, Nº: ${num}, AP: ${ap}'.`

}
console.log(customerInfo(order));
  

  function orderModifier(order) {
    let newBuyer = order.name = 'Luiz Silva';
    let newTotal = order.payment.total = '50';
    let pizzas = Object.keys(order.order.pizza);
    let drinks = order.order.drinks.coke.type;
  
    return ('Olá ' + newBuyer + ', o total do seu pedido de ' + pizzas[0] + ', ' + pizzas[1] + ' e ' + drinks + ' é R$ ' + newTotal + ',00.'); 
  }
  
  console.log(orderModifier(order));