import { db } from "../config/db.js"

export const listar = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM usuarios")
  res.json(rows)
}

export const criar = async (req, res) => {
  const { nome, email, senha } = req.body
  await db.query(
    "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
    [nome, email, senha]
  )
  res.json({ msg: "Criado" })
}

export const editar = async (req, res) => {
  const { id } = req.params
  const { nome, email } = req.body

  await db.query(
    "UPDATE usuarios SET nome=?, email=? WHERE id=?",
    [nome, email, id]
  )

  res.json({ msg: "Atualizado" })
}

export const deletar = async (req, res) => {
  const { id } = req.params

  await db.query("DELETE FROM usuarios WHERE id=?", [id])

  res.json({ msg: "Deletado" })
}