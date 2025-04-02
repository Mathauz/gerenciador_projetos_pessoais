const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

async function listarTarefas() {
  const result = await pool.query('SELECT * FROM tarefas');
  return result.rows;
}

async function criarTarefa(tarefa) {
  const result = await pool.query(
    'INSERT INTO tarefas (titulo, descricao, status) VALUES ($1, $2, $3) RETURNING *',
    [tarefa.titulo, tarefa.descricao, tarefa.status]
  );
  return result.rows[0];
}

async function atualizarTarefa(id, tarefa) {
  const result = await pool.query(
    'UPDATE tarefas SET titulo = $1, descricao = $2, status = $3 WHERE id = $4 RETURNING *',
    [tarefa.titulo, tarefa.descricao, tarefa.status, id]
  );
  return result.rows[0];
}

async function deletarTarefa(id) {
  await pool.query('DELETE FROM tarefas WHERE id = $1', [id]);
}

module.exports = {
  listarTarefas,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa,
};