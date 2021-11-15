function coinChange(amount){
    let penny = 1;
    let nickel = 5;
    let dime = 10;
    let quarter = 25;
    let dollar = 100; 
    let result = {};

    while (amount > 0){
        let dollarCount = 0;
        let quarterCount = 0;
        let dimeCount = 0;
        let nickelCount = 0;
        let pennyCount = 0;

        if(amount>=dollar){
            for(let i =dollar; i<=amount; i++){
                amount = amount - dollar;
                dollarCount++;
            }
            result.Dollars = dollarCount;
        }            

        else if(amount>=quarter){
            for(let i =quarter; i<=amount; i++){
                amount = amount - quarter;
                quarterCount++;
            }
            result.Quarters = quarterCount;
        }

        else if(amount>=dime){
            for(let i = dime; i<=amount; i++){
                amount = amount - dime;
                dimeCount++;
            }
            result.Dimes = dimeCount;
        }

        else if(amount>=nickel){
            for(let i = nickel; i<=amount; i++){
                amount = amount - nickel;
                nickelCount++;
            }
            result.Nickels = nickelCount; 
        }

        else if(amount>=penny){
            for(let i = 0; penny<=amount; i++){
                amount = amount - penny;
                pennyCount++;
            }
            result.Pennies = pennyCount;
        }
    }

    return result;
}

console.log(coinChange(78));
console.log(coinChange(158));
console.log(coinChange(5));
console.log(coinChange(18));