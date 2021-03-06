"use strict";
let mountains = [
    {
        name: "Kilimanjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    },
];
//#1
const findNameOfTallestMountain = (anArrayOfMountains) => {
    let tallestMountain = anArrayOfMountains[0];
    anArrayOfMountains.forEach((mountain) => {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
        else if (tallestMountain === undefined) {
            return "";
        }
    });
    return tallestMountain.name;
};
console.log(findNameOfTallestMountain(mountains));
let products = [
    {
        name: "Drill",
        price: 50,
    },
    {
        name: "Lightsaber",
        price: 150000,
    },
    {
        name: "Table Saw",
        price: 300,
    },
];
// FOR EACH METHOD
// const calcAverageProductPrice = (anArrayOfProducts: Product[]): number => {
//   let sum = 0;
//   anArrayOfProducts.forEach((value) => {
//     sum += value.price;
//   });
//   let average = sum / anArrayOfProducts.length;
//   if (anArrayOfProducts.length === 0) {
//     return 0;
//   } else {
//     return average;
//   }
// };
// console.log(calcAverageProductPrice(products));
// REDUCE METHOD
const calcAverageProductPrice = (anArrayOfProducts) => {
    if (anArrayOfProducts.length === 0) {
        return 0;
    }
    else {
        return (anArrayOfProducts.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price;
        }, 0) / anArrayOfProducts.length);
    }
};
console.log(calcAverageProductPrice(products));
let inventory = [
    {
        product: { name: "motor", price: 10.0 },
        quantity: 10,
    },
    {
        product: { name: "sensor", price: 12.5 },
        quantity: 4,
    },
    {
        product: { name: "LED", price: 1.0 },
        quantity: 20,
    },
];
const calcInventoryValue = (anArrayOfInventoryItems) => {
    if (anArrayOfInventoryItems === []) {
        return 0;
    }
    else {
        let total = 0;
        anArrayOfInventoryItems.forEach((item) => {
            total += item.product.price * item.quantity;
        });
        return total;
    }
};
console.log(calcInventoryValue(inventory));
