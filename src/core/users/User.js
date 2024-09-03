class User {
    constructor({ id, name, email, password, station }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.station = station || null;
    }
}

module.exports = User;
