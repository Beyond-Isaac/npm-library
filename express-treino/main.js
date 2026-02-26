// Treinando o express/node.js até decorar
import express  from "express";

const app = express()
const port = 3000

let tasks = [
    {id: 1, title: "Estudar HTTP", done: false},
    {id: 2, title: "Criando a minha API de número" }
]
let nextId = 3

app.use(express.json())

app.get("/health-check", (req, res) => {
    return res.status(200).send({
        message: "Porta funcionando",
        db: "Conect"
    })
})

app.get("/contato", (req, res) => {
    return res.status(200).send({
        email: "gamer@gamil.com",
        telefone: "123456789"
    })

})

app.get("/saudacao/:id", (req, res) => {
    const userId = req.params.id;
    
    return res.status(200).send({
        Message: `Sejá bem vindo ${userId}`
    })
    
})

// Criar uma rota /tasks utilizando o método "get".

app.get("/tasks", (req, res) => {
    res.status(200).send(task)
    
})

//Criar uma rota /tesks/:id com o método get, que busque a tarefa pelo id. Caso não tenha o id que avisa o cliente.
app.get("/tasks/:id", (req, res) => {
    
    // 1. Recebendo o parâmetro e convertendo (Demos um nome único: taskId)
    const taskId = parseInt(req.params.id);
        
    // 2. Procurando na lista (Usamos taskId para comparar)
    const taskEncontrada = tasks.find((t) => t.id === taskId);

    // Debug para você ver no console
    console.log(typeof taskEncontrada);

    // 3. Verificação
    if (!taskEncontrada) {
        return res.status(404).send('Tarefa não encontrada');
    }  else {        
        return res.status(200).send({
            message: 'Encontrado',
            task: taskEncontrada
        });
    }
    
});

//Criar uma rota /tasks com o método post, que adicione a tarefa quando ela tiver um tamanho maior que 3 caracteres
app.post("/tasks", (req, res) => {
    let title = req.body.title

    const task = {
    id: nextId,
    title: title,
    done: false
}

    nextId = nextId + 1
    tasks.push(tasks)

})

app.listen(port, () =>{
    console.log("Seu servidor está rodando ma porta 3000")
})