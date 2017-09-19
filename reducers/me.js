import { handleActions } from 'redux-actions';
import * as ME from '_actions/me';

export const INITIAL_STATE = {
  name: '',
};

export default handleActions({
  [ME.SET_NAME]: (state, { payload }) => ({
    ...state,
    name: payload,
  }),
}, INITIAL_STATE);
