function checkStringLength (someString, someLength) {
  if (someString.length >= someLength) {
    return true;
  }
}

checkStringLength ('hjjhdvhcbsdkgkjbkbdc', 20);

function checkpalindrom(someString) {
  const result = someString.toLowerCase().replaceAll(' ', '').split('');
  if (result.join() === (result.reverse()).join()) {
    return true;
  } else {
    return false;
  }
}

checkpalindrom('Лёша на полке клопа нашёл ');


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

function addCharToString (someString, charLimit, charToAdd) {
  let newStr;
  if (someString.length < charLimit) {
    newStr = someString;
    for (let i = 1; newStr.length < charLimit; i++){
      if ((charToAdd + newStr).length > charLimit) {
        const cutlimit = charLimit - newStr.length;
        const cutCharToAdd = charToAdd.substring(0, cutlimit);
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
addCharToString('1', 2, '0'); // '01'
addCharToString('1', 4, '0');// '0001'
addCharToString('q', 4, 'werty');// 'werq'
addCharToString('q', 4, 'we');// 'wweq'
addCharToString('qwerty', 4, '0'); // 'qwerty'
