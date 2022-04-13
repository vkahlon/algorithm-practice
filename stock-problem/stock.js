
const maxProfit = function (prices) {
  let maxSale = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    maxSale = Math.max(maxSale, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return maxSale;
};
maxProfit();
