const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("lesson_db", "postgres", "Lukewayne1223$", {
    host: "localhost",
    dialect: "postgres",
});

// Test connection function
async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      return true;
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      return false;
    }
  }

const Vehicle = require('./vehicle.model')(sequelize);
const Driver = require("./driver.model")(sequelize);

Vehicle.belongsTo(Driver, {
  foreignKey: "driver_id"
})

module.exports = {
    sequelize,
    testConnection,
    Vehicle,
    Driver
};