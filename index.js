var customerName = 'bob';

const leastFavoriteCustomer = 'ahmet';

let bestCustomer = 'not bob';

function upperCaseCustomerName (customerName) {
  return customerName.toUpperCase();
}

function setBestCustomer(bestCustomer ) {
  bestCustomer = 'not bob';
  return bestCustomer;
}

function overwriteBestCustomer(bestCustomer ) {
  bestCustomer = 'maybe bob';
  return bestCustomer;
}

function changeLeastFavoriteCustomer(leastFavoriteCustomer) {
  return 0;
}