import React from 'react';
import './App.css';
import './components/buttons.css';
import { sortBubbles } from "./utils/sorting";
import { generateRandomBubbles } from "./utils/arrayGenerating";
import { BubbleGrid } from "./components/bubbleGrid";
import { ControlButton } from "./components/buttons";

const sortInterval = 40;

export interface AppState {
    status: Status,
    actualBubbles: number[],
    sortingInProgress: boolean
}

export enum Status {
    Solved = "Solved",
    NotSolved = "Not Solved"
}

class App extends React.Component<{}, AppState> {
    constructor(props: AppState) {
        super(props);

        this.state = {
            status: Status.NotSolved,
            actualBubbles: generateRandomBubbles(),
            sortingInProgress: false,
        };
    }

    componentDidUpdate(): void {
        const { sortingInProgress } = this.state;
        if (sortingInProgress) {
            setTimeout(this.sort, sortInterval);
        }
    }

    sortingProgressHandler = (): void => {
        const { sortingInProgress } = this.state;
        this.setState((prevState) => ({ ...prevState, sortingInProgress: !sortingInProgress }));
    };

    newSet = (): void => this.setState({
        actualBubbles: generateRandomBubbles(),
        sortingInProgress: false,
        status: Status.NotSolved,
    });

    sort = (): void => {
        const { actualBubbles } = this.state;
        const sortedBubbles = sortBubbles(actualBubbles);
        const { shouldBeSorted } = sortedBubbles;

        if (shouldBeSorted) {
            this.setState({ actualBubbles: sortedBubbles.bubblesArray, sortingInProgress: true });
        } else {
            this.setState({ status: Status.Solved, sortingInProgress: false });
        }
    };

    render() {
        const { status, sortingInProgress, actualBubbles } = this.state;
        return (
            <div className="App">
                <h1>Bubble sort 🛁</h1>
                <BubbleGrid bubblesArray={actualBubbles}/>
                <div className="buttons-container">
                    <ControlButton
                      setBubblesFunction={this.newSet}
                      sortInProgress={sortingInProgress}
                      buttonName="New Set"
                    />
                    <ControlButton
                      setBubblesFunction={this.sortingProgressHandler}
                      sortInProgress={sortingInProgress}
                      buttonName="Start"
                    />
                </div>
                <div>
                    <p>{status}</p>
                </div>
            </div>
        );
    }
}

export default App;
