/**BURGER**/

//     $(document).ready(function() {
//         $('.mobile__burger').click(function(event) {
//             $('.mobile__burger,.mobile__menu').toggleClass('active');
//             $('body').toggleClass('lock');
//         });
//     });

//     //
//     $("button").click(function(){
//       $("p").slideToggle(700);
//       $("button").css("background-color", "black");
//     });
//     $("button").click(function(){
//       $("button").animate({
//         left:"250px",
//         opacity:'0.9',
//         width:'200px'
//       });
//     });
// // 
//     $(".menu-burger").click(function(){
//       $(".menu-burger,.menu").toggleClass("active");
//     });

// 
// var car = 0;
//     while (car < 10) {
//         console.log("calculated car: " + car + " !");
//         car++;
//     }
// for(var car = 0; car < 11; car++) {
//     console.log("calculated car: " + car + " !");
// }
// var animals = ["lion", "white bear", "snake", "hummingbird"];
// for(var i = 0; i < animals.length; i++) {
//     console.log("This zoo has " + animals[i]);
// }

// var x = 3;
// while ( x < 10000 ) {
//     console.log(x);
//     x*=3;
// }
// var name = prompt('What is your name?');
// console.log("hi, " + name);
// var likesCats = confirm("Тебе нравятся кошки?");
// var likesCats = confirm("Тебе нравятся кошки?");
// if (likesCats) {
//  alert("Ты классная кошка!");
// } else {
//  alert("Что ж, не проблема. Все равно ты молодец!");
// }
// var words = [
//     "программа",
//     "макака",
//     "прекрасный",
//     "оладушек"
// ];
// // Выбираем случайное слово
// var word = words[Math.floor(Math.random() * words.length)];
// // Создаем итоговый массив
// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }
// var remainingLetters = word.length;
// // Игровой цикл
// while (remainingLetters > 0) {
//     // Показываем состояние игры
//     alert(answerArray.join(" "));
//     // Запрашиваем вариант ответа
//     var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
//         if (guess === null) {
//             // Выходим из игрового цикла
//             break;
//         } else if (guess.length !== 1) {
//             alert("Пожалуйста, введите одиночную букву.");
//         } else {
//             // Обновляем состояние игры
//             for (var j = 0; j < word.length; j++) {
//                 if (word[j] === guess) {
//                     answerArray[j] = guess;
//                     remainingLetters--;
//                 }
//             }
//         }
//         // Конец игрового цикла
//     }
//     // Отображаем ответ и поздравляем игрока
//     alert(answerArray.join(" "));
//     alert("Отлично! Было загадано слово " + word);
// function x(number) {
//     return number;
// };
// for (var i = 0; i <= 1; i++) {
//   var hobby = prompt("What is your hobby?");
//   $("body").append("<p>" + hobby + "</p>");
// }
// var tools = ["pen","car","day",1,"flex","dog",222]
// for (var i = 0; i<tools.length; i++) {
//   console.log("Number = "+tools[i]);
// }
function x(number) {
  return number*3;
}var num = x(5);
console.log(num);