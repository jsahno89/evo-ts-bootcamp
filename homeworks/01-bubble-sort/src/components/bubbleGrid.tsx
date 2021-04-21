import React, { CSSProperties } from "react";
import "./bubbleGrid.css";
import "./bubble.css";

const heightMultiplier = 5;

type BubbleGridProps = {
    bubblesArray: number[]
}

export const BubbleGrid: React.FC<BubbleGridProps> = ({ bubblesArray }) => {
    const bubbles = Object.values(bubblesArray).map((bubble: number, index: number) => (
        <div
          style={getButtonHeightStyle(bubble)}
          className="bubble"
          key={index}
          data-value={bubble}
        >{" "}
        </div>
    ));

    return (<div className="bubble-grid">{bubbles}</div>);
};

function getButtonHeightStyle(bubbleValue: number): CSSProperties {
    return {
        height: `${bubbleValue * heightMultiplier}px`,
    };
}
