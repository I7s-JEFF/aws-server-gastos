const Gasto = require('../models/gastos');
const gastosController = {};

//metodo POST
gastosController.addGasto= async(req,res)=>{
    const gasto=new Gasto({
        tipo: req.body.tipo,
        monto:req.body.monto,
        descripcion:req.body.descripcion
    });
    console.log(gasto);
    await gasto.save();
    res.json('status: Gasto guardado');
}


//Metodo GET
gastosController.getGastos = async (req, res) => {
    const gastos = await Gasto.find();
    res.json(gastos);
}

gastosController.updateGasto = async (req, res) => {
  try {
    const { id } = req.params;
    const gastoActualizado = await Gasto.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!gastoActualizado) {
      return res.status(404).json({ message: 'Gasto no encontrado' });
    }
    res.json({ message: 'Gasto actualizado', gasto: gastoActualizado });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar gasto' });
  }
};
gastosController.deleteGasto = async (req, res) => {
  try {
    const { id } = req.params;
    const gastoEliminado = await Gasto.findByIdAndDelete(id);
    if (!gastoEliminado) {
      return res.status(404).json({ message: 'Gasto no encontrado' });
    }
    res.json({ message: 'Gasto eliminado', gasto: gastoEliminado });
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar gasto' });
  }
};



module.exports = gastosController;