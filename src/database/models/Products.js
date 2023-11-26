module.exports = (sequelize, DataTypes) => {
    let alias = "Products";

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
        price: {
            type: DataTypes.INTEGER.UNSIGNED,
            // NOT NULL -> allowNull
            // allowNull: false
        },
        brand_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            // NOT NULL -> allowNull
            // allowNull: false
        },
        
    };

    let config = {
        tableName: "products",
        timestamps: false, // CREATED_AT UPDATED_AT DELETED_AT
    };

    const Model = sequelize.define(alias, cols, config);

    Model.associate = (models) => {
        Model.belongsTo(models.Brands, {
            // Alias
            as: "Brand",
            // La clave (no primaria) que une ambas tablas
            foreignKey: "brand_id"
        })

        Model.hasMany(models.Images, {
            // Alias
            as: "Images",
            // La clave (no primaria) que une ambas tablas
            foreignKey: "product_id"
        })

        Model.belongsToMany(models.Categories, {
            // Alias
            as: "Categories",
            // Clave foránea que hace referencia a ESTA tabla
            foreignKey: "product_id",
            // Clave foránea que hace referencia a la OTRA tabla
            otherKey: "category_id",
            // Nombre de la tabla intermedia
            through: "categories_products",
            // La tabla intermedia, tiene marcas de tiempo?
            timestamps: false // CREATED_AT UPDATED_AT DELETED_AT
        })
    }

    return Model;
}