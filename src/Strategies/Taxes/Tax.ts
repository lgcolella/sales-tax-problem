import Product from "../../Entities/Product";

export default interface Tax {
    /**
     * Calculate the tax value for the provided product.
     */
    calculate(product: Product): number;
}