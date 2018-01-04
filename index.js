var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor (Math.random() * 100);
  cart.push({item:price});
  console.log(`$(item) has been added to your card`);
  return cart;
 // write your code here
}
var itemNames = Object.keys(cart);

function viewCart() {
   if (cart.length === 0) {
     console.log("Your shopping cart is empty.")
   } else {
     var items = [];
     for (var i = 0; i < cart.length; i++) {
       for (var item in cart[i]) {
         items.push(item + " at $" + cart[i][item])
       }
     }
     console.log("In your cart, you have " + items.join(", ") + ".");
   }
 }

function total() {
  let t = 0;
  return t;
  
  // write your code here
}

function removeFromCart(item) {
  var itemInCart = false
  for(var i =0; i< cart.length; i++){
    if(cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i,1);
    }
    if (!itemInCart) {
      console.log("That item is not in your cart.")
    }
    return cart
  }
  // write your code here
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("We don't have a credit card on file to place your order");
  }
  else{
    console.log("Your total cost is $" +total()+ ", which will be charged to the card" + cardNumber + ".");
    cart= [];
  }
  // write your code here
}


