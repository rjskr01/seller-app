// data/products.ts
const products = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    image: `https://via.placeholder.com/150?text=Product+${index + 1}`,
    title: `Product ${index + 1}`,
    description: `This is a minimal description for product ${index + 1}.`,
    quantity: Math.floor(Math.random() * 100) + 1,
    price: (Math.random() * 100).toFixed(2),
  }));
  
  export default products;