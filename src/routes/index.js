import {Router} from 'express'  // Se importa componente en especifico Router de express

const router = Router()

router.get('/', (req,res)=> res.render('index.ejs', { title: 'Pagin Home' })) //Se crea routers con variables

router.get('/about', (req,res)=> res.render('about.ejs', { title: 'Pagin About' }))

router.get('/contact', (req,res)=> res.render('contact.ejs', { title: 'Pagin Contact' }))

export default  router;