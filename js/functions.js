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
  const numbers = [];
  const result = stringOrNumber.toString().replaceAll(' ','').split('');
  for (let i = 0; i < result.length; i++) {
    if (!isNaN(result[i])) {
      numbers.push(result[i]);
    }
  }
  if (numbers.length) {
    return numbers.join('');
  }
  return NaN;
}

console.log(`результат: ${getNumber('2023 год')}`);
console.log(`результат: ${getNumber('1 кефир, 0.5 батона')}`);
console.log(`результат: ${getNumber('а я томат')}`);
console.log(`результат: ${getNumber(-1)}`);

// тернарный оператор
function getNumber2(stringOrNumber) {
  const numbers = [];
  const result = stringOrNumber.toString().replaceAll(' ','').split('');
  for (let i = 0; i < result.length; i++) {
    !isNaN(result[i]) && numbers.push(result[i]);
  }
  return numbers.length ? numbers.join('') : NaN;
}

console.log(`результат: ${getNumber2('2023 год')}`);
console.log(`результат: ${getNumber2('1 кефир, 0.5 батона')}`);
console.log(`результат: ${getNumber2('а я томат')}`);
console.log(`результат: ${getNumber2(-1)}`);
console.log(`результат: ${getNumber2(1.5)}`);
