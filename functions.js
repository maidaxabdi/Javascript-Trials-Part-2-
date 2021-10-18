'use strict';
// 1. isHometown
const isHometown = town => {
    return town === 'San Francisco';
  };

// console.log(isHometown('Houston'));
// console.log(isHometown('San Francisco'));
  

// Define your function here

// 2. getFullName
const getFullName = (firstname,lastname) =>{
     return `${firstname} ${lastname}`;
}
// console.log(getFullName('Kathy', 'Shoe'));

// Define your function here

// 3. calculateTotal

const calculateTotal = (baseprice,state,tax=0.05) =>{
    const subtotal = baseprice * (1+tax);
    let fee = 0;
    if (state === 'CA'){
        
        fee = 0.03 * subtotal
    }
    else if (state == 'PA') {
        fee = 2
    }
    else if (state == 'MA') {
        if (base_price <= 100) {
            fee = 1
        }
        else
            fee = 3
    }

    return subtotal + fee

}

// Define your function here
