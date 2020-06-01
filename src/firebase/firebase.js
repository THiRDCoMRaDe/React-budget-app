import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDL161Juc8ybjmnnU20RVMIQe-I8lQZXXQ",
    authDomain: "expensify-eea45.firebaseapp.com",
    databaseURL: "https://expensify-eea45.firebaseio.com",
    projectId: "expensify-eea45",
    storageBucket: "expensify-eea45.appspot.com",
    messagingSenderId: "1069088094759",
    appId: "1:1069088094759:web:ee331817e3c8fde9396c02"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
database.ref().set({
    name: 'Mansour Eslamitabar',
    age: 30,
    isSingle: false,
    location: {
        city: 'Tehran',
        country: 'Iran'
    }
});
//database.ref().set('this is my data');
/*
database.ref().set({
    age: 31,
});*/
database.ref('age').set(31);
database.ref('location/country').set('IR');
database.ref('attributes').set({
    height: 170,
    weight: 70
});
