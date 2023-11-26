module.exports = (sequelize, DataTypes) => {
    let alias = "Images";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            // AUTO_INCREMENT -> autoIncrement
            autoIncrement: true,
            // PRIMARY KEY -> primaryKey
            primaryKey: true
        },
        filename: {
            type: DataTypes.STRING(255),
            // NOT NULL -> allowNull
            // allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            // NOT NULL -> allowNull
            // allowNull: false
        },
        
    };

    let config = {
        tableName: "images",
        timestamps: false, // CREATED_AT UPDATED_AT DELETED_AT
    };

    const Model = sequelize.define(alias, cols, config);

    Model.associate = (models) => {
        Model.belongsTo(models.Products, {
            // Alias
            as: "Product",
            // La clave (no primaria) que une ambas tablas
            foreignKey: "product_id"
        })
    }

    return Model;
}