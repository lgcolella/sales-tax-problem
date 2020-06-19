
/**
 * Round up the provided number to the nearest precision value.
 */
export const roundUp = (number: number, precision: number = 0.01): number => {
    return (Math.ceil(number / precision) * precision);
}