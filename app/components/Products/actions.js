import axios from 'axios';

export const fetchProducts = () => async dispatch => {
  try {
    dispatch({ type: 'REQUEST_PRODUCTS' });
    const res = await axios.get(`${process.env.API_URL}/api/products`);
    dispatch({ type: 'RECEIVE_PRODUCTS', payload: res.data.products });
  } catch(e) {
    console.log(e);
    dispatch({ type: 'RECEIVE_PRODUCTS', payload: [] });
  }
};

export const fetchProduct = (id) => async dispatch => {
  try {
    dispatch({ type: 'REQUEST_PRODUCT' });
    const res = await axios.get(`${process.env.API_URL}/api/products/${id}`);
    dispatch({ type: 'RECEIVE_PRODUCT', payload: res.data });
  } catch(e) {
    console.log(e);
    dispatch({ type: 'RECEIVE_PRODUCT', payload: [] });
  }
};
