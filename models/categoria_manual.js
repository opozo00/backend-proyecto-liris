const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria_Manual = sequelize.define('Categoria_Manual', {
  id_categoria: {
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
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'categoria_manual',
  timestamps: false
});

module.exports = Categoria_Manual;





// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('categoria_manual', {
//     id_categoria: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true
//     },
//     nombre: {
//       type: DataTypes.STRING(100),
//       allowNull: false,
//       unique: "nombre"
//     },
//     descripcion: {
//       type: DataTypes.TEXT,
//       allowNull: true
//     }
//   }, {
//     sequelize,
//     tableName: 'categoria_manual',
//     timestamps: false,
//     indexes: [
//       {
//         name: "PRIMARY",
//         unique: true,
//         using: "BTREE",
//         fields: [
//           { name: "id_categoria" },
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
//     ]
//   });
// };
