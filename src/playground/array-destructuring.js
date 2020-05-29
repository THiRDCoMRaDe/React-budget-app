const address = ['1299 s Juniper Street', 'philadelphia', 'pennsylvania', '15124'];
const address2 = [];

console.log(`You are in ${address[1]} ${address[2]}`);
//const [street, city, state, zip] = address;
//equal to
const [ , city, state] = address;
console.log(`You are in ${city} ${state}`);

const [ , city2 = 'tehran', state2 = 'iran'] = address2;
console.log(`You are in ${city2} ${state2}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
// print this line : A medium Coffee (hot) costs $2.50
const [product, smallPrice, mediumPrice, largePrice] = item;
console.log(`A medium ${product} costs ${mediumPrice}`);

const [product2, , mediumPrice2 ] = item;
console.log(`A medium ${product2} costs ${mediumPrice2}`);