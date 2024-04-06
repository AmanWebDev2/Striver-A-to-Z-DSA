function maxProfit(prices:number[]):number {
    let mini = prices[0];
    let profit = 0;
    for(let i=1; i<prices.length; i++) {
        profit = Math.max(prices[i] - mini,profit);
        mini = Math.min(mini,prices[i]);
    }
    return profit;
}

let prices = [7,1,5,3,6,4]
console.log(maxProfit(prices));