import React from "react";

type ButtonNewSetProps = {
    setBubblesFunction: () => void;
    sortInProgress: boolean,
    buttonName: string,
}

export const ControlButton: React.FC<ButtonNewSetProps> = ({ setBubblesFunction, sortInProgress, buttonName }) => {
    return <button onClick={() => setBubblesFunction()} disabled={sortInProgress}>{buttonName}</button>;
};
