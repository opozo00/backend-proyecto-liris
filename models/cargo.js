const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cargo = sequelize.define("Cargo", {

    id_cargo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nivel: {
        type: DataTypes.ENUM,
        allowNull: false
    },
    id_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Departamento',
            key: 'id',
        }
    },

}, {
    tableName: 'cargo',
    timestamps: false
});

Cargo.associate = (models) => {
    Cargo.belongsTo(models.Departamento, {
        foreignKey: 'id_departamento',
        as: 'departamento',
    });
};

module.exports = Cargo;