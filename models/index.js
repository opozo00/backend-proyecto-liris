const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Empleado = require('./empleado');
db.Cargo = require('./cargo');
db.Departamento = require('./departamento');
db.Manual = require('./manual');
db.CategoriaManual = require('./categoria_manual')
db.EmpleadoManual = require('./empleado_manual');

// Asociaciones
db.Empleado.belongsTo(db.Cargo, {
    foreignKey: 'id_cargo',
    as: 'cargo'
});

db.Empleado.belongsTo(db.Departamento, {
    foreignKey: 'id_departamento',
    as: 'departamento'
});

db.Empleado.belongsTo(db.Empleado, {
    foreignKey: 'id_jefe',
    as: 'jefe'
});

db.Cargo.belongsTo(db.Departamento, {
    foreignKey: 'id_departamento',
    as: 'departamento'
});

db.EmpleadoManual.belongsTo(db.Manual, {
    foreignKey: 'id_manual',
    as: 'manual'
});

db.EmpleadoManual.belongsTo(db.Empleado, {
    foreignKey: 'id_empleado',
    as: 'empleado'
});

db.Manual.belongsTo(db.CategoriaManual, {
    foreignKey: 'id_categoria',
    as: 'categoria'
});

db.Manual.belongsTo(db.Departamento, {
    foreignKey: 'id_departamento',
    as: 'departamento'
});

db.Departamento.belongsTo(db.Empleado, {
    foreignKey: 'id_gerente',
    as: 'gerente'
});



module.exports = db;
