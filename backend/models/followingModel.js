module.exports = (sequelize, DataTypes) => {
    const Following = sequelize.define('Following', {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        profile_picture: {
            type: DataTypes.STRING
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
        tableName: 'Following'
    });

    return Following
}