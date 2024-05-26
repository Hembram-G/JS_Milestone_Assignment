const customerAccount = {
    name: "Goutam",
    balance: 1000,

    // Method to deposit money into the account
    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Successfully deposited Rs. ${amount}. Current balance: Rs. ${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    },

    // Method to withdraw money from the account
    withdraw: function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Successfully withdrawn Rs. ${amount}. Current balance: Rs. ${this.balance}`);
        } else {
            console.log("Insufficient funds or invalid withdrawal amount.");
        }
    }
};

console.log("Initial balance:", customerAccount.balance);
customerAccount.deposit(500); 
customerAccount.withdraw(300); 
customerAccount.withdraw(1500);
