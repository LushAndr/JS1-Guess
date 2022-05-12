

let name = prompt("Как тебя зовут?");

// если пользователь не ввел имя, попросим ввести его еще раз
while (name == "" || name == null) {
    name = prompt("Как тебя зовут?");

}
 

alert(name + '-сутулый пездюк=), я загадал число от 1 до 100. Попробуй отгадать его за наименьшее число попыток. После каждой попытки я скажу мало, много или угадал.');
let number = random(100);
let guess = prompt ("Угадай число, которое я загадал");
let numberOfGuesses = 0;

while (guess != number) {
if (guess > number){
    guess = prompt ("Много, попробуй еще раз");
    numberOfGuesses = numberOfGuesses +1;
}
if (guess < number){
    guess = prompt ("Мало, попробуй еще раз");
    numberOfGuesses = numberOfGuesses +1;

}
}
alert ("Ты угадал! Это число" +" " + number + ". Тебе понадобилось " + numberOfGuesses + " попыток.");