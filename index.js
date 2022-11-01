const Conteiner = require('./clase.js');
const productos = new Conteiner('./productos.json');

async function main() {

    const objeto1 = {
        nombre: "Coca Cola",
        precio: 100,
        foto: "https://www.coca-cola.com.ar/content/dam/journey/ar/es/private/brands/coca-cola/coca-cola-bottle.png"
    }
    const objeto2 = {
        nombre: "Pepsi",
        precio: 234,
        foto: "https://www.coca-cola.com.ar/content/dam/journey/ar/es/private/brands/coca-cola/coca-cola-bottle.png"
    }
    const objeto3 = {
        nombre: "Fanta",
        precio: 985,
        foto: "https://www.coca-cola.com.ar/content/dam/journey/ar/es/private/brands/coca-cola/coca-cola-bottle.png"
    }

    await productos.deleteAll()
    await productos.save(objeto1)
    await productos.save(objeto2)
    await productos.save(objeto3)
    await productos.getAll().then(a => console.log(a))
    await productos.getById(1).then(a => console.log(a))
    await productos.deleteById(3).then(a => console.log(a))
}

main()