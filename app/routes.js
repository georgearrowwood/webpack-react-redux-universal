import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Products/one";

export default [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: Products,
    path: '/products',
    exact: true
  },
  {
    component: Product,
    path: '/products/:id'
  }    
];