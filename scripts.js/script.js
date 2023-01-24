//1 задание----------------------

let name = prompt('Введите ваше имя');
while (name === ''){
    name = prompt('Введите ваше имя!!!');
}
let age = prompt('Введите ваш возраст');
while (age === ''){
    age = prompt('Введите ваш возраст!!!');
}
let city = prompt('Введите ваш город');
while (city === ''){
    city = prompt('Введите ваш город!!!');
}
let phone = prompt('Введите ваш номер телефона');
while (phone === ''){
    phone = prompt('Введите ваш номер телефона!!!');
}
let email = prompt('Введите ваш email');
while (email === ''){
    email = prompt('Введите ваш email!!!');
}
let company = prompt('Введите вашу компанию');
while (company === ''){
    company = prompt('Введите вашу компанию!!!');
}

alert('Меня зовут '+ name + '.' + 'Мне' + age + 'лет.' + 'Я проживаю в городе ' + city + 'и работаю в компании ' + company + '.' + 'Мои контактные данные; ' + phone + ',' + email + '.');


//2 задание----------------------
var date = new Date();
let Year = date.getFullYear()- age -1;
console.log(Year);

//3 задание----------------------
let string = prompt('Введите 6 цифр');
if (!isNaN(parseFloat(string)) && isFinite(string)){

    if((+string.charAt(0))+(+string.charAt(1))+(+string.charAt(2)) === (+string.charAt(3))+(+string.charAt(4))+(+string.charAt(5))){
    alert('Да');
} else {
    alert('Нет');
} } else {
    alert('Введите число!!!');
}

//4 задание----------------------

let a = +prompt('Введите цыфру');

if (!isNaN(parseFloat(a)) && isFinite(a)){
  if(a>0){
    alert('Верно');
} else if(a==0){
    alert('Число равно нулю');
} else {
    alert('Неверно');}
}
else
    alert("Не число!");

//5 задание----------------------

let A = 10;
let B = 2;

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(A/B);

if((A+B) > 1) {
    console.log(Math.pow(A+B, 2));
}

//6 задание----------------------

if (A>2 && A<11 && B>=6 && B<14) {
    alert('Верно');
} else {
    alert('Неверно');
}

// 7 задание----------------------

let n = +prompt('Введите цыфру от 0 до 59');

if ((!isNaN(parseFloat(n)) && isFinite(n))  && (n>=0 && n<=59)){
    switch (true) {
        case (n<=15): {
            alert('Первая четверть часа');
            break;
        }
        case (n>=16 && n<=30): {
            alert('Вторая четверть часа');
            break;
        }
        case (n>=31 && n<=45): {
            alert('Третья четверть часа');
            break;
        }
        case (n>=46 && n<=59): {
            alert('Четвертая четверть часа');
            break;
        }
    }
} else {
    alert('Вы ввели некорректные данные!!!');
}

// 8 задание----------------------

let day= +prompt('Введите день от 1 до 31');

if ((!isNaN(parseFloat(day)) && isFinite(day))  && (day>0 && day<=31)){
    switch (true) {
        case (day<=10): {
            alert('Первая декада');
            break;
        }
        case (day>=11 && day<=20): {
            alert('Вторая декада');
            break;
        }
        case (day>=21 && day<=31): {
            alert('Третья декада');
            break;
        }
    }
} else {
    alert('Вы ввели некорректные данные!!!');
}

// 9 задание----------------------

let days_year = +prompt('Введите колличество дней');
if ((!isNaN(parseFloat(days_year)) && isFinite(days_year)) && (days_year>0)){


    let year_s = days_year/365;
    let month = days_year*0.03285;
    let weeks = days_year*0.1429;
    let hour = days_year*24;
    let minutes = days_year*1440;
    let seconds = days_year*86400;
    
    console.log(year_s.toFixed(2) + ' Года\n\
    ' + month.toFixed(2) +' Месяца\n\
    ' + weeks.toFixed(2) + ' Недель\n\
    ' + hour.toFixed(2) + ' Часов\n\
    ' + minutes.toFixed(2) + ' Минут\n\
    ' + seconds.toFixed(2) +' Секунд');
}
else {
    alert('Вы ввели некорректные данные!!!');
}
    

// 10 задание----------------------

let Day = +prompt('Введите день от 1 до 365');

if ((!isNaN(parseFloat(Day)) && isFinite(Day))  && (Day>0 && Day<=365)){
    switch (true) {
        case (Day<=31): {
            alert('Месяц Январь / Зима');
            break;
        }
        case (Day>=32 && Day<=59): {
            alert('Месяц Февраль / Зима');
            break;
        }
        case (Day>=60 && Day<=90): {
            alert('Месяц Март / Весна');
            break;
        }
        case (Day>=91 && Day<=120): {
            alert('Месяц Апрель / Весна');
            break;
        }
        case (Day>=121 && Day<=151): {
            alert('Месяц  Май / Весна');
            break;
        }
        case (Day>=152 && Day<=181): {
            alert('Месяц  Июнь / Лето');
            break;
        }
        case (Day>=182 && Day<=212): {
            alert('Месяц  Июль / Лето');
            break;
        }
        case (Day>=213 && Day<=243): {
            alert('Месяц  Август/ Лето');
            break;
        }
        case (Day>=244 && Day<=273): {
            alert('Месяц  Сентябрь  / Осень');
            break;
        }
        case (Day>=274 && Day<=304): {
            alert('Месяц  Октябрь / Осень');
            break;
        }
        case (Day>=305 && Day<=334): {
            alert('Месяц  Ноябрь / Осень');
            break;
        }
        case (Day>=335 && Day<=365): {
            alert('Месяц Декабрь / Зима');
            break;
        }
       
    }
} else {
    alert('Вы ввели некорректные данные!!!');
}
