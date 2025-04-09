const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EmpleadoManual = sequelize.define('EmpleadoManual', {
  id_empleado_manual: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_empleado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'empleado',
      key: 'id_empleado'
    }
  },
  id_manual: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'manual',
      key: 'id_manual'
    }
  },
  estado: {
    type: DataTypes.ENUM('Leído', 'No leído'),
    allowNull: false,
    defaultValue: "No leído"
  },
  fecha_lectura: {
    type: DataTypes.DATE,
    allowNull: true
  },
  progreso_lectura: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    defaultValue: 0.00
  }
}, {
  tableName: 'empleado_manual',
  timestamps: false
});

module.exports = EmpleadoManual;


// const Sequelize = require('sequelize');
// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('empleado_manual', {
//     id_empleado_manual: {
//       autoIncrement: true,
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true
//     },
//     id_empleado: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'empleado',
//         key: 'id_empleado'
//       }
//     },
//     id_manual: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'manual',
//         key: 'id_manual'
//       }
//     },
//     estado: {
//       type: DataTypes.ENUM('Leído','No leído'),
//       allowNull: false,
//       defaultValue: "No leído"
//     },
//     fecha_lectura: {
//       type: DataTypes.DATE,
//       allowNull: true
//     },
//     progreso_lectura: {
//       type: DataTypes.DECIMAL(5,2),
//       allowNull: false,
//       defaultValue: 0.00
//     }
//   }, {
//     sequelize,
//     tableName: 'empleado_manual',
//     timestamps: false,
//     indexes: [
//       {
//         name: "PRIMARY",
//         unique: true,
//         using: "BTREE",
//         fields: [
//           { name: "id_empleado_manual" },
//         ]
//       },
//       {
//         name: "fk_empleadoManual_empleado",
//         using: "BTREE",
//         fields: [
//           { name: "id_empleado" },
//         ]
//       },
//       {
//         name: "fk_empleadoManual_manual",
//         using: "BTREE",
//         fields: [
//           { name: "id_manual" },
//         ]
//       },
//     ]
//   });
// };
