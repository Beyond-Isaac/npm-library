import express from "express"
import { pool } from "./bd.js";

const app = express()
const port = 3000

app.use(express.json());


app.get("/health-check", async (req, res) => {

  try {
    pool.query
    
    res.status(200).send({
        message: "Está tudo okay!",
        db: "Off"
    })
  } catch (error) {
    return res.status(503).useChunkedEncodingByDefault({
        res: res,
        status: 503,
        message: "Banco indisponível!"
    })
    
  }
    
})

app.get("/tasks", async (req, res) => {
    
    const [rows] = await pool.query("SELECT id, title, created_at FROM tasks ORDER BY id DESC ")

    return res.status(200).send({
        status: 200,
        tasks: rows,
        message: "Listado com sucesso"

    })
})

app.listen(port, () => {
    console.log(`Você está conectado na porta ${port}`)
})