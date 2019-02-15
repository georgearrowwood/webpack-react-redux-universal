
const INITIAL_STATE = {
  data: [],
  isFetching: false,
  lastUpdate: Date.now()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REQUEST_PRODUCTS': {
      return { ...state, isFetching: true };
    }
    case 'RECEIVE_PRODUCTS': {
      console.log('rec', action.payload)
      return { ...state, isFetching: false, data: action.payload };
    }
    default:
      return state;
  }
};