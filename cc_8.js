//Task 1: Function Declaration 
 function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);// Using formula to compute net salary
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);// added toFixed to round net salary to two decimal places
 };

 calculateSalary(5000, 500, 0.1);
 calculateSalary(7000, 1000, 0.15); //Using given test data to see expected output

 //Task 2: Function Expression

 const calculateDiscount = function (price, discountRate) {
    let finalPrice = price - (price * discountRate);// Using formula to compute final price
    console.log(`Final Price: $${finalPrice.toFixed(2)}`);// logging final price with toFixed to round to two decimal places
    
 };

 calculateDiscount(100, 0.2);
 calculateDiscount(250, 0.15);//Using given test data