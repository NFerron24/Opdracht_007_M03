const calculateSupply = function (age, AmountPerDay) {
  let maxAge = 80;
  let totalAmount = AmountPerDay * 365 * (maxAge - age);

  console.log(
    "You will need" +
      " " +
      totalAmount +
      " " +
      "of zoute dropjes to last you until the ripe old age of" +
      " " +
      maxAge
  );
};
calculateSupply(10, 10);
