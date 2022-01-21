const mongoose = require('mongoose');

// TODO: Database Connection to MongoDB.
const DB_URI = 'mongodb+srv://admin:1q2w3e4r5t6y@cluster0.4k4i8.mongodb.net/my_app_node';

module.exports = () => {

    const connect = () => {
        mongoose.connect(
            DB_URI, {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if (err) {
                    console.log('DB: ERROR!!', err);
                } else {
                    console.log('DB Successful Connection');
                }
            }
        )
    }
    connect();
}