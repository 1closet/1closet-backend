const { DataTypes } = require('sequelize');
const sequelize = require('../../../../config/database');
const User = require('./User');
const Product = require('./Product');

const Recommendation = sequelize.define('Recommendation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
}, {
    timestamps: true,
});

module.exports = Recommendation;
