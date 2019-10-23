const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/icecreamtrucklist"
);



const productSeed = [ 
{
	product: "Klondike Bar",
	quantity: 25,
	hasAllergen: no,
	price: 5,
	inStock: yes
},
{
	product: "Snoopy Bar",
	quantity: 17,
	hasAllergen: no,
	price: 5,
	inStock: yes
},

{
	product: "Choco Taco",
	quantity: 0,
	hasAllergen: no,
	price: 5,
	inStock: no
},
{
	product: "Firecracker Popsicle",
	quantity: 31,
	hasAllergen: no,
	price: 5,
	inStock: yes
},
{
	product: "Snickers Ice Cream Bar",
	quantity: 10,
	hasAllergen: yes,
	price: 5,
	inStock: yes
},
{
	product: "Nutty Buddy Drumstick",
	quantity: 14,
	hasAllergen: yes,
	price: 5,
	inStock: yes
},
{
	product: "Chocolate Eclair",
	quantity: 0,
	hasAllergen: no,
	price: 5,
	inStock: no
},
{
	product: "Bomb Pop",
	quantity: 20,
	hasAllergen: no,
	price: 5,
	inStock: yes
}
]

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });