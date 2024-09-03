class RegisterUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(userData) {
        const userExists = await this.userRepository.findByEmail(userData.email);

        if (userExists) {
            throw new Error('Usuário já existe');
        }

        return this.userRepository.save(userData);
    }
}

module.exports = RegisterUser;
