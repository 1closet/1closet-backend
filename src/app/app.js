const express = require('express');
const sequelize = require('../config/database');
const userRoutes = require('../adapters/routes/userRoutes');
const productRoutes = require('../adapters/routes/productRoutes');
const recommendationRoutes = require('../adapters/routes/recommendationRoutes');




const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Sincronização do banco de dados
sequelize.sync({ force: false }).then(() => {
    console.log('Banco de dados sincronizado');
}).catch((err) => {
    console.error('Erro ao sincronizar banco de dados:', err);
});

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/recommendations', recommendationRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
