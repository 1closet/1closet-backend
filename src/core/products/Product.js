class Product {
    constructor({ id, name, description, color, stationMatch, imageUrl, storeUrl }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.color = color;
        this.stationMatch = stationMatch;
        this.imageUrl = imageUrl;
        this.storeUrl = storeUrl;
    }
}

module.exports = Product;
