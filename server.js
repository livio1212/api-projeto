import express from 'express'
import { PrimsaClient } from '@prisma/client'

const = prisma = new PrismaClient()
 
const app = express() 

app.use(express.json());


const users = []

app.post('/user', (req, res) => {

    prisma.user.create({
        data: 
        email: req.body.email,
        name: req.body.name,
        age:req.body.age
        
    })
    res.status(201, 'Deu certo')
})

app.get('/user', (req, res) => {
    
    res.status(200).json(users);

});


app.listen(3000)

