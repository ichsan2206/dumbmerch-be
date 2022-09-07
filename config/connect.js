const Sequelize = require("sequelize");
const sequelize = new Sequelize ("railway","root", "gwjDvPCDtK2NdhcSYpnO",{
    host:"containers-us-west-75.railway.app",
    port : 5889,
    dialect: "mysql"
});


module.exports = sequelize;