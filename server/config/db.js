const Sequelize = require('sequelize');

// module.exports = new Sequelize("oidev", "oidev", "Tf2sk~sK7!8A", {
//   host: 'den1.mysql2.gear.host',
//   dialect: "mysql",
//   operatorsAliases: false,

//   pool: {
//     max: 200,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });

module.exports =  new Sequelize("OI_SagelySown", "webapi", "P=#,r=@q*pi)W4KZ,+&M", {
  host: '192.168.254.122',
  dialect: "mysql",
  operatorsAliases:false,

  pool: {
    max: 200,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});