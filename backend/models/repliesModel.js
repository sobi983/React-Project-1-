module.exports = (sequelize, DataTypes) => {
    const Replies = sequelize.define('Replies', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        user_Profile_Picture: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        Post_Info_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        User_Info_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        }
    }, {
        timestamps: true,
        paranoid: true,
        freezeTableName: true,
        singular: '',
        plural: '',
        tableName: 'Replies',
        initialAutoIncrement: true
    }
    );

    return Replies
}