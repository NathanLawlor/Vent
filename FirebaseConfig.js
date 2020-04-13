import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyCKnYwsxkHhyTNoUHX4WzECDx6nNWZ5xkk",
    authDomain: "rnventapp.firebaseapp.com",
    databaseURL: "https://rnventapp.firebaseio.com",
//   projectId: 'rnfirebase-XXXX',
//   storageBucket: 'rnfirebase-XXXX.appspot.com',
//   messagingSenderId: 'XXXXXXX'
};
let app = Firebase.initializeApp(config);
export const db = app.database();