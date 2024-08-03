require('dotenv').config()

const app = require('./server/app')
const { APP_PORT } = process.env

app
    .listen(APP_PORT, () => {
        console.info(`Connexion au serveur sur le port ${APP_PORT}.`)
    })
    .on("error", (error) => {
        console.error('Erreur de connexion au serveur.', error.message)
    })