// 1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
function repeatString(string, repeat, space) {
  let res = []
  for (let i = 0; i < repeat; i++) {
    res.push(string)
  }
  return res.join(space)
}

repeatString("yo", 3, " ") //=> "yo yo yo"
repeatString("yo", 3, ",") //=> "yo,yo,yo"
repeatString("yo", 3, ", ")// => "yo, yo, yo"
repeatString("yo", 0, ", ") //=> ""
repeatString("yo", 1, ", ") //=> "yo"


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
function checkStart(string, includes) {
  return string.toLowerCase().includes(includes)
}

checkStart("Incubator", "inc") //=> true
checkStart("Incubator", "yo") //=> false

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
function truncateString(string, number) {
  return `${string.slice(0, number)}...`
}

truncateString("Всем студентам инкубатора желаю удачи!", 10) // => "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
function getMinLengthWord(string) {
  if (typeof string !== 'string' || string.trim() === '') {
    return null
  }
  return string.split(' ').sort((a,b) => a.length - b.length)[0]
}

getMinLengthWord('Всем студентам инкубатора желаю удачи.'); // => "Всем"
getMinLengthWord(''); // => null
getMinLengthWord(123); // => null
getMinLengthWord(true);// => null
getMinLengthWord(undefined); // => null

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
function setUpperCase(string) {
  const arr = string.toLowerCase().split(' ');
  let res = ''
  for (let i = 0; i < arr.length; i++) {
    const upperLetter = arr[i].toUpperCase().slice(0, 1)
    res += `${upperLetter}${arr[i].slice(1)} `
  }
  return res
}

// console.log(setUpperCase('всем стУдентам инкуБатора Желаю удачИ')); // => "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false










