
let products = [
  { id: 1, title: 'aa' },
  { id: 2, title: 'bb' },
];

function newId() {
  return Math.floor((Math.random() * (1000000 - 10000)) + 10000);
}

const productsController = {
  getList: (req, res) => {
    setTimeout(() => {
      res.send({ products });
    }, 700);
  },

  getOne: (req, res) => {
    const product = products.find(item => item.id === parseInt(req.params.id, 10));
    res.send(product);
  },
};

export default productsController;
