// ========== 数据与变量 ==========
let shoppingList = ["牛奶", "鸡蛋", "面包"];
console.log("初始购物清单:", shoppingList);

// ========== 数组应用 ==========
// 向购物清单中添加两样物品
shoppingList.push("苹果", "酸奶");
console.log("添加后的清单:", shoppingList);

// 从购物清单中删除最后一项物品
const removed = shoppingList.pop();
console.log(`删除了: ${removed}`);
console.log("删除后的清单:", shoppingList);

// ========== 条件与循环 ==========
// 当购物清单超过5项时，输出"你的购物车满了"
function checkCart(list) {
  if (list.length > 5) {
    console.log("你的购物车满了");
  } else {
    console.log(`购物车还有空间，当前 ${list.length} 项`);
  }
}

checkCart(shoppingList);

// 使用循环语句遍历购物清单，以编号形式输出
for (let i = 0; i < shoppingList.length; i++) {
  console.log(`${i + 1}. ${shoppingList[i]}`);
}

// ========== 函数与对象 ==========
// 创建一个函数，接受物品名称作为参数，返回该物品是否在购物清单中
function isInCart(itemName) {
  return shoppingList.includes(itemName);
}

console.log("牛奶在清单中?", isInCart("牛奶"));
console.log("西瓜在清单中?", isInCart("西瓜"));

// 创建一个购物物品对象，包括物品名称、价格和数量
let item = {
  name: "牛奶",
  price: 12,
  quantity: 1,
};

console.log("购物物品对象:", item);
