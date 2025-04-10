const CategoriaManual = require('../models/categoria_manual');

exports.getCategoriasManual = async (req, res) => {
    try {
        const categorias = await CategoriaManual.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener categorias manual", error });
    }
};
exports.getCategoriaManual = async (req, res) => {
    try {
        const categoria = await CategoriaManual.findByPk(req.params.id);
        if (!categoria) {
            res.statu(404).json({ message: "Categoría no encontrada." })
        } else {
            res.json(categoria); res.json(categoria);
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener categorias manual", error });
    }
};
exports.updateCategoriaManual = async (req, res) => {
    const categoriaId = req.params.id;
    const updateBody = req.body;
    try {
        const [columnasActualizadas] = await CategoriaManual.update(updateBody, {
            where: { id_categoria_manual: categoriaId }
        });
        if (columnasActualizadas === 0) {
            res.status(404).json({ message: 'Categoría manual no encontrada.' });
        } else {
            const categoria = await CategoriaManual.findByPk(categoriaId);
            res.json(categoria);
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar categoría manual", error: error.message });
    }
};
exports.deleteCategoriaManual = async (req, res) => {
    const categoriaId = req.params.id;
    try {
        const [columnasActualizadas] = await CategoriaManual.destroy({
            where: { id_categoria_manual: categoriaId }
        });
        if (columnasActualizadas === 0) {
            res.status(404).json({ message: 'Categoría manual no encontrada.' });
        } else {
            res.json({ message: 'Categoría manual eliminada satisfactoriamente.' });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar empleado", error: error.message });
    }
};