//'use strict';
function calculateShip(){
    var freeshipmessage;
    var shippingTotalPrice = 0;
    var shipmentPrice = 0;
    var nextCyclei = 0;
    var nextCycleNumberOfItems = 0;
    var orderInfoShipmentDBcounter = 0;
    var m = 0;
    var z = 0;
    var k = 0;


    var orderInfo =     // starting info
    { 
        ItemName : {},
        itemNumber : {},
        itemPrice : {},
        freeship : false,
        itemCost : {},
        shippingPrice : 0,
        sum: 0,
        tax : 0
    };
    var orderInfoSorted =    //sorted by price
    { 
        ItemName : {},
        itemNumber : {},
        itemPrice : {},
        sum : 0,
        freeship : false,
        itemCost : {},
        shippingPrice : 0,
        tax : 0
    };
    var orderInfoShipment =     // temp for cycle of creatingShipment
    { 
        ItemName : {},
        itemNumber : {},
        itemPrice : {},
        sum : 0,
        freeship : false,
        itemCost : {},
        shippingPrice : 0,
        tax : 0
    };

    var orderInfoShipmentReady =  // final order object ready
    { 
        ItemName : {},
        itemNumber : {},
        itemPrice : {},
        sum : 0,
        freeship : false,
        itemCost : {},
        shippingPrice : 0,
        tax : 0
    };

    var orderInfoShipmentZero =  // to clear the order object
    { 
        ItemName : {},
        itemNumber : {},
        itemPrice : {},
        sum : 0,
        freeship : false,
        itemCost : {},
        shippingPrice : 0,
        tax : 0
    };

    var currencyInfo =
    {
        isEur : false,
        isRur : false,
        isUsd : false,
//        isGpb : false,
        originCurr : 0,
        EUR : 0,
        RUR : 0,
        USD : 0,
        exchangerate : (68.2), //default is RUR
        currentCurrency : ''
    };
    var newCurrency;

currencyInfo.isEur = confirm('Will you input prices in EUR?');

if (currencyInfo.isEur) {} else {
    currencyInfo.isRur = confirm('Will you input prices in RUR?');
if (currencyInfo.isRur) {} else {
    currencyInfo.isUsd = confirm('Will you input prices in USD?');
}
}
console.log ("currencyInfo.isEur: " + currencyInfo.isEur);
console.log ("currencyInfo.isUsd: " + currencyInfo.isUsd);
console.log ("currencyInfo.isRur: " + currencyInfo.isRur);

if (currencyInfo.isEur) {
currencyInfo.currentCurrency = ' RUR'; //this is not a mistake, it is used to display origin currency
} else if (currencyInfo.isRur) {
currencyInfo.currentCurrency = ' RUR';
currencyInfo.exchangerate = +prompt("What is the current exchange rate for EUR->RUR? 1 EUR = ", '68.2');
} else if (currencyInfo.isUsd) {
currencyInfo.currentCurrency = ' USD';    
currencyInfo.exchangerate = +prompt("What is the current exchange rate for EUR->USD? 1 EUR = ", '1.11');    
} 
console.log("Current exchage rate is: " + currencyInfo.exchangerate);
// console.log('The prices will be in EUR: ' + currencyInfo.isEur);
if (currencyInfo.isEur) { console.log('The prices will be in: EUR'); } else {console.log('The prices will be in:' + currencyInfo.currentCurrency);}


function exchancecurrency (){ // 
    if (currencyInfo.isEur) {
// do nothing
    } else if (currencyInfo.isRur) {
        currencyInfo.RUR = originCurr;
        currencyInfo.EUR = currencyInfo.RUR/currencyInfo.exchangerate;
        console.log(currencyInfo.RUR + " rubles is " + currencyInfo.EUR + " at exchange rate 1 RUR = " + currencyInfo.exchangerate + " EUR");
        newCurrency = +(currencyInfo.EUR.toFixed(2));
    } else if (currencyInfo.isUsd) {
        currencyInfo.USD = originCurr;
        currencyInfo.EUR = currencyInfo.USD/currencyInfo.exchangerate;
        console.log(currencyInfo.USD + " USD is " + currencyInfo.EUR + " at exchange rate 1 USD = " + currencyInfo.exchangerate + " EUR");
        newCurrency = +(currencyInfo.EUR.toFixed(2));

    }
    //    currencyInfo.isEur=true;
    
}
 
let numberOfItems = +prompt("Please input number of items you want to order: ", '');

for (let i = 0; i<numberOfItems; i++) {
    let a = prompt("Please input name of the item", 'Jeans');
    let b = +prompt("How much it will cost you w/o shipping?", '');
    if ( typeof(a) === "string" && typeof(a) != null && a !='' && b !='' && a.length < 50 && typeof(b) != null && isNaN(b) != true) {
        
//        console.log("Item recorded to " + a + " and it will cost you " + b + " and it is " + (i+1) + " of " + numberOfItems + " total. Current number in array is (" + orderInfo.itemNumber[i] + ")");
        console.log(typeof(b));
        if (currencyInfo.isEur == false) { // exchange currency
         originCurr = b;
         exchancecurrency(); 
         b = +newCurrency;
        } else {
            // do nothing
        }   // everything is in EUR 
        console.log('current sum is ' + orderInfo.sum);
        orderInfo.itemCost[a] = b;
         orderInfo.itemPrice[i]= b;     // price of the item number [i]
         orderInfo.itemNumber[i] = i;   // number of the item number [i] yeah right
         orderInfo.ItemName[i] = a;     // name of the item number [i]
         console.log("Item recorded to " + a + " and it will cost you " + b + " and it is " + (i+1) + " of " + numberOfItems + " total. Current number in array is (" + orderInfo.itemNumber[i] + ")");
        orderInfo.sum = orderInfo.sum + b;
        console.log('current sum is ' + orderInfo.sum);
        
    }
    else {
        i--;
        continue;
    }
  }

// sorting items by price and creating copy
////////////////////////////////////////////////////////////////////////////////////////////////////

orderInfoSorted = orderInfo;










////////////////////////////////////////////////////////////////////////////////////////////////////

// creating packages
////////////////////////////////////////////////////////////////////////////////////////////////////
// function createShipment(){
//     for (let i = numberOfItems; i>=0; i--) {
//         orderInfoSorted[i]
//     }        
// }
// this function takes the item with the biggest price (after sorting min->max the biggest is the last) 
// and adds it to cheapest (first) it goes on until the optimum shipment (that does not break tax limit)
// is found. Then it records the price. THat's it for now but more is yet to come
// !!!!!!!!! Currently not correctly working !!!!!!!!!
nextCycleNumberOfItems = (numberOfItems); 
alert ("nextCycleNumberOfItems is: " + nextCycleNumberOfItems);

function createShipment(){
    console.log('beggining of createShipment');
    alert('beggining of createShipment');
    
    
    while (((nextCycleNumberOfItems-1) != nextCyclei) || ((nextCycleNumberOfItems-1) > nextCyclei)){
    alert('The most expensive item is: ' + orderInfoSorted.itemPrice[nextCycleNumberOfItems-1]);
    console.log("m " + m);
    console.log("nextCyclei+m " + (nextCyclei+m));
    orderInfoShipment.ItemName[nextCyclei+m]=orderInfoSorted.ItemName[nextCycleNumberOfItems-1];   
    orderInfoShipment.itemPrice[nextCyclei+m]=orderInfoSorted.itemPrice[nextCycleNumberOfItems-1];
    console.log("orderInfoShipment.ItemName[nextCyclei] " + orderInfoShipment.ItemName[nextCyclei+m]);
    m++;
    shipmentPrice = orderInfoSorted.itemPrice[nextCycleNumberOfItems-1];  // counting in the most expensive item price 
 /////////  
    for (let i = nextCyclei; i<(nextCycleNumberOfItems-1); i++) {
    //    if (shipmentPrice > 200) { alert("ENDING in the beggining of cycle i " + i); alert('shippingTotalPrice ' + shippingTotalPrice); break;}
        alert("i: " + i);

        alert("numberOfItems " + nextCycleNumberOfItems);
        alert("shippingTotalPrice before adding " + shippingTotalPrice);
        console.log("m should me 6 " + m);

        orderInfoShipment.ItemName[i+m]=orderInfoSorted.ItemName[i];
        orderInfoShipment.itemPrice[i+m]=orderInfoSorted.itemPrice[i]; 
        console.log('orderInfoSorted.ItemName[i]: ' + orderInfoSorted.ItemName[i]);
        console.log('orderInfoShipment.ItemName[i]: ' + (orderInfoShipment.ItemName[i]));
        console.log('orderInfoShipment.ItemName[i+m]: ' + (orderInfoShipment.ItemName[i+m]));
        console.log('i + m =  ', (i+m));    
        shippingTotalPrice = shipmentPrice; 
        shipmentPrice = shipmentPrice + orderInfoSorted.itemPrice[i];
        alert('shipmentPrice ' + shipmentPrice);

        if (shipmentPrice > 200) { 
            alert("ENDING in the end of cycle i " + i); 
            alert('shippingTotalPrice at the end ' + shippingTotalPrice); 
            console.log('Next cycle should begin at ' + i + " and end at " +  (nextCycleNumberOfItems-1));
          
            orderInfoShipment.ItemName[i+m]=orderInfoSorted.ItemName[i];
            orderInfoShipment.itemPrice[i+m]=orderInfoSorted.itemPrice[i]; 
            //m++;
            nextCyclei = i;
            nextCycleNumberOfItems = (nextCycleNumberOfItems-1); //nextCycleNumberOfItems-- ?
 
            k=i+m;
       
            break;
        }
    } 
        
    console.log('The first shipment is ready');     //создаем здесь цикл для записи массива в готовый заказ

 ////////the end of for cycle

alert("Shipping calculation stopped because next step was: " + shipmentPrice);       
console.log('');
// console.log('Next cycle should begin at ' + i );
console.log(orderInfoShipment);
console.log('');

console.log(orderInfoShipmentReady);
console.log('');
    }
}
    
////////////////////////////////////////////////////////////////////////////////////////////////////

// is there a free shipping option?
let freeShippingPrice = prompt ("What is minimum total to qualify for a free shipping?", '');

if (freeShippingPrice == null || freeShippingPrice == '') { freeShippingPrice = Infinity;
    console.log('freeShippingPrice ' + freeShippingPrice); // no free shipping available
} else {}

        if (currencyInfo.isEur == false) {
         originCurr = freeShippingPrice; // exchange currency
         exchancecurrency(); 
         freeShippingPrice = newCurrency;
        } else {
            // do nothing;
        }   // everything is in EUR 
console.log("Free shipping begins at " + freeShippingPrice);
if (orderInfo.sum < freeShippingPrice) { 
    orderInfo.shippingPrice = +prompt("How much is the shipping price?", '');
        if (currencyInfo.isEur == false) {
         originCurr = orderInfo.shippingPrice;
         exchancecurrency(); // exchange currency
         orderInfo.shippingPrice = newCurrency;   
        } else {
            // do nothing
        }   // everything is in EUR 
        
} else { 
     orderInfo.freeship = true;
    orderInfo.shippingPrice = 0;
}


console.log("freeshipping status: " + orderInfo.freeship);
if ( orderInfo.sum > 200 ) { // tax limit exceeded
orderInfo.tax = (orderInfo.sum-200)*15/100;
// console.log(typeof(orderInfo.sum));
// console.log(typeof(orderInfo.tax));
// console.log(typeof(orderInfo.shippingPrice));

console.log('The tax will be ' + orderInfo.tax + ' and the total price of shipment is ' + (orderInfo.sum+orderInfo.tax+orderInfo.shippingPrice));

let finalprice = (orderInfo.sum+orderInfo.shippingPrice+orderInfo.tax).toFixed(2);
    console.log(typeof(finalprice));
    console.log(typeof(currencyInfo.exchangerate));
if (orderInfo.shippingPrice == 0) { 
     freeshipmessage = ("free"); } else {
     freeshipmessage = (orderInfo.shippingPrice + " EUR");
}

    alert ('Total price of the items is ' + (orderInfo.sum).toFixed(2) + " EUR and the shipping is " + freeshipmessage + ". Tax is " + (orderInfo.tax.toFixed(2)) + " EUR. Please send this much money to us: " + finalprice + " EUR (" + ((finalprice*currencyInfo.exchangerate).toFixed(2)) + currencyInfo.currentCurrency + ")");
// if (orderInfo.tax > orderInfo.shippingPrice) {
// //    alert("Tax will cost you more than shipping. Maybe you should buy these items in two different packages? Your total is " + orderInfo.sum + " and the shipping is " + orderInfo.shippingPrice + " and tax is " + orderInfo.tax + " Total order will be " + (orderInfo.sum+orderInfo.shippingPrice+orderInfo.tax));
//     console.log("Tax will cost you more than shipping. Maybe you should buy these items in two different packages? Your total is " + orderInfo.sum + " and the shipping is " + orderInfo.shippingPrice + " and tax is " + orderInfo.tax + " Total order will be " + (orderInfo.sum+orderInfo.shippingPrice+orderInfo.tax))
// } else {
//     console.log('Shipping in two different orders makes no sense');
// }

} else { // tax limit not exceeded
    orderInfo.tax = 0;
    let finalprice = (orderInfo.sum+orderInfo.shippingPrice).toFixed(2);
    if (orderInfo.shippingPrice == 0) { 
        freeshipmessage = ("free"); } else {
        freeshipmessage = (orderInfo.shippingPrice + " EUR");
   }
    console.log(finalprice);
    console.log(typeof(currencyInfo.exchangerate));


    alert ('Total price of the items is ' + (orderInfo.sum).toFixed(2) + " EUR and the shipping is " + freeshipmessage + ". Please send this much money to us: " + finalprice + " EUR (" + ((finalprice*currencyInfo.exchangerate).toFixed(2)) + currencyInfo.currentCurrency + ")");
}
console.log("Price of shipping is " + orderInfo.shippingPrice + " and tax is " + orderInfo.tax);
console.log('number of items is ' + numberOfItems);
if ((2*orderInfo.shippingPrice < orderInfo.tax) && (orderInfo.tax != 0) && (orderInfo.shippingPrice != 0) && (numberOfItems > 1)) { //wtf was that? It said ship price > tax here?
    console.log("If possible ship those items in two different orders because two shipping prices (" + (2*orderInfo.shippingPrice) + ") are better than one tax price (" + orderInfo.tax + ")");
} 
console.log("_________________________________________________");
console.log(orderInfoSorted);
createShipment();
}

// In the next iteration i would like to add sorting algorythm to sort 
// the items by price and to calculate best options for shipping
// todos:
// 1. choose your preffered currency (and add at least USD option)
// 2. parse current course
// 3. sorting algorythm
// 4. calculate best shipping option
// 5. auto-parse shipping
// 6. add option to translate output messages to Russian (and other language support)
// known bugs:
// 1. createShpiment not working correctly
// 2. bad idea to mark code lines in git-notes cause you know you literally write more and more code and those lines get messed up
//
//
//
//
//