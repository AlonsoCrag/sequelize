const { DataTypes } = require('sequelize');

module.exports = {

    serverModel: (sequelize) => {
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
        return serverModel;
    },
    userModel: (sequelize) => {
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
        return userModel;
    }

}