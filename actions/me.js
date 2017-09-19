import { createAction } from 'redux-actions';

export const SET_NAME = 'ME_SET_NAME';

const setName = createAction(SET_NAME);

export default {
  setName,
};
