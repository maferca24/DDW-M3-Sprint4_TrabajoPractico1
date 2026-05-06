import express from 'express';
import {connectDB} from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroesRoutes.mjs';
import heroesroutefront from './routes/superHeroFront.mjs'

//Crear instancia de Express
const app = express();
//Definir el puerto para el servidor, usando una variable de entorno o el puerto 3000 por defecto
const PORT = process.env.PORT||3000;

//Configurar ejs como motor de plantillas
app.set("view engine","ejs");
app.set("views", path.resolve("./views")); //Especificar la carpeta donde se encuentran las vistas (plantillas ejs)

//Configurar express-ejs-layouts para usar un layout común en las vistas
import expressLayouts from 'express-ejs-layouts';
app.use(expressLayouts);
app.set('layout','layout'); //Especificar la ubicación del layout principal-Indica que use layout.ejs por defecto para todas las vistas, a menos que se especifique lo contrario en la ruta correspondiente.

//Servir archivos estáticos desde la carpeta "public" (para CSS, JS, imágenes, etc.)
import path from 'path';
app.use(express.static(path.resolve("./public")));

//Middleware para parsear JSON (Mid para que las solicitudes se conviertan a JSON automáticamente)
app.use (express.json());



//Conexión a MongoDB
connectDB();

//Configuración de rutas- Rutas backend para la api de superheroes
app.use('/api', superHeroRoutes);

//ruta frontend/plantillas para el dashboard de heroes
app.use("/dashboard", heroesroutefront);

//Manejo de errores para rutas no encontradas
// app.use((req,res)=>{
//     res.status(404).send({mensaje:"Ruta no encontrada"});
// });

//Iniciar el servidor
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});