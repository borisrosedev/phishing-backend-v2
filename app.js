const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get('/', (req,res) => {
    return res.status(200).json('Hello les amis')
})


app.post('/wed', (req, res) => {
    console.log(req.body)
    return res.status(200).json(data: {req.body})
}

app.post('/register', (req, res) => {
    const { email, password, confirmedPassword } = req.body
    if(email){
        console.log('email', email)
    } 
    if(password){
        console.log('password', password)
    }
    if(confirmedPassword){
        console.log('confirmedPassword', confirmedPassword)
    }

    return res.json({ message: 'Félicitations vous êtes bien inscrit(e). Nous avons hâte de faire votre connaissance'})

})


app.listen(3000, () => {
    console.log('✅ Server running at port 3000')
})


