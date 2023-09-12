// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res += nums[i]
  }
  return res
}

export function sum2(...nums: Array<number>): number {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  return nums.reduce((acc, el) => acc + el, 0)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  if (a + b > c && b + c > a && a + c > b) {
    if (a === b && b === c) return '10'
    if (a === b || b === c || c === a) return '01'
    return '11'
  } else {
    return '00'
  }
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  const numbersArr = number.toString().split('')
  let res = 0
  for (let i = 0; i < numbersArr.length; i++) {
    res += +numbersArr[i]
  }
  return res
}

export function getSum2(number: number): number {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  return number.toString().split('')
    .reduce((acc, el) => acc + +el, 0)
}

// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  let even = 0
  let odd = 0
  for (let i = 0; i < arr.length; i++) {
    i % 2 === 0 ? even += arr[i] : odd += arr[i]
  }
  return even > odd
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.

export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  return array
    .filter((num) => num > 0 && Number.isInteger(num))
    .map(element => element * element)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  let res = 0
  for (let i = 0; i <= N; i++) {
    res += i
  }
  return res
}

export function sumFirstNumbers2(N: number): number {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  if (N === 0) return 0;
  return N + sumFirstNumbers2(N - 1);
}

export function sumFirstNumbers3(N: number): number {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  return (N * (N + 1)) / 2
}

// ...и "лапку" вверх!!!!

// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  let res = []
  for (let i = 0; i < banknotes.length; i++) {
    while (amountOfMoney >= banknotes[i]) {
      amountOfMoney -= banknotes[i]
      res.push(banknotes[i])
    }
  }
  return res
}
