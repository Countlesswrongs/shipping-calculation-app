'use strict;'
function calculateShip(){
    var orderInfo = 
    { 
        price : 0,
        sum : 0,
        freeship : false,
        itemCost : {},
        shippingPrice : 0,
        tax : 0
    };
let numberOfItems = +prompt("Please input number of items you want to order: ", '');

for (let i = 0; i<numberOfItems; i++) {
    let a = prompt("Please input name of the item", '');
    let b = +prompt("How much it will cost you w/o shipping?", '');
    if ( typeof(a) === "string" && typeof(a) != null 
         && a !='' && b !='' && a.length < 50 && typeof(b) != null && isNaN(b) != true) {
        console.log("Item recorded to " + a + " and it will cost you " + b + " and it is " + (i+1) + " of " + numberOfItems + " total");
        console.log(typeof(b));
        orderInfo.itemCost[a] = b;
        orderInfo.sum = orderInfo.sum + b;
        console.log('current sum is ' + orderInfo.sum);
    }
    else {
        i--;
        continue;
    }
  }
// проверим, попадаем ли мы на бесплатную доставку
let freeShippingPrice = prompt ("What is minimum total to qualify for a free shipping?");
console.log("Free shipping begins at " + freeShippingPrice);
if (orderInfo.sum < freeShippingPrice) { 
    orderInfo.shippingPrice = +prompt("How much is the shipping price?");
        
} else { 
     orderInfo.freeship = true;
    orderInfo.shippingPrice = 0;
}

console.log("freeshipping status: " + orderInfo.freeship);
if ( orderInfo.sum > 200 ) { // tax limit exceeded
orderInfo.tax = orderInfo.sum*15/100;
console.log('The tax will be ' + orderInfo.tax + ' and the total price of shipment is ' + (orderInfo.sum+orderInfo.tax+orderInfo.shippingPrice));
if (orderInfo.tax > orderInfo.shippingPrice) {
    alert(" Tax will cost you more than shipping. Maybe you should buy these items in two different packages? Your total is " + orderInfo.sum + " and shipping is " + orderInfo.shippingPrice + " and tax is " + orderInfo.tax + " Total order will be " + (orderInfo.sum+orderInfo.shippingPrice+orderInfo.tax));
} else {

}

} else { // tax limit no exceeded
    orderInfo.tax = 0;
    alert ('Good to go! Total price of the items is ' + orderInfo.sum + " and shipping is " + orderInfo.shippingPrice + ". Please send this much money to us: " + (orderInfo.sum+orderInfo.shippingPrice));
}

if (2*orderInfo.shippingPrice > orderInfo.sum*15/100) {
    console.log("You better ship those items in two different orders because tow shipping prices are better than one tax price");
} 

// In the next iteration i would like to add sorting algorythm to sort 
// the items by price and to calculate best options for shipping
// todos:
// 1. choose your preffered currency
// 2. parse current course
// 3. sorting algorythm
// 4. calculate best shipping option
// 5. auto-parse shipping

}