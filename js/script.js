/*24. Практика, ч2. Применяем условия и циклы */
// Задание на урок:
//1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

'use strict';

// Код возьмите из предыдущего домашнего задания
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
// возвращаем пользователя к вопросам опять

repeat: for (let i = 1; i < 3; i++) {
    let a = prompt("Один из последних фильмов", "");
    console.log(`i=${i}`);
    if (a != null && (a.length < 50 && a.length > 0)) {
        // console.log(`a.length=${a.length} a=${a} i=${i}`);
        let b = +prompt("На сколько оцените его?", "");
        personalMovieDB.movies[a] = b;
    } else {
        // console.log(`a2=${a} i=${i}`);
        i--;
        continue repeat;
    }
}
// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB)

    // 4) Потренироваться и переписать цикл еще двумя способами


    // // 1 способ

    // 'use strict';
    // const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    // const personalMovieDB = {
    //     count: numberOfFilms,
    //     movies: {},
    //     actors: {},
    //     genres: [],
    //     privat: false
    // };
    // for (let i = 1; i < 3; i++) {
    //     let a = prompt("Один из последних фильмов", ""),
    //         b = +prompt("На сколько оцените его?", "");
    //     console.log(`i=${i}`);
    //     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    //         personalMovieDB.movies[a] = b;
    //     }
    //     else i--;
    // }
    // if (personalMovieDB.count < 10) {
    //     alert("Просмотрено довольно мало фильмов");
    // } else if (personalMovieDB.count < 30) {
    //     alert("Вы классический зритель");
    // } else if (personalMovieDB.count > 30) {
    //     alert("Вы киноман");
    // } else {
    //     alert("Произошла ошибка");
    // }

    // console.log(personalMovieDB)

    // // 2 способ

    // 'use strict';
    // const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    // const personalMovieDB = {
    //     count: numberOfFilms,
    //     movies: {},
    //     actors: {},
    //     genres: [],
    //     privat: false
    // };

    // let i = 1;
    // repeat: while (i < 3) {
    //     let a = prompt("Один из последних фильмов", "");
    //     console.log(`i=${i}`);
    //     if (a != null && (a.length < 50 && a.length > 0)) {
    //         console.log(`a.length=${a.length} a=${a} i=${i}`);
    //         let b = +prompt("На сколько оцените его?", "");
    //         personalMovieDB.movies[a] = b;
    //         i++;
    //     } else {
    //         continue repeat;
    //     }
    // }

    // personalMovieDB.count < 10 ?
    //     alert("Просмотрено довольно мало фильмов") :
    //     personalMovieDB.count < 30 ?
    //         alert("Вы классический зритель") :
    //         personalMovieDB.count > 30 ?
    //             alert("Вы киноман") :
    //             alert("Произошла ошибка");


    // // 3 способ

    // 'use strict';
    // const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    // const personalMovieDB = {
    //     count: numberOfFilms,
    //     movies: {},
    //     actors: {},
    //     genres: [],
    //     privat: false
    // };

    // let i = 1;
    // repeat: while (i < 3) {
    //     let a = prompt("Один из последних фильмов", "");
    //     console.log(`i=${i}`);
    //     a != null && (a.length < 50 && a.length > 0 ? (
    //         console.log(`a.length=${a.length} a=${a} i=${i}`),
    //         let b = +prompt("На сколько оцените его?", ""),
    //             personalMovieDB.movies[a] = b,
    //             i++
    //         ) : continue repeat;
    // }

    // personalMovieDB.count < 10 ?
    //     alert("Просмотрено довольно мало фильмов") :
    //     personalMovieDB.count < 30 ?
    //         alert("Вы классический зритель") :
    //         personalMovieDB.count > 30 ?
    //             alert("Вы киноман") :
    //             alert("Произошла ошибка");

    /* 
    // ПРОВЕРКА КОДА
    // /* Задание на урок:
    
    // 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
    
    // 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
    // отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
    // возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
    // str.length - и получить её длину)
    
    // 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
    // "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
    // "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
    
    // 4) Потренироваться и переписать цикл еще двумя способами*/

    // 'use strict';

    // const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    // const personalMovieDB = {
    //     count: numberOfFilms,
    //     movies: {},
    //     actors: {},
    //     genres: [],
    //     privat: false
    // };

    // for (let i = 0; i < 2; i++) {
    //     const a = prompt('Один из последних просмотренных фильмов?', ''),
    //           b = prompt('На сколько оцените его?', '');

    //     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    //         personalMovieDB.movies[a] = b;
    //         console.log('done');
    //     } else {
    //         console.log('error');
    //         i--;
    //     }
    // }

    // if (personalMovieDB.count < 10) {
    //     console.log("Просмотрено довольно мало фильмов");
    // } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    //     console.log("Вы классический зритель");
    // } else if (personalMovieDB.count >= 30) {
    //     console.log("Вы киноман");
    // } else {
    //     console.log("Произошла ошибка");
    // }

    // console.log(personalMovieDB);