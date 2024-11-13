const express = require('express');
const router = express.Router();
const usuarioRepository = require('../repositories/usuarioRepository');

router.get('/', async (req, res) => {
    try {
        const users = await usuarioRepository.findAll();
        res.json({ users });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await usuarioRepository.findById(req.params.id);
        if (user) {
            res.json({ user });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const user = await usuarioRepository.create(req.body);
        res.status(201).json({ user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const user = await usuarioRepository.update(req.params.id, req.body);
        if (user) {
            res.json({ user });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;