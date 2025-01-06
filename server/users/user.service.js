const UserModel = require('./user.model'); 

const createUser = async (fullName, email, password, type) => {
    console.log('Creating user with the following data:', { fullName, email, password, type });

    if (!fullName || !email || !password || !type) {
        throw new Error('Missing required fields: fullName, email, password, and type are required.');
    }

    try {
        const newUser = new UserModel({
            fullName,
            email,
            password,
            type
        });
        const savedUser = await newUser.save();
        console.log('User created successfully:', savedUser);
        return savedUser;
    } catch (error) {
        console.error('Error creating user:', error.message);
        throw error;
    }
};

module.exports = { createUser };
