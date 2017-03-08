const config = {
  //
  // You can get this information from console.firebase.google.com
  //
  get apiKey() { throw `Firebase config required in firebase.js. Get it from https://console.firebase.google.com.` },
  authDomain: null,
  databaseURL: null,
  storageBucket: null,
  messagingSenderId: null,
}

module.exports = require('firebase').initializeApp(config)