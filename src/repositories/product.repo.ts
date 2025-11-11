import { Product } from "../models/product";

export class ProductRepository {
    private products: Array<Product> = [];
    constructor() { }

    populate(products: Array<Product>): void {
        this.products = products;
    }
    
    all(): Array<Product> {
        return this.products;
    }
}