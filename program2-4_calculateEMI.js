//Write a function that accepts interest, principle, and tenure and calculates EMI

function calculateEmi(principleAmount, interestRate, loanTenure)
{
    let r = interestRate/(12*100)
    let n = loanTenure*12
    let emi = (principleAmount*r*((1+r)**n)) / (((1+r)**n) -1) 
    return emi
}

console.log("EMI is : ",calculateEmi(5000000,9.5,15));


