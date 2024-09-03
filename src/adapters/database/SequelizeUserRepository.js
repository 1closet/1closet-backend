const UserRepository = require('../../ports/UserRepository');
const User = require('../../core/users/User');
const bcrypt = require('bcryptjs');

class SequelizeUserRepository extends UserRepository {
    constructor({ UserModel }) {
        super();
        this.UserModel = UserModel;
    }

    async findByEmail(email) {
        const user = await this.UserModel.findOne({ where: { email } });
        if (!user) return null;
        return new User(user.dataValues);
    }

    async save(userData) {
        const salt = await bcrypt.genSalt(10);
        userData.password = await bcrypt.hash(userData.password, salt);
        const user = await this.UserModel.create(userData);
        return new User(user.dataValues);
    }
}

module.exports = SequelizeUserRepository;
