const express = require('express');
const router = express.Router();

/*GASTOS*/
const gasto = require('../controllers/gastos.controllers.js');

router.get('/misitio/gastos', gasto.getGastos);
router.post('/misitio/gastos', gasto.addGasto);
router.put('/misitio/gastos/:id', gasto.updateGasto);
router.delete('/misitio/gastos/:id', gasto.deleteGasto);

/*USUARIOS*/
const user = require('../controllers/usuarios.controllers.js');

router.get('/misitio/usuarios', user.getUsuarios);
router.post('/misitio/usuarios', user.addUsuarios);


router.get('/misitio', (req,res) => {
    res.send('<h2> Bienvenido a mi sitio web de Cálculo de Gastos. </h2>'+
            '<p> Navegación </p>' +
            '<nav>'+
                '<a href="/misitio/about"> Acerca de nosotros </a>' +
                '<a href="/misitio/contacto"> Contacto </a>' +
                '<a href="/misitio/gastos"> Gastos </a>'+
                '<a href="/misitio/usuarios"> Usuarios </a>'+
            '</nav>'
    );
} );

router.get('/misitio/about', (req,res) => {
    res.send('<h1> Acerca de nostros </h1>' +
            '<p> Somos un equipo dedicado a ayudar a las personas a gestionar sus gastos de manera eficiente. </p>');
} );

router.get('/misitio/contacto', (req,res) => {
    res.sendFile('./img/servicio-al-cliente.png',{
        root: __dirname
    });
} );

/*
router.get('/misitio/gastos', (req,res) => {
    res.json(
        [
            {
                "nombre": "Ballenita FC",
                "logo": "ballenita_logo.png",
                "fecha": "2023-02-04",
                "jugadores": ["Juan P.", "Jhon R.", "Steven L.", "Sebastian G.", "Luis M.", "Carlos S.", "Miguel T.", "Andrés C.", "Fernando V.", "Diego N.", "Ricardo F.", "Roberto D."]
            },
            {
                "nombre": "Chancla Dura",
                "logo": "chancladura_logo.png",
                "fecha": "2005-02-05",
                "jugadores": ["Elvis C.", "Jose M.", "David H.", "Manuel A.", "Antonio B.", "Francisco K.", "Javier Q.", "Alberto W.", "Raúl E.", "Sergio J.", "Rubén O.", "Óscar Y."]
            }
        ]
    );
} );

router.post('/misitio/gastos', (req, res) => {
    res.send('Registro de gastos recibido');
} );

router.put('/misitio/gastos', (req, res) => {
    res.send('Actualización de gastos recibida');
} );

router.delete('/misitio/gastos', (req, res) => {
    res.send('Eliminación de gastos recibida');
} );
*/

router.use((req, res) => {
    res.status(404).send('<h1>404 - Página no encontrada</h1>');
} );

//router.use(express.text());

module.exports = router;