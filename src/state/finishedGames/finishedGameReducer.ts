import { FinishedGameState, GenericAction } from '../AppState';
import {
  SAVE_GAME_DATA,
  SAVE_GAME_DATA_FULFILLED,
  SAVE_GAME_DATA_PENDING,
  SAVE_GAME_DATA_REJECTED,
} from './saveFinishedGameDataActions';
import produce from 'immer';

const initialState: FinishedGameState[] = [];

const finishedGameReducer = (state = initialState, action: GenericAction) => {
  switch (action.type) {
    case SAVE_GAME_DATA: {
      return produce(state, (draftState) => {
        draftState.push(action.payload);
      });
    }

    case SAVE_GAME_DATA_PENDING: {
      return produce(state, (draftState) => {
        draftState[draftState.length - 1].saveState = 'pending';
      });
    }

    case SAVE_GAME_DATA_REJECTED: {
      return produce(state, (draftState) => {
        // we don't know for sure actually if the last element is the element this corresponds to.
        // client id should be introduced later
        const lastElement = draftState[draftState.length - 1];
        lastElement.saveState = 'rejected';
        lastElement.errorMessage = action.payload;
        draftState[draftState.length - 1] = lastElement;
      });
    }

    case SAVE_GAME_DATA_FULFILLED: {
      return produce(state, (draftState) => {
        const lastElement = draftState[draftState.length - 1];
        lastElement.saveState = 'fulfilled';
        lastElement.id = action.payload;
      });
    }

    default: {
      return state;
    }
  }
};

export default finishedGameReducer;
