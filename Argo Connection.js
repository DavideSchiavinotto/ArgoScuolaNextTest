const ArgoAPI = require('argoapi')

ArgoAPI.login('SS16589','schiavinottodavide','passwordpassword)', 'dadonerd')

    .then(message => {

    console.log("Funziona");//successfull message

    })

    .catch(err => {

       console.log("Non funziona");//error message

    })
