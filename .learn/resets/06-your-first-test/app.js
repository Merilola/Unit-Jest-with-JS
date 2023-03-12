
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))



module.exports = { sum };


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen  = function(valueInDollar){
   
    let valueInYen = valueInDollar / oneEuroIs['USD']
    
    return valueInYen * oneEuroIs['JPY'];
}

const fromEuroToDollar = function(valueInEuro){
    
    let valueInDollar = valueInEuro * 1.2;
    
    return valueInDollar;
}

const fromYenToPound  = function(valueInYen){
   
    let euro = valueInYen / oneEuroIs['JPY'];
  
    return euro * oneEuroIs['GBP'];
}

console.log(fromEuroToDollar(1));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));

module.exports = { sum , fromDollarToYen, fromEuroToDollar, fromYenToPound }
