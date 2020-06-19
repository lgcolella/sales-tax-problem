import Tax from "../Strategies/Taxes/Tax";
import Product from "../Entities/Product";

export default class TaxCalculator {
    /**
     * The list of taxes that the calculator should apply to provided products.
     */
    private taxesList: Tax[] = [];

    /**
     * Add a tax that the calculator should apply to provided products.
     */
    addTax (tax: Tax): this {
        this.taxesList.push(tax);
        return this;
    }

    /**
     * Calculate and get the total amount of taxes applicable to the given product.
     */
    calculate (product: Product): number {
        return this.taxesList.reduce((totalAmount: number, tax: Tax) => {
            return totalAmount + tax.calculate(product);
        }, 0);
    }
}
