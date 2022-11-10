import {Product} from "./Product";
export class ProductManager {
    private products = [];

    constructor() {
    }

    set add (product) {
        this.products.push(product);
    }

    get getAll () {
        return this.products
    }
}