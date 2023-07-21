//============= Метод trim()=====
//для строк: убирает пробелы в начале и в конце строки (если вместо названия фильма юзер введет пробелы - строка не пустая, проверки нет)

'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "").trim();

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("!!!Сколько фильмов вы уже посмотрели?", "");
    }
    start();

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    function rememberMyFilms() {
        for (let i = 1; i < 3; i++) {
            let a = prompt("Один из последних фильмов", ""),
                b = +prompt("На сколько оцените его?", "");
            // console.log(`i=${i}`);
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
            }
            else i--;
        }
    }
    rememberMyFilms();

    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    }
    detectPersonalLevel();

    function showMyBD(hidden) {
        if (!hidden)
            console.log(personalMovieDB)
    }
    showMyBD(personalMovieDB.privat);

    function writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`, "")
        }
    }
    writeYourGenres()
