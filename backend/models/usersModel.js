module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('User_Info', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 6,
                notEmpty: true,
            }
        },
        profile_picture: {
            type: DataTypes.STRING
        },
        following: {
            type: DataTypes.INTEGER
        },
        followers: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: true,
        paranoid: true,
        freezeTableName: true,
        singular: '',
        plural: '',
        tableName: 'User_Info',
        initialAutoIncrement: true
    }
    );

    return Users
}