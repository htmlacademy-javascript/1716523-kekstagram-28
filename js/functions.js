function checkStringLength (someString, someLength) {
  if (someString.length >= someLength) {
    return true;
  }
}

checkStringLength ('hjjhdvhcbsdkgkjbkbdc', 20);

function checkpalindrom(someString) {
  const result = someString.toLowerCase().replaceAll(' ', '').split('');
  // console.log(result);
  if (result.join() === (result.reverse()).join()) {
    return true;
  } else {
    return false;
  }
}

checkpalindrom('Лёша на полке клопа нашёл ');

// console.log(checkpalindrom('aaa'));
// console.log(checkpalindrom('довод'));
// console.log(checkpalindrom('aaa aaaa  aaaaaa'));
// console.log(checkpalindrom('Лёша на полке клопа нашёл '));


function getNumber(stringOrNumber) {
  const numbers = [];
  const result = stringOrNumber.toString().replaceAll(' ','').split('');
  for (let i = 0; i < result.length; i++) {
    if (!isNaN(result[i])) {
      numbers.push(result[i]);
    }
  }
  if (numbers.length) {
    return parseInt(numbers.join(''), 10);
  }
  return NaN;
}

getNumber('2023 год');
// console.log(`результат: ${getNumber('2023 год')}`);
// console.log(`результат: ${getNumber('1 кефир, 0.5 батона')}`);
// console.log(`результат: ${getNumber('а я томат')}`);
// console.log(`результат: ${getNumber(-1)}`);
// console.log(`результат: ${getNumber('агент 007')}`);

// тернарный оператор
// function getNumber2(stringOrNumber) {
//   const numbers = [];
//   const result = stringOrNumber.toString().replaceAll(' ','').split('');
//   for (let i = 0; i < result.length; i++) {
//     !isNaN(result[i]) && numbers.push(result[i]);
//   }
//   return numbers.length ? parseInt(numbers.join(''), 10) : NaN;
// }

// getNumber2('2023 год');
// console.log(`результат: ${getNumber2('2023 год')}`);
// console.log(`результат: ${getNumber2('1 кефир, 0.5 батона')}`);
// console.log(`результат: ${getNumber2('а я томат')}`);
// console.log(`результат: ${getNumber2(-1)}`);
// console.log(`результат: ${getNumber2(1.5)}`);
// console.log(`результат: ${getNumber2('агент 007')}`);


function addCharToString (someString, charLimit, charToAdd) {
  let newStr;
  if (someString.length < charLimit) {
    newStr = someString;
    for (let i = 1; newStr.length < charLimit; i++){
      if ((charToAdd + newStr).length > charLimit) {
        const cutlimit = charLimit - newStr.length;
        const cutCharToAdd = charToAdd.substring(0, cutlimit);
        // console.log('обрезанный', cutCharToAdd);
        newStr = cutCharToAdd + newStr;
      } else {
        newStr = charToAdd + newStr;
      }
    }

  } else {
    newStr = someString;
  }
  return newStr;
}
addCharToString('q', 4, 'we');
// Добавочный символ использован один раз
addCharToString('1', 2, '0'); // '01'

// Добавочный символ использован три раза
addCharToString('1', 4, '0');// '0001'

// Добавочные символы обрезаны с конца
addCharToString('q', 4, 'werty');// 'werq'

// Добавочные символы использованы полтора раза
addCharToString('q', 4, 'we');// 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
addCharToString('qwerty', 4, '0'); // 'qwerty'
