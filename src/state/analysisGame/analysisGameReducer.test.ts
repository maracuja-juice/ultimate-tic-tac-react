import analysisGameReducer from './analysisGameReducer';
import {
  moveBackwardInHistory,
  moveForwardInHistory,
  setAnalysisGame,
} from './analysisGameActions';
import { crossFinishedBoardMock } from '../../__mocks__/finishedBoardMock';
import { Player, Winner } from '../AppState';
import {
  activeBoardsForBoardWithOneMoveMock,
  boardWithOneMoveMock,
} from '../../__mocks__/boardWithOneMoveMock';
import {
  activeBoardsForBoardWithTwoMovesMock,
  boardWithTwoMovesMock,
} from '../../__mocks__/boardWithTwoMovesMock';
import {
  activeBoardsForBoardWithThreeMovesMock,
  boardWithThreeMovesMock,
  movesForBoardWithThreeMovesMock,
} from '../../__mocks__/boardWithThreeMovesMock';

describe('analysisGameReducer', () => {
  it('should return an initial state', () => {
    const initState = analysisGameReducer(undefined, { type: 'init' });
    expect(initState).not.toBeNull();
    expect(initState).not.toBeUndefined();
  });

  describe('setAnalysisGame', () => {
    it('should set the given analysis game to the state', () => {
      const analysisGame = {
        id: '1',
        board: crossFinishedBoardMock,
        activeBoards: [],
        moves: [
          {
            moveNumber: 1,
            tilePosition: { x: 0, y: 0 },
            boardPosition: { x: 0, y: 0 },
            player: Player.Cross,
          },
        ],
        currentMove: 1,
        game: {
          currentPlayer: Player.Circle,
          winningPlayer: Winner.Cross,
          isFinished: true,
        },
      };
      const action = setAnalysisGame(analysisGame);
      const newState = analysisGameReducer(undefined, action);
      expect(newState).toEqual(analysisGame);
    });
  });

  describe('moveForwardInHistory', () => {
    const analysisGame = {
      id: '1',
      board: boardWithOneMoveMock,
      activeBoards: activeBoardsForBoardWithOneMoveMock,
      moves: movesForBoardWithThreeMovesMock,
      currentMove: 1,
      game: {
        currentPlayer: Player.Circle,
        winningPlayer: Winner.Cross,
        isFinished: true,
      },
    };

    it('calculates the correct board when moving one move forward', () => {
      const action = moveForwardInHistory(1);
      const newState = analysisGameReducer(analysisGame, action);

      expect(newState.currentMove).toBe(2);
      expect(newState.game.currentPlayer).toEqual(Player.Cross);
      expect(newState.activeBoards).toEqual(
        activeBoardsForBoardWithTwoMovesMock,
      );
      expect(newState.board).toEqual(boardWithTwoMovesMock);
    });

    it('calculates the correct board when moving two moves forward', () => {
      const action = moveForwardInHistory(2);
      const newState = analysisGameReducer(analysisGame, action);

      expect(newState.currentMove).toBe(3);
      expect(newState.game.currentPlayer).toEqual(Player.Circle);
      expect(newState.activeBoards).toEqual(
        activeBoardsForBoardWithThreeMovesMock,
      );
      expect(newState.board).toEqual(boardWithThreeMovesMock);
    });

    it('sets no active board when last move is applied', () => {
      const action = moveForwardInHistory(3);
      const newState = analysisGameReducer(analysisGame, action);

      expect(newState.activeBoards).toEqual([]);
    });
  });

  describe('moveBackwardInHistory', () => {
    const analysisGame = {
      id: '1',
      board: boardWithThreeMovesMock,
      activeBoards: activeBoardsForBoardWithThreeMovesMock,
      moves: movesForBoardWithThreeMovesMock,
      currentMove: 3,
      game: {
        currentPlayer: Player.Circle,
        winningPlayer: Winner.Cross,
        isFinished: true,
      },
    };

    it('should calculate the board correctly when moving one move backward', () => {
      const action = moveBackwardInHistory(1);
      const newState = analysisGameReducer(analysisGame, action);

      expect(newState.currentMove).toBe(2);
      expect(newState.game.currentPlayer).toEqual(Player.Cross);
      expect(newState.activeBoards).toEqual(
        activeBoardsForBoardWithTwoMovesMock,
      );
      expect(newState.board).toEqual(boardWithTwoMovesMock);
    });

    it('should calculate the board correctly when moving two moves backward', () => {
      const action = moveBackwardInHistory(2);
      const newState = analysisGameReducer(analysisGame, action);

      expect(newState.currentMove).toBe(1);
      expect(newState.game.currentPlayer).toEqual(Player.Circle);
      expect(newState.activeBoards).toEqual(
        activeBoardsForBoardWithOneMoveMock,
      );
      expect(newState.board).toEqual(boardWithOneMoveMock);
    });
  });
});