export type SortedBubbles = {
    bubblesArray: number[],
    shouldBeSorted: boolean,
};

export function sortBubbles(actualBubbles: number[], isTest: boolean = false): SortedBubbles {
    for (let i = 0; i < actualBubbles.length; i++) {
        for (let y = 0; y < actualBubbles.length; y++) {
            if (actualBubbles[y + 1]) {
                const bubble = actualBubbles[y];
                const nextBubble = actualBubbles[y + 1];
                if (nextBubble < bubble) {
                    actualBubbles[y + 1] = bubble;
                    actualBubbles[y] = nextBubble;
                    if (!isTest) {
                        return {
                            bubblesArray: actualBubbles,
                            shouldBeSorted: true,
                        };
                    }
                }
            }
        }
    }
    return {
        bubblesArray: actualBubbles,
        shouldBeSorted: false,
    };
}
