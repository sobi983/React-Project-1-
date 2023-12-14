module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('Post_Info', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        postedBy: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING
        },
        img: {
            type: DataTypes.STRING
        },
        likes: {
            type: DataTypes.INTEGER,
            default: 0
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
        tableName: 'Post_Info',
        initialAutoIncrement: true
    }
    );

    return Posts
}