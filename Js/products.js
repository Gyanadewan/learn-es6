// const products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 30000 },
//   { name: "Mouse", price: 1000 }
// ];

// const highPriceProducts = products.find(highPrice => highPrice.price >=30000);
// // console.log(highPriceProducts)


const products = [
  { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
  { id: 2, name: "Phone", price: 30000, category: "Electronics" },
  { id: 3, name: "Mouse", price: 1000, category: "Accessories" },
  { id: 4, name: "Keyboard", price: 2000, category: "Accessories" },
  { id: 5, name: "Monitor", price: 15000, category: "Electronics" }
];

 products.map(p => console.log(p))