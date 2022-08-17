const { Sequelize, DataTypes } = require('sequelize');

let sequelize = new Sequelize( 'dcservers', 'admin', 'barcelona12', { dialect :'postgres', port:'5432' });

// ------- Models -------

const userModel = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const serverModel = sequelize.define('Server', {
    serverName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    serverId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    serverChannel: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

// ------ Models ------

const sequelizeConnect = async () => {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    console.log("The ServerModel now exists");
    return sequelize;

}

module.exports = {
    "sequelizeConnect": sequelizeConnect,
    "userModel": userModel,
    "serverModel": serverModel
};

