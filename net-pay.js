// Function to calculate Payee (Tax) based on sample tax rates
function calculatePayee(basicSalary) {
    let payee = 0;
    // Sample tax rates
    const taxRates = [
        { lower: 0, upper: 20000, rate: 0.1 },
        { lower: 20001, upper: 35000, rate: 0.15 },
        { lower: 35001, upper: 50000, rate: 0.20 },
        { lower: 50001, upper: Infinity, rate: 0.25 }
    ];

    for (let i = 0; i < taxRates.length; i++) {
        if (basicSalary > taxRates[i].lower) {
            const taxableAmount = Math.min(basicSalary - taxRates[i].lower, taxRates[i].upper - taxRates[i].lower);
            payee += taxableAmount * taxRates[i].rate;
        } else {
            break;
        }
    }

    return payee;
}

// Function to calculate NHIF deductions
function calculateNHIF(basicSalary) {
    // Sample NHIF rates
    if (basicSalary <= 5999) return 200;
    if (basicSalary <= 9999) return 300;
    if (basicSalary <= 14999) return 400;
    if (basicSalary <= 19999) return 500;
    return 600; // Default maximum value
}

// Function to calculate NSSF deductions
function calculateNSSF(basicSalary) {
    // Sample NSSF rate
    const nssfRate = 0.05; // 5% of basic salary
    return basicSalary * nssfRate;
}

// Function to calculate gross salary
function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const payee = calculatePayee(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    const totalDeductions = payee + nhif + nssf;
    const netSalary = grossSalary - totalDeductions;

    return {
        grossSalary: grossSalary,
        payee: payee,
        nhif: nhif,
        nssf: nssf,
        totalDeductions: totalDeductions,
        netSalary: netSalary
    };
}

// Get user input
const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));

// Validate input
if (isNaN(basicSalary) || isNaN(benefits)) {
    window.alert("Invalid input. Please enter numeric values for basic salary and benefits.");
} else {
    // Calculate and display net salary
    const salaryDetails = calculateNetSalary(basicSalary, benefits);
    window.alert("Gross Salary:"+ salaryDetails.grossSalary);
    window.alert("Payee (Tax):"+ salaryDetails.payee);
    window.alert("NSSF Deductions:"+ salaryDetails.nssf);
    window.alerrt("Total Deductions:"+ salaryDetails.totalDeductions);
    window.alert("NHIF Deductions:"+ salaryDetails.nhif);
    window.alert("Net Salary:"+ salaryDetails.netSalary);
}
