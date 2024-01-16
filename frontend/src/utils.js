export const addIndexToObjects = (array) => {
 return array.map((item, index) => ({ ...item, index }));
};

export function cheapestLicense(licenses) {
 try {
  let cheapestPrice = Infinity;
  let cheapestCurrency = '';
  for (const license of licenses) {
   const numericPrice = parseFloat(license.price);
   if (numericPrice < cheapestPrice) {
    cheapestPrice = numericPrice;
    cheapestCurrency = license.currency;
   }
  }
  if (cheapestCurrency === '$') {
   return `${cheapestCurrency}${cheapestPrice.toFixed(2)}`;
  }
  else {
   return `${cheapestPrice.toFixed(2)}${cheapestCurrency}`;
  }
 } catch (error) {
  return '0.00€'
 }
}

export const dummyLicenses = {
 "licenses": [
  {
   "currency": "€",
   "license_type": "B",
   "price": "25.00",
  },
  {
   "currency": "€",
   "license_type": "P",
   "price": "55.00",
  },
  {
   "currency": "€",
   "license_type": "U",
   "price": "100.00",
  }
 ]
};