import Product from "./Product";

export default class Receipt {
    /**
     * The list of entries of receipt.
     */
    private entries: ReceiptEntry[] = [];

    /**
     * Add an entry to receipt.
     */
    addEntry (entry: ReceiptEntry): this {
        entry.totalPrice = this.calculateTotalPrice(entry);
        this.entries.push(entry);
        return this;
    }

    /**
     * Calculate the total price of the entry.
     */
    private calculateTotalPrice (entry: ReceiptEntry): number {
        return (entry.product.getPrice() + entry.tax) * entry.quantity;
    }

    /**
     * Get all the entries of the receipt.
     */
    getEntries (): ReceiptEntry[] {
        return this.entries;
    }
}

interface ReceiptEntry {
    product: Product,
    tax: number,
    quantity: number,
    totalPrice?: number
}
