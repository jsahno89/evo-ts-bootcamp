import '@testing-library/jest-dom';
import { sortBubbles } from "./sorting";

describe("sortBubbles", () => {
    it("should return sorted array from received data", () => {
        const givenArray = [1, 5, 8, 123, 43, 26, 76, 54, 23, 87, 99];
        const expectedArray = [1, 5, 8, 23, 26, 43, 54, 76, 87, 99, 123];

        expect(sortBubbles(givenArray, true).bubblesArray).toEqual(expectedArray);
    });

    it("should return sort correctly when there're equal numbers", () => {
        const givenArray = [5, 2, 13, 3, 1, 2, 54, 23, 7, 89, 64, 42];
        const expectedArray = [1, 2, 2, 3, 5, 7, 13, 23, 42, 54, 64, 89];

        expect(sortBubbles(givenArray, true).bubblesArray).toEqual(expectedArray);
    });
});
