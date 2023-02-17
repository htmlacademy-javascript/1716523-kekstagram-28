function checkStringLength (someString, someLength) {
  if (someString.length >= someLength) {
    return true;
  }
}

function checkpalindrom(someString) {
  const result = someString.toLowerCase().replaceAll(' ', '').split('');
  console.log(result);
  if (result.join() === (result.reverse()).join()) {
    console.log(true);
  } else {
    return false;
  }
}

console.log(checkpalindrom('aaa'));
console.log(checkpalindrom('довод'));
console.log(checkpalindrom('aaa aaaa  aaaaaa'));
console.log(checkpalindrom('Лёша на полке клопа нашёл '));


function getNumber(stringOrNumber) {
  const numberFromString = [];
  const result = String(stringOrNumber).replaceAll(' ','').split('');
  for (let i = 0; i < result.length; i++) {
    if (!isNaN(result[i])) {
      numberFromString.push(result[i]);
    }
  }
  return (numberFromString.join(''));
}

console.log(getNumber('2023 год'));
console.log(getNumber('1 кефир, 0.5 батона'));
console.log(getNumber('2023 год'));
console.log(getNumber('а я томат'));
console.log(getNumber(-1));
