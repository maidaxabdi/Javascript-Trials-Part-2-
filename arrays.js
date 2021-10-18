'use strict';

// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}
// const ara = ['apple','berry','cherry'];
// console.log(printIndices(ara));

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  let result = [];
  for (const i in items) {
    if (i % 2 === 0){
      result.push(items[i]);      
    }
  }
  console.log (result);
}

// const otheritem = [1,2,3,4,5,6,7,8];
// const otheritem = ['abc', 'bcd', 'asd', 'efg']
// console.log(everyOtherItem(otheritem));

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  const sortedItems = items.sort((a, b) => a - b);
  const sortedNItems = sortedItems.slice(0,n);
  sortedNItems.reverse();
  
  console.log(sortedNItems);
  }
  
  const otheritem = [100,202,30,4,55,607,72,81];
  console.log(smallestNItems(otheritem, 5));

