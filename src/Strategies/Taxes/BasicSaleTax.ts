import Tax from "./Tax";
import Product from "../../Entities/Product";
import { roundUp } from "../../helpers";

export default class BasicSaleTax implements Tax {
    /**
     * The list of product types for which this tax is not applied.
     */
    static excludedTypes = [
        Product.TYPES.BOOK,
        Product.TYPES.FOOD,
        Product.TYPES.MEDICAL,
    ];

    /**
     * @inheritdoc
     */
    calculate (product: Product): number {
        if (BasicSaleTax.excludedTypes.indexOf(product.getType()) !== -1) {
            return 0.0;
        }

        return roundUp(product.getPrice() * 0.10, 0.05);
    }
}