DROP DATABASE IF EXISTS other_pan_db;
CREATE DATABASE other_pan_db;
USE other_pan_db;

CREATE TABLE brands (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo VARCHAR(255) NOT NULL
);
INSERT INTO brands(id, name, logo) VALUES (DEFAULT, "Marca Asd", "logo-marca-asd.png"),(DEFAULT, "Marca Fgh", "logo-marca-fgh.png");

CREATE TABLE categories (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
INSERT INTO categories(id, name) VALUES (DEFAULT, "Categoria 1"),(DEFAULT, "Categoria 2"),(DEFAULT, "Categoria 3");

CREATE TABLE products (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INT UNSIGNED,
    brand_id INT(10) UNSIGNED,
    FOREIGN KEY (brand_id) REFERENCES brands(id)
);
INSERT INTO products(id, name, price, brand_id) VALUES (DEFAULT, "Producto 1", 100, 1),(DEFAULT, "Producto 2", 200, 1),(DEFAULT, "Producto 3", 300, 1);

CREATE TABLE images (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    product_id INT(10) UNSIGNED,
    -- FOREIGN KEY (columnaPropia) REFERENCES otraTabla(suClavePrimaria)
    FOREIGN KEY (product_id) REFERENCES products(id)
);
INSERT INTO images (filename, product_id) VALUES ("product-1-img-1.png", 1),("product-1-img-2.png", 1),("product-1-img-3.png", 1),("product-2-img-1.png", 2);

CREATE TABLE categories_products (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    category_id INT(10) UNSIGNED,
    product_id INT(10) UNSIGNED,
    -- FOREIGN KEY (columnaPropia) REFERENCES otraTabla(suClavePrimaria)
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
INSERT INTO categories_products(category_id, product_id) VALUES (1,1),(1,2),(1,3),(2,2),(3,3);