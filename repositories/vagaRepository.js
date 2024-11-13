const Vaga = require('../models/vaga')

async function findAll() {
    return await Vaga.findAll();
}

async function findById(id) {
    return await Vaga.findByPk(id);
}

async function create({ titulo, descricao, dataCadastro, telefone, status, empresa }) {
    return await Vaga.create({ titulo, descricao, dataCadastro, telefone, status, empresa });
}

async function remove(id) {
    const job = await Vaga.findByPk(id);
    if (job) {
        await job.destroy();
        return job;
    }
    return null;
}

async function update(id, { titulo, descricao, dataCadastro, telefone, status, empresa }) {
    const job = await Vaga.findByPk(id);
    if (job) {
        job.titulo = titulo;
        job.descricao = descricao;
        job.dataCadastro = dataCadastro;
        job.telefone = telefone;
        job.status = status;
        job.empresa = empresa;
        await job.save();
        return job;
    }
    return null;
}

module.exports = {
    create,
    update,
    remove,
    findAll,
    findById
}