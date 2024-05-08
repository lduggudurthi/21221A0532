// api/index.js
const products = [
  {
    productId: 1,
    productName: "Laptop 1",
    price: 2236,
    rating: 4.7,
    discount: 63,
    availability: "yes"
  },
  {
    productId: 2,
    productName: "Laptop 13",
    price: 1244,
    rating: 4.5,
    discount: 45,
    availability: "out-of-stock"
  },
  {
    productId: 3,
    productName: "Laptop 3",
    price: 9102,
    rating: 4.44,
    discount: 98,
    availability: "out-of-stock"
  },
  {
    productId: 4,
    productName: "Laptop 11",
    price: 2652,
    rating: 4.12,
    discount: 70,
    availability: "yes"
  },
  {
    productId: 5,
    productName: "Laptop 1",
    price: 1059,
    rating: 2.77,
    discount: 21,
    availability: "yes"
  },
  {
    productId: 6,
    productName: "Laptop 10",
    price: 7145,
    rating: 2.74,
    discount: 15,
    availability: "yes"
  },
  {
    productId: 7,
    productName: "Laptop 10",
    price: 4101,
    rating: 2.67,
    discount: 37,
    availability: "out-of-stock"
  }
];

export const getTopProducts = () => {
  return new Promise((resolve, reject) => {
    // Simulating an API call
    setTimeout(() => {
      resolve(products.slice(0, 5)); // Return top 5 products
    }, 1000); // Simulate loading time
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    // Simulating an API call
    setTimeout(() => {
      const product = products.find((p) => p.productId === parseInt(productId));
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Product not found'));
      }
    }, 1000); // Simulate loading time
  });
};