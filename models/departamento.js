const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Departamento = sequelize.define('Departamento', {
  id_departamento: {
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
  telefono: {
    type: DataTypes.STRING,
    allowNull: true
  },
  linea_negocio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  id_gerente: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'empleado',
      key: 'id_empleado'
    }
  }
}, {
  tableName: 'departamento',
  timestamps: false
});

module.exports = Departamento;










// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('departamento', {
//     id_departamento: {
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
//     telefono: {
//       type: DataTypes.STRING(15),
//       allowNull: true
//     },
//     linea_negocio: {
//       type: DataTypes.STRING(255),
//       allowNull: true
//     },
//     ubicacion: {
//       type: DataTypes.STRING(255),
//       allowNull: true
//     },
//     id_gerente: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//       references: {
//         model: 'empleado',
//         key: 'id_empleado'
//       }
//     }
//   }, {
//     sequelize,
//     tableName: 'departamento',
//     timestamps: false,
//     indexes: [
//       {
//         name: "PRIMARY",
//         unique: true,
//         using: "BTREE",
//         fields: [
//           { name: "id_departamento" },
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
//         name: "fk_departamento_gerente",
//         using: "BTREE",
//         fields: [
//           { name: "id_gerente" },
//         ]
//       },
//     ]
//   });
// };



