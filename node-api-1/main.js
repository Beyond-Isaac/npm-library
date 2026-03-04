//Praticando até decorar, hehe
import express from "express"

const app = express()
const port = 3000

app.use(express.json())

//Testando a minha API
app.get("/health-check", (req, res) => {
    res.status(200).send({
        message: "Servidor funcionando!",
        db: "conect"
    })
})

//O listen sempre deve ser o último
app.listen(port, () => {
    console.log(`Sua porta é a de número ${port}!`)
})