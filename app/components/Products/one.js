import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from "../Layout";
import { fetchProduct } from "./actions";
import Loading from '../partials/Loading';
import Item from './Item';

class Product extends Component {

  static fetching ({ dispatch, path}) {
    return [dispatch(fetchProduct(path.split('/')[2]))];
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  render() {
    const { isFetching, data } = this.props;
    if(isFetching) {
      return <Loading />
    }

    return(
      <Layout>
        <div className="container">
          <p>Product</p>
          <div className="product-container">
            <div>{data.id}</div>
            <div>{data.title}</div>
          </div>
        </div>
      </Layout>
    );
  }
};

const mapStateToProps = state => ({
  data: state.products.one || {},
  isFetching: state.products.isFetching,
});

const mapDispatchToProps = {
  fetchProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);