const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cargo = sequelize.define('Cargo', {
  id_cargo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nivel: {
    type: DataTypes.ENUM('Junior','Senior','Director'),
    allowNull: false
  },
  id_departamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'departamento',
      key: 'id_departamento'
    }
  }
}, {
  tableName: 'cargo',
  timestamps: false
});

module.exports = Cargo;









// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('cargo', {
    
//   }, {
//     sequelize,
//     tableName: 'cargo',
//     timestamps: false,
//     indexes: [
//       {
//         name: "PRIMARY",
//         unique: true,
//         using: "BTREE",
//         fields: [
//           { name: "id_cargo" },
//         ]
//       },
//       {
//         name: "nombre",
//         unique: true,
//         using: "BTREE",
//         fields: [
//           { name: "nombre" },
//         ]
//       },
//       {
//         name: "id_departamento",
//         using: "BTREE",
//         fields: [
//           { name: "id_departamento" },
//         ]
//       },
//     ]
//   });
// };


