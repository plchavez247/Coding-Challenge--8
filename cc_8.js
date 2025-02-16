//Task 1: Function Declaration 
 function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);// Using formula to compute net salary
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);// added toFixed to round net salary to two decimal places
 };

 calculateSalary(5000, 500, 0.1);
 calculateSalary(7000, 1000, 0.15); //Using given test data to see expected output

