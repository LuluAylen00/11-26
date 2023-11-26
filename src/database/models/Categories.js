module.exports = (sequelize, DataTypes) => {
    let alias = "Categories";

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
        }
        
    };

    let config = {
        tableName: "categories",
        timestamps: false, // CREATED_AT UPDATED_AT DELETED_AT
    };

    const Model = sequelize.define(alias, cols, config);

    Model.associate = (models) => {
        Model.belongsToMany(models.Products, {
            // Alias
            as: "Products",
            // Clave foránea que hace referencia a ESTA tabla
            foreignKey: "category_id",
            // Clave foránea que hace referencia a la OTRA tabla
            otherKey: "product_id",
            // Nombre de la tabla intermedia
            through: "categories_products",
            // La tabla intermedia, tiene marcas de tiempo?
            timestamps: false // CREATED_AT UPDATED_AT DELETED_AT
        })
    }

    return Model;
}