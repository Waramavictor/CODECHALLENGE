const basicsalary =50000
const benefits = 4000
 
function computeNetSalary(basicsalary ,benefits){
    const NHIF =0.2
    const TaxRate =0.03
    const NSSF =0.06
}
const grosssalary = basicsalary + benefits ;

const Tax = grosssalary * TaxRate;
const NSSFDeductions = grosssalary * NSSF;
const NHIFDeductions = grosssalary * NHIF;

const netsalary = grosssalary - (Tax + NSSFDeductions + NHIFDeductions);

return{
    grosssalary,
    Tax,
    NSSFDeductions,
    NHIFDeductions,
    netsalary
}
const display = computeNetSalary(basicsalary, benefits);
console.log("grosssalary", display.grosssalary,);
console.log("Tax", display.Tax,);
console.log("NSSFDeductions", display.NSSFDeductions,);
console.log("NHIFDeductions", display.NHIFDeductions,);
console.log("netsalary", display.netsalary,);
