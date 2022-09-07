module.exports = {
  development: {
    username: "root",
    password: "gwjDvPCDtK2NdhcSYpnO",
    port: 5889,
    database: "railway",
    host: "containers-us-west-75.railway.app",
    dialect: "mysql"
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'mysql',
  },
};