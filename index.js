function calculateTax(amount) {
  return amount * 0.10;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}

function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function isPalindrome(word) {
  let cleaned = word.toLowerCase();
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  let discount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discount;
}

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};