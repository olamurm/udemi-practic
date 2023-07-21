/*
Задания на использование циклов и условий
Давайте перед серьезными практическими задачами потренируемся использовать циклы и условия.

Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.

Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

Все данные для решения задач мы с вами рассмотрели в предыдущих обязательных уроках. Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

Задачи:

При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

При помощи цикла for выведите чётные числа от 2 до 10 включительно

Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

 Цикл, который нужно переписать:
 
 for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
 }
Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
*/
// Место для первой задачи
function firstTask() {
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }

}
firstTask()
// Место для второй задачи
function secondTask() {
    for (let i = 20; i > 9; i--) {
        if (i === 13) break;
        console.log(i);
    }
}
secondTask()
// Место для третьей задачи
function thirdTask() {
    for (let i = 2; i < 11; i++) {
        if (!(i % 2))
            console.log(i);
    }
}
thirdTask()
// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;
    while (i < 17) {
        if (i % 2)
            console.log(i);
        i++;
    }
}
fourthTask()
// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    let i = 0;
    while (i < 6) {
        arrayOfNumbers[i] = i + 5;
        i++;
    }

    fifthTask()
    // Не трогаем
    return arrayOfNumbers;
}