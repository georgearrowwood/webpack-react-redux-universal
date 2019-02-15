import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from "../Layout";
import { fetchProducts } from "./actions";
import Loading from '../partials/Loading';
import Item from './Item';

class Products extends Component {

  static fetching ({ dispatch }) {
    return [dispatch(fetchProducts())];
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { isFetching, data } = this.props;
    if(isFetching) {
      return <Loading />
    }

    return(
      <Layout>
        <div className="container">
          <p>Products</p>
          <div className="products-container">
            {data.map((item, i) => <Item key={i} {...item} />)} 
          </div>
        </div>
      </Layout>
    );
  }
};

const mapStateToProps = state => ({
  data: state.products.data || [],
  isFetching: state.products.isFetching,
});

const mapDispatchToProps = {
  fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);