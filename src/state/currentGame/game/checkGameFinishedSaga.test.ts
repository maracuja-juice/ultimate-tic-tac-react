import { expectSaga } from 'redux-saga-test-plan';
import checkGameFinishedSaga from './checkGameFinishedSaga';
import { getMoves } from '../../selectors/AppStateSelectors';
import { select } from 'redux-saga/effects';
import { CHECK_GAME_FINISHED, GAME_FINISHED } from './gameAction';
import { Player } from '../../AppState';
import { SET_ACTIVE_BOARDS } from '../activeBoards/activeBoardsActions';
import { SAVE_GAME_DATA } from '../../finishedGames/saveFinishedGameDataActions';
import { getFinishedGameData } from '../../selectors/FinishedGameStateSelectors';
import {
  circleFinishedGameMock,
  crossFinishedGameMock,
  movesForCircleFinishedBoardMock,
  movesForCrossFinishedBoardMock,
  movesForUnfinishedBoardMock,
} from '../../../mocks';

describe('checkGameFinishedSaga', () => {
  it(
    'should dispatch gameFinished action with Circle and' +
      ' setActiveBoards to no board when the game is finished',
    () => {
      return expectSaga(checkGameFinishedSaga)
        .provide([
          [select(getMoves), movesForCircleFinishedBoardMock],
          [select(getFinishedGameData), circleFinishedGameMock],
        ])
        .put({ type: GAME_FINISHED, payload: Player.Circle })
        .put({ type: SET_ACTIVE_BOARDS, payload: [] })
        .put({
          type: SAVE_GAME_DATA,
          payload: circleFinishedGameMock,
          saveOnline: true,
        })
        .dispatch({ type: CHECK_GAME_FINISHED })
        .silentRun();
    },
  );

  it(
    'should dispatch gameFinished action with Cross and setActiveBoards to no board ' +
      'if the game is finished',
    () => {
      return expectSaga(checkGameFinishedSaga)
        .provide([
          [select(getMoves), movesForCrossFinishedBoardMock],
          [select(getFinishedGameData), crossFinishedGameMock],
        ])
        .put({ type: GAME_FINISHED, payload: Player.Cross })
        .put({ type: SET_ACTIVE_BOARDS, payload: [] })
        .put({
          type: SAVE_GAME_DATA,
          payload: crossFinishedGameMock,
          saveOnline: true,
        })
        .dispatch({ type: CHECK_GAME_FINISHED })
        .silentRun();
    },
  );

  it('should dispatch no action if the game is not finished', () => {
    return expectSaga(checkGameFinishedSaga)
      .provide([[select(getMoves), movesForUnfinishedBoardMock]])
      .dispatch({ type: CHECK_GAME_FINISHED })
      .silentRun();
  });
});
