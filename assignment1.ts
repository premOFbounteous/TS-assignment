/*
1------------------------------------
type usertype={
    firstName:string;
    lastName:string;
}

function greetUser(user:usertype):string {
    return `HELLO ${user.firstName} ${user.lastName}`;
}

console.log(greetUser({firstName:"John", lastName:"Doe"}));
*/

/*
2------------------------------------
let arr:number[]=[1,2,3,4,5,6]

function sum(numbers:number[]):number{
    return numbers.reduce((sum,num)=>sum+num,0)
}
console.log(sum(arr))
*/

/*
3--------------------------------------
function findMax(arr:number[]):number|null {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

let arr:number[]=[]
let arr:number[]=[1,2,3,24,5,78]

console.log(findMax(arr))
*/
/* 
4--------------------------------------- 
type productType={
    name:string,
    price:number
}

const products:productType[] = [
  { name: "Pen", price: 12 },
  { name: "Laptop", price: 1200 },
];

function getProductNames(items:productType[]):string[] {
  return items.map(item => item.name);
}

console.log(getProductNames(products))
*/


/*
5--------------------------------------
type taskType={
    type:string,
    address?:string,
    message?:string
}
const tasks:taskType[] = [
  { type: "email", address: "test@test.com" },
  { type: "log", message: "User logged in" }
];

function processTask(task:taskType):string {
  if (task.type === "email") {
    // send email
    return `Sent email to ${task.address}`;
  } else if (task.type === "log") {
    // log message
    return `Log: ${task.message}`;
  } else{
    return "it has no type"
  }
}

console.log(tasks.map(task=>processTask(task)))

------------OR--------------------
type emailTaskType={
    type:"email",
    address:string
}

type logTaskType={
    type:"log",
    message:string
}

const tasks:(emailTaskType|logTaskType)[] = [
  { type: "email", address: "test@test.com" },
  { type: "log", message: "User logged in" }
];

function processTask(task:emailTaskType|logTaskType):string {
  if (task.type === "email") {
    // send email
    return `Sent email to ${task.address}`;
  } else if (task.type === "log") {
    // log message
    return `Log: ${task.message}`;
  } else{
    return "it has no type"
  }
}

console.log(tasks.map(task=>processTask(task)))

*/

/*
// 6. Order System--------------------------------------
// Assignments:
// Type all functions and objects.
// Use Partial<> for updates and Readonly<> for summary input.

type orderType={
    id:number,
    customer:string,
    items:string[],
    status:string
}

const defaultOrder:orderType = {
  id: 0,
  customer: "John",
  items: [],
  status: "pending"
};

function createOrder(customer:string, items:string[]):orderType {
  return { ...defaultOrder, id: Date.now(), customer, items };
}

function updateOrder(order:orderType, updates:Partial<orderType>):orderType {
  return { ...order, ...updates };
}

function getOrderSummary(order:Readonly<orderType>):string {
  return `${order.customer} - ${order.status}: ${order.items.length} items`;
}

let myOrder:orderType=createOrder("Prem",["chair","table"])
console.log(myOrder)

let UpdatedOrder:Partial<orderType>={
    items:["chair","sofa"],
    status:"completed"
}
let myUpdatedOrder:orderType=updateOrder(myOrder,UpdatedOrder)
console.log(myUpdatedOrder)

console.log(getOrderSummary(myUpdatedOrder))

*/