module.exports = async function (Sequelize, sequelize) {
    return sequelize.define("users", {
        id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
        },
        first_name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true,
        },
        last_name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true,
        },
        username: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true,
        }, 
        step: {
            type: Sequelize.DataTypes.STRING(64),
            default: 0,
        },
        membership: {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: false,
        },
        region: {
            type: Sequelize.DataTypes.STRING(64),
            allowNull: true,
        }
    });
};