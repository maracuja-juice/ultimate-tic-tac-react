import * as React from 'react';
import { Button } from '@rmwc/button';

interface AnalysisHistoryButtonsProps {
  currentMove: number;
  lastMove: number;
  moveForwardInHistory: (numberOfMoves: number) => void;
  moveBackwardInHistory: (numberOfMoves: number) => void;
}

export class HistoryButtons extends React.Component<
  AnalysisHistoryButtonsProps
> {
  handleEvent = (event: KeyboardEvent) => {
    const {
      currentMove,
      lastMove,
      moveBackwardInHistory,
      moveForwardInHistory,
    } = this.props;

    if (
      (event.key === 'ArrowLeft' || event.key === 'Left') &&
      this.props.currentMove !== 1
    ) {
      moveBackwardInHistory(1);
    }

    if (
      (event.key === 'ArrowRight' || event.key === 'Right') &&
      currentMove !== lastMove
    ) {
      moveForwardInHistory(1);
    }
  };

  componentDidMount(): void {
    window.addEventListener('keydown', this.handleEvent);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.handleEvent);
  }

  render() {
    const {
      currentMove,
      lastMove,
      moveForwardInHistory,
      moveBackwardInHistory,
    } = this.props;

    // TODO: icons

    return (
      <div className="historyButtons">
        <Button
          disabled={currentMove === 1}
          dense={true}
          raised={true}
          onClick={() => moveBackwardInHistory(1)}
        >
          Previous Move
        </Button>
        <Button
          disabled={currentMove === lastMove}
          dense={true}
          raised={true}
          onClick={() => moveForwardInHistory(1)}
        >
          Next Move
        </Button>
      </div>
    );
  }
}