const app = require('./src/app')

app.listen(
    process.env.SERVER_PORT,
    console.log("Service running on port: ",process.env.SERVER_PORT)
)