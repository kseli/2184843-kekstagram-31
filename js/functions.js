/*Функция для проверки длины строки.
Она принимает строку, которую нужно проверить, и максимальную длину
и возвращает true, если строка меньше или равна указанной длине,
и false, если строка длиннее.*/

const lengthOfString = function (string, maxLength) {
  return string.length <= maxLength;
}

lengthOfString('Тестовая строка', 14);
