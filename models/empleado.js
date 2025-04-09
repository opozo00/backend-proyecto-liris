const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empleado = sequelize.define('Empleado', {
    id_empleado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    id_cargo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cargo',
            key: 'id_cargo'
        }
    },
    id_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'departamento',
            key: 'id_departamento'
        }
    },
    id_jefe: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'empleado',
            key: 'id_empleado'
        }
    },
}, {
    tableName: 'empleado',
    timestamps: false
});

module.exports = Empleado;
