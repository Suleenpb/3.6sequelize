const {sequelize, testConnection, Vehicle, Driver} = require("./models"); //this index.js is the default entry point

testConnection();

(async () => {
    const results = await Vehicle.findAll({ include: Driver });
    console.log(JSON.stringify(results));
})();