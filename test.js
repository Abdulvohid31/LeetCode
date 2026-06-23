// class BankAccount {
//     #balance;
//     #transactionLog = [];
  
//     constructor(initialBalance) {
//       this.#balance = initialBalance;
//     }
  
//     deposit(amount) {
//       this.#balance += amount;
//       this.#transactionLog.push(`+${amount}`);
//       return this;
//     }
  
//     withdraw(amount) {
//       if (amount > this.#balance) throw new Error("Insufficient funds");
//       this.#balance -= amount;
//       this.#transactionLog.push(`-${amount}`); 
//       return this;
//     }
   
//     get summary() {
//       return `Balance: ${this.#balance} | Txns: ${this.#transactionLog.join(", ")}`;
//     }
//   }
  
//   const account = new BankAccount(100);
//   account.deposit(50).deposit(25).withdraw(30);
//   console.log(account.summary);
//   console.log(account.hasOwnProperty("#balance")); 
// const handler = {
//     get(target, prop, receiver) { 
//       if (prop in target) {
//         return Reflect.get(target, prop, receiver) * 2; 
//       }
//       return `missing:${prop}`;
//     }, 
//     set(target, prop, value) {
//       if (typeof value !== "number") {
//         throw new TypeError("Only numbers allowed");
//       }
//       Reflect.set(target, prop, value + 10); 
//       return true; 
//     }, 
//     has(target, prop) { 
//       return prop.startsWith("x") ? false : prop in target; 
//     }, 
//   };
   
//   const store = new Proxy({ xray: 5, zoom: 8 }, handler); 
   
//   store.nova = 3; 

//   console.log(store.ghost); 
//   console.log("zoom" in store); 
//   console.log("xray" in store); 
function name(params) {
    //   console.log(store.xray);
//   console.log(store.nova);
}