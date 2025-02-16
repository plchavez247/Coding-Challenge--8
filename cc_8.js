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

 //Task 3: Arrow Function

 const calculateServiceFee = (amount, serviceType) => {
    let feeRate = serviceType === "Premium" ? 0.15: serviceType === "Standard" ? 0.10: // Using ternary operator to simplify 
     serviceType === "Basic" ? 0.05 : 0.05;// service type will checked be for each service type that is true the fee will apply to its respected type
    let serviceFee = amount * feeRate;// formula to apply the fee
    console.log(`Service Fee: $${serviceFee.toFixed(2)}`);
 };

 calculateServiceFee(200, "Premium");
 calculateServiceFee(500, "Standard");//Using given test data

 //Task 4: Parameters and Arguments
 let calculateRentalCost = (days, carType, insurance = false) =>{
    let cost = carType ==="Economy" ? (40 * days): carType === "Standard" ? (60 * days):
    carType === "Luxury" ? (100 * days): 0; // calculating cost per day based on car type
    cost += insurance ? 20 * days: 0;// adding insurance cost per day 
    console.log(`Total Rental Cost: $${cost}`);
 };

 calculateRentalCost(3, "Economy", true);
 calculateRentalCost(5, "Luxury", false);// Using test data

 //Task 5: Returning Values
 function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);//Using given formula to calculate loan payment
    return `Total Payment: $${totalPayment.toFixed(2)}`;// returning function
 };

 console.log(calculateLoanPayment(1000, 0.05, 2));
 console.log(calculateLoanPayment(5000, 0.07, 3));// Log it to the console

 