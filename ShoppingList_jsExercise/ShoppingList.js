// ========== Data & Variables ==========
let shoppingList = ["牛奶", "鸡蛋", "面包"];
console.log("初始购物清单:", shoppingList);

// ========== Array Operations ==========
// Add two items to the shopping list
shoppingList.push("苹果", "酸奶");
console.log("添加后的清单:", shoppingList);

// Remove the last item from the shopping list
const removed = shoppingList.pop();
console.log(`删除了: ${removed}`);
console.log("删除后的清单:", shoppingList);

// ========== Conditions & Loops ==========
// When the shopping list has more than 5 items, log "Your cart is full"
function checkCart(list) {
  if (list.length > 5) {
    console.log("你的购物车满了");
  } else {
    console.log(`购物车还有空间，当前 ${list.length} 项`);
  }
}

checkCart(shoppingList);

// Loop through the shopping list and print each item with a number
for (let i = 0; i < shoppingList.length; i++) {
  console.log(`${i + 1}. ${shoppingList[i]}`);
}

// ========== Functions & Objects ==========
// Create a function that takes an item name and returns whether it's in the list
function isInCart(itemName) {
  return shoppingList.includes(itemName);
}

console.log("牛奶在清单中?", isInCart("牛奶"));
console.log("西瓜在清单中?", isInCart("西瓜"));

// Create a shopping item object with name, price, and quantity
let item = {
  name: "牛奶",
  price: 12,
  quantity: 1,
};

console.log("购物物品对象:", item);
