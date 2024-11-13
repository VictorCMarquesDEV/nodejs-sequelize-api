const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const usuariosRoutes = require('./routes/usuario');
const vagasRoutes = require('./routes/vaga');

const app = express();
app.use(bodyParser.json());

sequelize.sync().then(() => {
    console.log('Database synchronized');
}).catch(err => {
    console.error('Unable to synchronize the database: ', err);
});

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/vagas', vagasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ', PORT);
});