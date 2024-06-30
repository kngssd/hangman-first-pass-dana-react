//This file is just here to demonstrate how functions independent of react can easily be tested
//Feel free to delete it and the accompanying test once you have your own
/**
 * @param {string} inputString
 * @returns {string} new string based on inputString but with the first letter capitalised
 */
export function capitalise(inputString) {
    if (inputString.length === 0) {
        return inputString;
    }
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}
