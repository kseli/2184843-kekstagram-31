/*Функция для проверки длины строки.
Она принимает строку, которую нужно проверить, и максимальную длину
и возвращает true, если строка меньше или равна указанной длине,
и false, если строка длиннее.*/

const lengthOfString = function (string, maxLength) {
  return string.length <= maxLength;
}

lengthOfString('Тестовая строка', 14);


//Функция для проверки, является ли строка палиндромом.

const isPalindrom = function (string) {
  let normalString = (string.replaceAll(' ', '')).toLowerCase();
  let testString = '';

  for (i = normalString.length - 1; i >= 0; i--) {
    testString += normalString[i];
  }

  return testString === normalString;
}

isPalindrom('доВод');
