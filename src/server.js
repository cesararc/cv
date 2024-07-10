import express from 'express';
import dotenv  from 'dotenv';

dotenv.config();
export const token = process.env.IGTOKEN;




const app = express().use(express.json()); 
app.use(express.urlencoded({ extended: true }));




const PORT = 8080;

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('src'));
app.use('/assets', express.static('src/assets'));
app.use('/main.js', express.static('src/assets/main.js'));





// Ruta para manejar la solicitud de la página principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});



// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});







