const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Manual = sequelize.define('Manual', {
  id_manual: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  archivo_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_actualizacion: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  id_departamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'departamento',
      key: 'id_departamento'
    }
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'categoria_manual',
      key: 'id_categoria'
    }
  }
}, {
  tableName: 'manual',
  timestamps: false
});

module.exports = Manual;

// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('manual', {
//     id_manual: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true
//     },
//     titulo: {
//       type: DataTypes.STRING(255),
//       allowNull: false
//     },
//     descripcion: {
//       type: DataTypes.TEXT,
//       allowNull: true
//     },
//     archivo_url: {
//       type: DataTypes.STRING(500),
//       allowNull: false
//     },
//     fecha_actualizacion: {
//       type: DataTypes.DATEONLY,
//       allowNull: false
//     },
//     id_departamento: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'departamento',
//         key: 'id_departamento'
//       }
//     },
//     id_categoria: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'categoria_manual',
//         key: 'id_categoria'
//       }
//     }
//   }, {
//     sequelize,
//     tableName: 'manual',
//     hasTrigger: true,
//     timestamps: false,
//     indexes: [
//       {
//         name: "PRIMARY",
//         unique: true,
//         using: "BTREE",
//         fields: [
//           { name: "id_manual" },
//         ]
//       },
//       {
//         name: "fk_manual_departamento",
//         using: "BTREE",
//         fields: [
//           { name: "id_departamento" },
//         ]
//       },
//       {
//         name: "id_categoria",
//         using: "BTREE",
//         fields: [
//           { name: "id_categoria" },
//         ]
//       },
//     ]
//   });
// };
