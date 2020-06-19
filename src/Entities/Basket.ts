import BasketItem from "./BasketItem";
import Product from "./Product";

export default class Basket {
    /**
     * The list of items in the basket.
     */
    private items: BasketItem[] = [];

    /**
     * Add a quantity of a product in the basket.
     */
    add (product: Product, quantity: number = 1): this {
        this.items.push(new BasketItem(product, quantity));
        return this;
    }

    /**
     * Get all items in the basket.
     */
    all (): BasketItem[] {
        return this.items;
    }
}