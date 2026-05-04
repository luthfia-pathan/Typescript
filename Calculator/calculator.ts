/*
Data :-
1) Intial amount
2) annual contribution
3) expected return
4) duration
 */

type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type InvestmentResults = {
  year: string;
  totalAmount: number;
  totalContribution: number;
  totalInterest: number;
};

type CalculationResult = InvestmentResults[] | string;

function calculationInvestment(data: InvestmentData): CalculationResult {
  const { initialAmount, annualContribution, expectedReturn, duration } = data;
  if(initialAmount < 0 ) { return "Initial amount cannot be negative"; }
  if(expectedReturn <= 0 ) { return "Expected return must be at least 0"; }
  if(duration <= 0 ) { return "No valid amount of years provided"; }
  
  let total = initialAmount;
  let totalContribution = 0;
  let totalInterestEarned = 0;
  const results: InvestmentResults[] = [];

  for(let year = 1; year <= duration; year++) {
    total = total *(1 + expectedReturn);
    totalInterestEarned = total - totalContribution - initialAmount;
    totalContribution += annualContribution;
    total += annualContribution;
    
    results.push({
      year: `Year ${year}`,
      totalAmount: total,
      totalContribution,
      totalInterest: totalInterestEarned
    });
}
  return results;
}

function printResults(results: CalculationResult) {
  if(typeof results === "string") {
    console.error(results);
    return;
  }

  for(const result of results) {
    console.log(`Year: ${result.year}`);
    console.log(`Total Amount: ${result.totalAmount.toFixed(0)}`);
    console.log(`Total Contribution: ${result.totalContribution.toFixed(0)}`);
    console.log(`Total Interest Earned: ${result.totalInterest.toFixed(0)}`);
    console.log('-----------------------------');
  }
}

const investmentData: InvestmentData = {
  initialAmount: 10000,
  annualContribution: 5000,
  expectedReturn: 0.07,
  duration: 20
};

const results = calculationInvestment(investmentData);

printResults(results);
