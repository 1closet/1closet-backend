const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const UserModel = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    station: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

const ProductModel = sequelize.define('Product', {
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
    stationMatch: {
        type: DataTypes.STRING,
    },
    imageUrl: {
        type: DataTypes.STRING,
    },
    storeUrl: {
        type: DataTypes.STRING,
    },
});

const RecommendationModel = sequelize.define('Recommendation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: UserModel,
            key: 'id',
        },
    },
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: ProductModel,
            key: 'id',
        },
    },
});

module.exports = { UserModel, ProductModel, RecommendationModel };
