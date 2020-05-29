const person = {
    name: 'Mansour',
    age: 30,
    location: {
        city: 'Tehran',
        temp: 92
    }
};

/// const name = person.name;
/// const age = person.age;

const { name, age} = person;
console.log(`${name} is ${age}`);

if (person.location.city && person.location.temp) {
    console.log(`its a ${person.location.temp} in ${person.location.city}.`);
}

const { city, temp } = person.location;
if (city && temp) {
    console.log(`its a ${temp} in ${city}.`);
}

const { city: City, temp: Temperatur } = person.location;
if (city && Temperatur) {
    console.log(`its a ${Temperatur} in ${City}.`);
}

const person2 = {
    //age: 30,
    location: {
        city: 'Tehran',
        temp: 92
    }
};

const { name2 = 'Anonymous', age: age2 = 32 } = person2;
console.log(`${name2} is ${age2}`);

const book = {
    title: 'Ego',
    author: 'Ryan',
    publisher: {
        name: 'NAS'
    }
};
const {name: publisherName = 'Self Published'} = book.publisher;
console.log(publisherName);