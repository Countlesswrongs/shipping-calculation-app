//'use strict';
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
    var currencyInfo =
    {
        isEur : false,
        isRur : true,
        originCurr : 0,
        EUR : 0,
        RUR : 0,
        exchangerate : (64.2)
    };
    var newCurrency;

currencyInfo.isEur = confirm('Will you input prices in EUR?');
if (currencyInfo.isEur) {
// do nothing
}
else {
//currencyInfo.isRur = confirm('Will you input prices in RUR?');
currencyInfo.exchangerate = +prompt("What is the current exchange rate? 1 EUR = ", '64.2');

}
console.log(" Current exchage rate is: " + currencyInfo.exchangerate);
console.log('The prices will be in EUR: ' + currencyInfo.isEur);

function exchancecurrency (){
    if (currencyInfo.isEur) {
// do nothing
    } else {
        if (currencyInfo.isRur) {
        currencyInfo.RUR = originCurr;
        currencyInfo.EUR = currencyInfo.RUR/currencyInfo.exchangerate;
        console.log(currencyInfo.RUR + " rubles is " + currencyInfo.EUR + " at exchange rate 1 RUR = " + currencyInfo.exchangerate + " EUR");
        newCurrency = +(currencyInfo.EUR.toFixed(2));
    }
    //    currencyInfo.isEur=true;
    }
}
 
let numberOfItems = +prompt("Please input number of items you want to order: ", '');

for (let i = 0; i<numberOfItems; i++) {
    let a = prompt("Please input name of the item", '');
    let b = +prompt("How much it will cost you w/o shipping?", '');
    if ( typeof(a) === "string" && typeof(a) != null && a !='' && b !='' && a.length < 50 && typeof(b) != null && isNaN(b) != true) {
        console.log("Item recorded to " + a + " and it will cost you " + b + " and it is " + (i+1) + " of " + numberOfItems + " total");
        console.log(typeof(b));
        if (currencyInfo.isEur == false) {
         originCurr = b;
         exchancecurrency(); // новое
         b = newCurrency;
        } else {}
        orderInfo.itemCost[a] = newCurrency;
        orderInfo.sum = orderInfo.sum + b;
        console.log('current sum is ' + orderInfo.sum);
        
    }
    else {
        i--;
        continue;
    }
  }
// проверим, попадаем ли мы на бесплатную доставку
let freeShippingPrice = prompt ("What is minimum total to qualify for a free shipping?", '');
        if (currencyInfo.isEur == false) {
         originCurr = freeShippingPrice;
         exchancecurrency(); // новое
         freeShippingPrice = newCurrency;
        } else {}
console.log("Free shipping begins at " + freeShippingPrice);
if (orderInfo.sum < freeShippingPrice) { 
    orderInfo.shippingPrice = +prompt("How much is the shipping price?", '');
        if (currencyInfo.isEur == false) {
         originCurr = orderInfo.shippingPrice;
         exchancecurrency(); // новое
         orderInfo.shippingPrice = newCurrency;   
        } else {} 
        
} else { 
     orderInfo.freeship = true;
    orderInfo.shippingPrice = 0;
}

console.log("freeshipping status: " + orderInfo.freeship);
if ( orderInfo.sum > 200 ) { // tax limit exceeded
orderInfo.tax = orderInfo.sum*15/100;
// console.log(typeof(orderInfo.sum));
// console.log(typeof(orderInfo.tax));
// console.log(typeof(orderInfo.shippingPrice));

console.log('The tax will be ' + orderInfo.tax + ' and the total price of shipment is ' + (orderInfo.sum+orderInfo.tax+orderInfo.shippingPrice));

let finalprice = (orderInfo.sum+orderInfo.shippingPrice+orderInfo.tax).toFixed(2);
    console.log(typeof(finalprice));
    console.log(typeof(currencyInfo.exchangerate));


    alert ('Total price of the items is ' + orderInfo.sum + " and shipping is " + orderInfo.shippingPrice + ". Tax is " + (orderInfo.tax.toFixed(2)) + ". Please send this much money to us: " + finalprice + " EUR (" + ((finalprice*currencyInfo.exchangerate).toFixed(2)) + " RUR"  + ")");
// if (orderInfo.tax > orderInfo.shippingPrice) {
// //    alert("Tax will cost you more than shipping. Maybe you should buy these items in two different packages? Your total is " + orderInfo.sum + " and shipping is " + orderInfo.shippingPrice + " and tax is " + orderInfo.tax + " Total order will be " + (orderInfo.sum+orderInfo.shippingPrice+orderInfo.tax));
//     console.log("Tax will cost you more than shipping. Maybe you should buy these items in two different packages? Your total is " + orderInfo.sum + " and shipping is " + orderInfo.shippingPrice + " and tax is " + orderInfo.tax + " Total order will be " + (orderInfo.sum+orderInfo.shippingPrice+orderInfo.tax))
// } else {
//     console.log('Shipping in two different orders makes no sense');
// }

} else { // tax limit no exceeded
    orderInfo.tax = 0;
    let finalprice = (orderInfo.sum+orderInfo.shippingPrice).toFixed(2);
    console.log(typeof(finalprice));
    console.log(typeof(currencyInfo.exchangerate));


    alert ('Total price of the items is ' + orderInfo.sum + " and shipping is " + orderInfo.shippingPrice + ". Please send this much money to us: " + finalprice + " EUR (" + ((finalprice*currencyInfo.exchangerate).toFixed(2)) + " RUR"  + ")");
}

if ((2*orderInfo.shippingPrice > orderInfo.tax) && (orderInfo.tax != 0)) {
    console.log("You better ship those items in two different orders because two shipping prices (" + (2*orderInfo.shippingPrice) + ") are better than one tax price (" + orderInfo.tax + ")");
} 

// In the next iteration i would like to add sorting algorythm to sort 
// the items by price and to calculate best options for shipping
// todos:
// 1. choose your preffered currency
// 2. parse current course
// 3. sorting algorythm
// 4. calculate best shipping option
// 5. auto-parse shipping
// 6. add option to translate output messages to Russian (and other language support)

}