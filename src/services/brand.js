const {Brands} = require('../database/models/index');
// Brands.findAll();

const service = {
    createBrand: async (data) => {
        let newBrand = {
            name: data.name,
            logo: data.logo,
            // price: data.price,
            // category_id: data.category
        };
        Brands.create(newBrand);
    }, // C

    findAll: async () => {
        let list = Brands.findAll({
            include: ["Products"]
        });
        
        return list;
    }, // R
    findById: async (id) => {
        let BrandFound = Brands.findOne({
            where: {
                id: id
            }
        })
        return BrandFound;
    }, // R

    updateBrand: async (id, data) => {
        let newData = {
            name: data.name,
            logo: data.logo,
            // price: data.price,
            // category_id: data.category
        };

        let resultado = Brands.update(newData, {
            where: {
                id: id
            }
        });

        return resultado;
    }, // U

    deleteBrand: async (id) => {
        let resultado = Brands.destroy({
            where: {
                id: id
            }
        });

        return resultado;
    } // D
};

module.exports = service;