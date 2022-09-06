'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''
  movements.map((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const amps = mov < 0 ? '&uarr;' : '&darr;'
    const html = `
    <div class="movements__row"> <p class="${type}">${i + 1}${amps} </p> 
    <div class="movements__type movements__type--${type}"> ${type}</div>
    <div class="movements__date"></div>
    <div class="movements__value">${mov}</div>
  </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });

}

// challenge 1

// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 8]
// julia.shift()
// julia.splice(-2)

// const checkDogs = (jD, kD) =>{
//   const type = jD || kD >=   3 ? 'adult' : 'puppy';
//   julia.map((jD, i) =>{
//     console.log(`JUlIA's dog number ${i + 1} is a ${type} and is ${jD} years old`);
//   })
//   kate.forEach((kD, i) =>{
//     console.log(`KATE's dog number ${i + 1} is a ${type} and is ${kD} years old`);
//   })
// }
// checkDogs(julia, kate)

// displayMovements(account1.movements)
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;
const movement = movements.map((mov)=>{
  return mov * euroToUsd
})
console.log(movement);

/////////////////////////////////////////////////