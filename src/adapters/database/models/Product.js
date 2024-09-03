const { DataTypes } = require('sequelize');
const sequelize = require('../../../../config/database');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    station_match: {
        type: DataTypes.STRING,
    },
    image_url: {
        type: DataTypes.STRING,
    },
    store_url: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true,
});

module.exports = Product;
