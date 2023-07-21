/*
Задание на создание правильных типов данных

Задачи:

Создайте переменную с названием магазина (магазин - store, имя - name) и поместите в неё любое название на ваш выбор.

Создайте объект под названием storeDescription

Во внутрь этого объекта напрямую поместите свойство budget и укажите его как 10000. Напрямую - это сразу внутри фигурных скобок, мы его расширяем на месте

Во внутрь объекта storeDescription напрямую поместите свойство employees. Это должен быть массив, который содержит имена трех сотрудников на ваш выбор

Во внутрь объекта storeDescription напрямую поместите свойство products. Это должен быть тоже объект, который содержит два товара и их цену. То есть, нужно создать пару ключ-значение в виде товар: цена Данные на ваш выбор.

Во внутрь объекта storeDescription напрямую поместите свойство open. Тут можно контролировать: или магазин открыт, или закрыт, то есть логическое значение. Сделайте его открытым

Это самые базовые операции с типами данных, и да, у нас дальше будут конкретные уроки по объектам и массивам. Но там мы будем в них углубляться, а базовый синтаксис мы уже должны знать к тому моменту.
*/
const storeName = "MyFirstStore"
let storeDescription = {
    budget: 10000,
    employees: ["Olga", "Nadia", "Jyli"],
    products: {
        goods1: 50,
        goods2: 20
    },
    open: true
}