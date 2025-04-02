const tarefasModel = require('../models/tarefas');

async function listarTarefas(req, res) {
  try {
    const tarefas = await tarefasModel.listarTarefas();
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function criarTarefa(req, res) {
  try {
    const tarefa = await tarefasModel.criarTarefa(req.body);
    res.status(201).json(tarefa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function atualizarTarefa(req, res) {
  try {
    const tarefa = await tarefasModel.atualizarTarefa(req.params.id, req.body);
    res.json(tarefa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deletarTarefa(req, res) {
  try {
    await tarefasModel.deletarTarefa(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  listarTarefas,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa,
};