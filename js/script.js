// ==================== ЗАМЫКАНИЕ =================
// https://medium.com/nuances-of-programming/%D1%8F-%D0%BD%D0%B8%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%BD%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BB-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%87%D0%B0%D1%81%D1%82%D1%8C-%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F-3c3f02041970
// Ключевое понятие, которое нужно запомнить, это то, что когда функция объявляется, то она содержит описание функции и замыкание. Замыкание — это коллекция всех переменных из области видимости во время создания функции.
// Когда функция создана и передаётся куда - либо, или возвращается из другой функции, то она носит с собой рюкзак.А в этом рюкзаке хранятся все переменные, которые были в области видимости во время создания этой функции.
//
let val = 7;
function createAdder() {
    function addNumbers(a, b) {
        let ret = a + b;
        return ret;
    }
    return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log('пример функции, возвращающей функцию: ', sum);

function createCounter() {
    let counter = 0;
    const myFunction = function () {
        counter = counter + 1;
        return counter;
    }
    return myFunction
}
const increment = createCounter()
const c1 = increment()

const c2 = increment()
const c3 = increment()

console.log('пример приращения', c1, c2, c3)