const express = require('express')

const app = express()

app.use(express.json())

const users = [{
    id: '01',
    nome: 'rojerio',
    gmail: 'rojerio@gmail.com',
    telefone: '(48) 12345-6789',
    dataEntrada: '02/02/2024',
    dataSaida: '03/03/2024',
    quarto: '01'
}]

app.get('/Adm', (req,res) => {
    res.json(users)
})

app.post('/Adm', (req,res) => {
    console.log(req.body)
    users.push(req.body)
    res.status(201).json(users)
})

app.listen(3000, () =>{
    console.log('servidor rodando')
})