// To start this server with nodemon please run 'npm run serverDev'

const express = require('express');
const app = express();
app.use(express.json());

let inventory = [
  {name: 'Iphone 12', stock: 5, inStock: true, id: 100},
  {name: 'Iphone 11', stock: 15, inStock: true, id: 200},
  {name: 'Iphone 10', stock: 0, inStock: false, id: 300},
];

// returns current store
app.get('/stocklist', (req, res) => {
  res.send(inventory);
});

// Makes item unavailble in the store
app.patch('/toggleAvailability', async (req, res) => {
  const idSelected = req.body.id;
  //   Find the index of the item with the id
  const indexItem = inventory.findIndex(x => x.id == idSelected);
  if (indexItem !== -1) {
    const itemToAdjust = inventory[indexItem];
    itemToAdjust.inStock = !itemToAdjust.inStock;
    res.json(inventory);
  } else {
    res.status(402).send('invalid product ID number');
  }
});

// Reduces inventory by 1
app.patch('/addToCart', async (req, res) => {
  const idSelected = req.body.id;
  //   Find the index of the item with the id
  const indexItem = inventory.findIndex(x => x.id == idSelected);
  if (indexItem !== -1) {
    // item is in stock , reduce one from inventory, reply with item added to basket and new inventory
    const stockCount = inventory[indexItem].stock;
    const product = inventory[indexItem].name;
    console.log(
      `${product} - there are currently: ${stockCount} available at the store`,
    );
    if (stockCount > 0) {
      const newStockvalue = stockCount - 1;
      inventory[indexItem].stock = newStockvalue;
      res.json(inventory);
    } else {
      res.json(`${product} is not available`);
    }
  } else {
    res.status(402).send('invalid product ID number');
  }
});

// Increases inventory quantity + 1
app.patch('/removeFromCart', async (req, res) => {
  const idSelected = req.body.id;
  //   Find the index of the item with the id
  const indexItem = inventory.findIndex(x => x.id == idSelected);
  if (indexItem !== -1) {
    // item is in stock , reduce one from inventory, reply with item added to basket and new inventory
    const stockCount = inventory[indexItem].stock;
    const newStockvalue = stockCount + 1;
    inventory[indexItem].stock = newStockvalue;
    res.json(inventory);
  } else {
    res.status(402).send('invalid product ID number');
  }
});

console.log('currently listening on port 4000');
app.listen(4000);
