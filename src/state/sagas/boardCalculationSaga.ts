import { put, select, takeEvery } from 'redux-saga/effects';
import { AppState, GenericAction, SmallBoardInformation } from '../AppState';
import { CALCULATE_BOARD_VALUE, setBoardValue } from '../board/boardActions';
import { getWinResult } from '../../util/CheckBoard';
import { arePointsEqual, playerToTileValue } from '../../util';

const getBoards = ( state: AppState ) => state.board;

function* calculateWinningBoard( action: GenericAction ) {
    const boardPoint = action.payload;

    const boards = yield select( getBoards );

    const affectedBoard = boards.find(
        ( board: SmallBoardInformation ) =>
            arePointsEqual( board.point, boardPoint )
    ).tiles;

    const winResult = getWinResult( affectedBoard ); // TODO: do It correctly
    if (winResult.isFinished) {
        const newSmallBoardTileValue = playerToTileValue( winResult.winningPlayer!, true );
        yield put( setBoardValue( boardPoint, newSmallBoardTileValue ) );
    }
}

function* boardCalculationSaga() {
    yield takeEvery( CALCULATE_BOARD_VALUE, calculateWinningBoard );
}

export default boardCalculationSaga;