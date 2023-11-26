module.exports = (sequelize, DataTypes) => {
    let alias = "Brands";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            // AUTO_INCREMENT -> autoIncrement
            autoIncrement: true,
            // PRIMARY KEY -> primaryKey
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            // NOT NULL -> allowNull
            // allowNull: false
        },
        logo: {
            type: DataTypes.STRING(255),
            // NOT NULL -> allowNull
            // allowNull: false
        }
        
    };

    let config = {
        tableName: "brands",
        timestamps: false, // CREATED_AT UPDATED_AT DELETED_AT
    };

    const Model = sequelize.define(alias, cols, config);

    /*
        models -> ALIAS
            models.Products
            models.Categories
            ...
    */
    Model.associate = (models) => {
        Model.hasMany(models.Products, {
            // Alias
            as: "Products",
            // La clave (no primaria) que une ambas tablas
            foreignKey: "brand_id"
        })
    }

    return Model;
}