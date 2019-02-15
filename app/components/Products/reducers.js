
const INITIAL_STATE = {
  data: [],
  one: {},
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
    case 'REQUEST_PRODUCT': {
      return { ...state, isFetching: true };
    }
    case 'RECEIVE_PRODUCT': {
      console.log('rec', action.payload)
      return { ...state, isFetching: false, one: action.payload };
    }
    default:
      return state;
  }
};