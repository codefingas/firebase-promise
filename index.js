let {initializeApp, database} = require('firebase'),
    axios = require('axios');

initializeApp({//hooking up the query parameters
    databaseURL: "https://fir-promise-942de.firebaseio.com",
    serviceAccount :'firebase-adminsdk-qp69j@fir-promise-942de.iam.gserviceaccount.com'
});



let swapiRef = database().ref('swapi/people'),
    keysLink = swapiRef.toString() + 'json?shallow=true';

    console.log('keyslink', keysLink);

    axios.get(keysLink)
        .then(function(res) {
            console.log(res.data);
        });

