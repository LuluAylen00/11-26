const {Categories} = require('../database/models/index');
// Categories.findAll();

const service = {
    createCategory: async (data) => {
        let newCategory = {
            name: data.name,
            // price: data.price,
            // category_id: data.category
        };
        Categories.create(newCategory);
    }, // C

    findAll: async () => {
        let cats = Categories.findAll({
            include: ["Products"]
        });
        
        return cats;
    }, // R
    findById: async (id) => {
        let CategoryFound = Categories.findOne({
            where: {
                id: id
            }
        })
        return CategoryFound;
    }, // R

    updateCategory: async (id, data) => {
        let newData = {
            name: data.name,
            // price: data.price,
            // category_id: data.category
        };

        let resultado = Categories.update(newData, {
            where: {
                id: id
            }
        });

        return resultado;
    }, // U

    deleteCategory: async (id) => {
        let resultado = Categories.destroy({
            where: {
                id: id
            }
        });

        return resultado;
    } // D
};

module.exports = service;