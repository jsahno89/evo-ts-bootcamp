const amountOfElements = 30;
const minimumBubbleValue = 3;

export function generateRandomBubbles(): number[] {
    const randomBubbles: number[] = [];
    for (let i = 0; i <= amountOfElements; i++) {
        randomBubbles.push(Math.floor(Math.random() * (amountOfElements - minimumBubbleValue) + minimumBubbleValue));
    }

    return randomBubbles;
}
