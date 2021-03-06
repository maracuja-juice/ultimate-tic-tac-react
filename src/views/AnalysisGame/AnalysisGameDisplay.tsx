import * as React from 'react';
import { MoveList } from './MoveList/MoveList';
import { ArrowButtons } from '../../components/ArrowButtons/ArrowButtons';
import { BigBoard } from '../../components/Board/BigBoard/BigBoard';
import { moveScrollElementBaseName } from './ScrollElementConstants';
import styles from './AnalysisGame.module.css';
import { scroller } from 'react-scroll/modules';
import { AnalysisGame } from '../../state/AppState';

interface AnalysisGameDisplayProps {
  moveForwardInHistory: (numberOfMoves: number) => void;
  moveBackwardInHistory: (numberOfMoves: number) => void;
  analysisGame: AnalysisGame;
}

function scrollToElement(moveNumberToScrollTo: number) {
  scroller.scrollTo(moveScrollElementBaseName + moveNumberToScrollTo, {
    duration: 300,
    smooth: true,
    containerId: 'moveList',
    // Thanks to this, when scrolling to an element, some elements above it will also be displayed
    offset: -125,
  });
}

export function AnalysisGameDisplay(props: AnalysisGameDisplayProps) {
  const analysisGame = props.analysisGame;
  const reversedMoves = analysisGame.moves.slice().reverse();
  const currentlyAppliedMove =
    reversedMoves[
      reversedMoves.findIndex((m) => m.moveNumber === analysisGame.currentMove)!
    ];

  return (
    <div className={styles.analysisLayout}>
      <div id="moveList" className={styles.moveList}>
        <MoveList
          activatedMove={analysisGame.currentMove}
          reversedMoves={reversedMoves}
          onMoveDownwardsInList={props.moveForwardInHistory}
          onMoveUpwardsInList={props.moveBackwardInHistory}
        />
      </div>
      <div className={styles.historyButtons}>
        <ArrowButtons
          handleKeyboard={true}
          value={analysisGame.currentMove}
          maxValue={reversedMoves[0] && reversedMoves[0].moveNumber}
          minValue={1}
          onInteraction={(forward) => {
            if (forward) {
              props.moveForwardInHistory(1);
              scrollToElement(currentlyAppliedMove.moveNumber + 1);
            } else {
              props.moveBackwardInHistory(1);
              scrollToElement(currentlyAppliedMove.moveNumber - 1);
            }
          }}
        />
      </div>
      <div className={styles.analysisGame}>
        <BigBoard
          board={analysisGame.board}
          activeBoards={analysisGame.activeBoards}
          currentPlayer={analysisGame.game.currentPlayer}
          highlight={{
            condition: currentlyAppliedMove !== undefined,
            position: currentlyAppliedMove
              ? {
                  boardPosition: currentlyAppliedMove.boardPosition,
                  tilePosition: currentlyAppliedMove.tilePosition,
                }
              : undefined,
          }}
        />
      </div>
    </div>
  );
}
