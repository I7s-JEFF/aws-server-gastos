const userController = {};

//Metodo POST
userController.addUsuarios = async (req, res) => {
    console.log(req.body);
    res.send('Nuevo Usuario Registrado');
}

//Metodo GET
userController.getUsuarios = async (req, res) => {
    res.json([
        {
            id: 100,
            nombre: 'Juan Pérez',
            email: 'juanperez@gmail.com',
            edad: 30
        },
        {
            id: 200,
            nombre: 'María López',
            email: 'marialopez@gmail.com',
            edad: 25
        },
        {
            id: 300,
            nombre: 'Carlos Sánchez',
            email: 'carlossanchez@gmail.com',
            edad: 28
        }
    ]);
}

module.exports = userController;