module.exports = (sequelize, DataTypes) => {
    const Followers = sequelize.define('Followers', {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        profile_picture: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        user_profile_link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        User_Info_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: true,
        paranoid: true,
        freezeTableName: true,
        singular: '',
        plural: '',
        tableName: 'Followers'
    });

    return Followers
}