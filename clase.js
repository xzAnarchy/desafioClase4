const fs = require('fs').promises;

class Contenedor {
    constructor(path) {
        this.path = path
    }

    async save(objeto) {
        try {
            const leer = await fs.readFile(this.path, "utf-8");
            const data = JSON.parse(leer)
            let id;
            data.length === 0
                ? (id = 1)
                : (id = data[data.length - 1].id + 1)
            const newProduct = { ...objeto, id }
            data.push(newProduct)
            await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8")
            return newProduct.id
        } catch (e) {
            console.log(e)
        }
    }

    async getById(id) {
        try {
            const leerArchivo = await fs.readFile(this.path, 'utf-8')
            const data = JSON.parse(leerArchivo)
            const obj = data.find((obj) => obj.id === id)
            obj ? console.log(obj) : console.log("No existe el producto")
        } catch (error) {
            console.log(error)
        }
    }

    async getAll() {
        const leerArchivo = await fs.readFile(this.path, 'utf-8')
        return JSON.parse(leerArchivo)
    }

    async deleteById(id) {
        try {
            const leerArchivo = await fs.readFile(this.path, 'utf-8')
            const data = JSON.parse(leerArchivo)
            const obj = data.find((obj) => obj.id === id)
            if (obj) {
                const newData = data.filter((obj) => obj.id !== id)
                await fs.writeFile(this.path, JSON.stringify(newData, null, 2), "utf-8")
                console.log("Producto eliminado")
            } else {
                console.log("No existe el producto")
            }
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAll() {
        try {
            await fs.writeFile(this.path, JSON.stringify([], null, 2), "utf-8")
        } catch (error) {
            console.log(error)
        }

    }

}

module.exports = Contenedor;