import nextConnect from 'next-redux-wrapper';
import store from '_store';

const connect = (state, dispatch) => nextConnect(
  store,
  state,
  dispatch,
);

export default connect;
