var DataTypes = require("sequelize").DataTypes;
var _cargo = require("./cargo");
var _categoria_manual = require("./categoria_manual");
var _departamento = require("./departamento");
var _empleado = require("./empleado");
var _empleado_manual = require("./empleado_manual");
var _manual = require("./manual");

function initModels(sequelize) {
  var cargo = _cargo(sequelize, DataTypes);
  var categoria_manual = _categoria_manual(sequelize, DataTypes);
  var departamento = _departamento(sequelize, DataTypes);
  var empleado = _empleado(sequelize, DataTypes);
  var empleado_manual = _empleado_manual(sequelize, DataTypes);
  var manual = _manual(sequelize, DataTypes);

  empleado.belongsTo(cargo, { as: "id_cargo_cargo", foreignKey: "id_cargo"});
  cargo.hasMany(empleado, { as: "empleados", foreignKey: "id_cargo"});
  manual.belongsTo(categoria_manual, { as: "id_categoria_categoria_manual", foreignKey: "id_categoria"});
  categoria_manual.hasMany(manual, { as: "manuals", foreignKey: "id_categoria"});
  cargo.belongsTo(departamento, { as: "id_departamento_departamento", foreignKey: "id_departamento"});
  departamento.hasMany(cargo, { as: "cargos", foreignKey: "id_departamento"});
  empleado.belongsTo(departamento, { as: "id_departamento_departamento", foreignKey: "id_departamento"});
  departamento.hasMany(empleado, { as: "empleados", foreignKey: "id_departamento"});
  manual.belongsTo(departamento, { as: "id_departamento_departamento", foreignKey: "id_departamento"});
  departamento.hasMany(manual, { as: "manuals", foreignKey: "id_departamento"});
  departamento.belongsTo(empleado, { as: "id_gerente_empleado", foreignKey: "id_gerente"});
  empleado.hasMany(departamento, { as: "departamentos", foreignKey: "id_gerente"});
  empleado.belongsTo(empleado, { as: "id_jefe_empleado", foreignKey: "id_jefe"});
  empleado.hasMany(empleado, { as: "empleados", foreignKey: "id_jefe"});
  empleado_manual.belongsTo(empleado, { as: "id_empleado_empleado", foreignKey: "id_empleado"});
  empleado.hasMany(empleado_manual, { as: "empleado_manuals", foreignKey: "id_empleado"});
  empleado_manual.belongsTo(manual, { as: "id_manual_manual", foreignKey: "id_manual"});
  manual.hasMany(empleado_manual, { as: "empleado_manuals", foreignKey: "id_manual"});

  return {
    cargo,
    categoria_manual,
    departamento,
    empleado,
    empleado_manual,
    manual,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
