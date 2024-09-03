require('dotenv').config();  // Isso deve estar no topo do arquivo
console.log('DATABASE_URL:', process.env.DATABASE_URL)
console.log('PORT:', process.env.PORT);
console.log('JWT_SECRET:', process.env.JWT_SECRET);


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,  // Dependendo do ambiente, isso pode ser necessário
        },
    },
});

module.exports = sequelize;
