function sumExpense(...expenses: number[]) {
return expenses.reduce((a, b) => a + b, 0);
}

let result = sumExpense(65, 250, 99, 84, 95, 65,10);

console.log(`Your Total Expense is: ₹${result} `);