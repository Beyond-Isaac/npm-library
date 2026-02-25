//module
import express, { response } from "express"

const app = express()
const port = 3000
const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//Lição: Aprendendo a usar o caminho
app.use(express.json())
app.get("/", (request, response) => {
    response.send("Encontrou a minha API...")
})


//Lição: Criar uma rota /usuarios com metodo get -> que responde: ""
app.get("/usuarios", (request, response) =>{
    response.send("Encontramos a lista de usuários!")
})


//Lição: Fazer uma lista com array.
app.get("/lista", (request, response) => {
    response.send(lista)
})


//Lição: Evouluir essa lista com id
app.get("/lista/:id", (request, response) => {
    const valor = Number(request.params.id)
    console.log(typeof valor);

    if (lista.includes(valor)) {
        return response.status(200).send(`Tem o seu número na lista! ${valor}`)
    } else {
        return response.status(404).send(`Não existe esse número na lista, ${valor}`)
    }
})


//Lição: Criar uma rota post que adiciona um usuário. O Request = req E Response = res
app.post("/lista/:id", (req, res) => {
    let id = Number(req.params.id)
    
    if (lista.includes(id)) { 
        return res.status(409).send(`O número que você escolheu já existe...`) 
    } else {
        lista.push(id)
        return res.status(200).send({
            Message: "Número adicionado com sucesso!",
            Lista: lista
        })
    }
    
})


//Lição: Fazer uma rota com o método delete. 
app.delete("/lista/:id", (req, res) => {
    
    let id = Number(req.params.id)
    
    if (lista.includes(id)) { 
        
    let index = lista.indexOf(id)
    lista.splice(index, 1) 
        return res.status(200).send({
            Message: "Número deletado com sucesso!",
            Lista: lista })
    } else {
        return res.status(409).send(`O número ${id} não foi encontrado na lista.`);                
    }
})


//Mostra que a porta está rodando perfeitamente
app.listen(port, () => {
    console.log(`A porta que estamos utilizando é a porta: ${port}`)
})