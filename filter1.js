const countryNumbers = [12,34,34,23,22,22,10]


const checkCountryNum = (numbers) => {
     const checkPlayerNumber = numbers.filter(num => num!==34)
     return checkPlayerNumber
}
console.log(checkCountryNum(countryNumbers))