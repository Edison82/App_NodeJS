import express from 'express'
import {dirname, join} from 'path' // Se usa este modulo de node para crear la ruta absoluta y join concatena directoriosin importar sistema operativo
import { fileURLToPath } from 'url' // Se usa para 
import indexRoutes from './routes/index.js'


const app = express() 
const __dirname = dirname(fileURLToPath(import.meta.url)) //Crea ruta absoluta c://destop/


app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')  //Activa motor de plantillas
app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))

app.listen(3000)
console.log('Server is listening on port', 3000)