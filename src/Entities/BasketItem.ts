import Product from "./Product";

export default class BasketItem {
    /**
     * The product to which this item refers to.
     */
    private product: Product;

    /**
     * The quantity of the product.
     */
    private quantity: number;

    constructor (product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    /**
     * Get the product to which this item refers to.
     */
    getProduct (): Product {
        return this.product;
    }

    /**
     * Get the quantity of the product.
     */
    getQuantity (): number {
        return this.quantity;
    }
}
