import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {firebase, googleAuthProvider, database as default};
/*
// child_remove
database.ref('expenses')
    .on('child_removed', (snapshot) => {
        console.log(snapshot.key ,snapshot.val());
    });

// child_changed
database.ref('expenses')
    .on('child_changed', (snapshot) => {
        console.log(snapshot.key ,snapshot.val());
    });

// child_added
database.ref('expenses')
    .on('child_added', (snapshot) => {
        console.log(snapshot.key ,snapshot.val());
    });*/
// =========================
// start testing
// =========================
/*database.ref().set({
    name: 'Mansour Eslamitabar',
    age: 30,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'GOOGLE'
    },
    location: {
        city: 'Tehran',
        country: 'Iran'
    }
}).then(() => {
    console.log('data is saved')
}).catch((error)=>{
    console.log(error)
});*/

/*
database.ref('isSingle')
    .remove()
    .then(()=> {
        console.log('removed');
    })
    .catch((e) => {
        console.log('not removed',e);
    });*/
// database.ref('isSingle').set(null);


/*
database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        console.log(snapshot.val());
    })
    .catch((e) => {
        console.log(e);
    });*/

/*
const onValueChange = database.ref()
    .on('value',(snapshot) => {
        console.log(snapshot.val());
    },(e) => {
        console.log(e);
    });

database.ref().update({
    stressLevel: 9,
    'job/company': 'amazon',
    'location/city': 'Seattle'
});

database.ref().off('value',onValueChange);

database.ref().update({
    stressLevel: 19,
    'job/company': 'amazon',
    'location/city': 'Seattle'
});


// challenge
database.ref()
    .on('value',(snapshot) => {
        console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`)
});
database.ref().update({
    'job/company': 'PirateBay',
});*/
// =========================
// end testing
// =========================

// =========================
// start array
// =========================

/*database.ref('notes').push({
    title: 'course topic',
    body: 'react native'
});*/

/*const note = [
    {
        id: 12,
        title: 'first note',
        body: 'this is my note'
    },{
        id: 13,
        title: 'second note',
        body: 'this is my note'
    }
];
database.ref('notes').set(note);*/
/*database.ref('notes/-M8pj6VjRrpXryXzVmkZ').update({
    body: 'test'
});
database.ref('notes/-M8pj6VjRrpXryXzVmkZ').remove();*/

// challenge
/*database.ref('expenses').push({
    description: 'buy a house',
    note: '',
    amount: 2000,
    createdAt: 1
});*/
/*database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        let expenses = [];
        snapshot.forEach((childSnapshot)=>{
           expenses.push({
               id: childSnapshot.key,
               ...childSnapshot.val()
           })
        });
        console.log(expenses);
    });*/
/*database.ref('expenses')
    .on('value', (snapshot) => {
        let expenses = [];
        snapshot.forEach((childSnapshot)=>{
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        });
        console.log(expenses);
    });*/
// =========================
// end array
// =========================