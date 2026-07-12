const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 30000 },
  { name: "Mouse", price: 1000 }
];

const highPriceProducts = products.find(highPrice => highPrice.price >=30000);
console.log(highPriceProducts)