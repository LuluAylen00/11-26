const {Products} = require('../database/models/index');
// Products.findAll();

const service = {
    createProduct: async (data) => {
        let newProduct = {
            name: data.name,
            price: data.price,
            category_id: data.category
        };
        Products.create(newProduct);
    }, // C

    findAll: async () => {
        let prods = Products.findAll({
            include: ["Brand", "Images", "Categories"]
        });
        
        return prods;
    }, // R
    findById: async (id) => {
        let productFound = Products.findOne({
            where: {
                id: id
            }
        })
        return productFound;
    }, // R

    updateProduct: async (id, data) => {
        let newData = {
            name: data.name,
            price: data.price,
            category_id: data.category
        };

        let resultado = Products.update(newData, {
            where: {
                id: id
            }
        });

        return resultado;
    }, // U

    deleteProduct: async (id) => {
        let resultado = Products.destroy({
            where: {
                id: id
            }
        });

        return resultado;
    } // D
};

module.exports = service;