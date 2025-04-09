const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Importar rutas
//Ruta Empleados
const empleadoRoutes = require('./routes/empleadoRoutes');
app.use('/api/empleados', empleadoRoutes);
//Ruta Cargos
const cargoRoutes = require('./routes/cargoRoutes');
app.use('/api/cargos', cargoRoutes);
//Ruta Departamentos
const departamentoRoutes = require('./routes/departamentoRoutes');
app.use('/api/departamentos', departamentoRoutes);
//Ruta Manuales
const manualesRoutes = require('./routes/manualRoutes');
app.use('/api/manuales', manualesRoutes);
//Ruta Categoría Manuales
const categoriaRoutes = require('./routes/categoriaManualRoutes');
app.use('/api/categorias', categoriaRoutes);
//Ruta Empleado Manual
const empleadoManualRoutes = require('./routes/empleadoManualRoutes');
app.use('/api/empleadomanual', empleadoManualRoutes);

// Sincronizar base de datos
sequelize.sync()
    .then(() => console.log('Base de datos conectada'))
    .catch(err => console.error('Error al conectar BD:', err));

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
