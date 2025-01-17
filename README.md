# Проект "игры разума" на JS
___
[![Actions Status](https://github.com/Gr1Dan/fullstack-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Gr1Dan/fullstack-javascript-project-44/actions)

## Описание 
___
"Игры разума" - это набор из пяти консольных игр, построенных по принципу простых математических свойств и действий. Каждая игра
задает вопросы, на которые нужно дать правильные ответы. После трёх правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти её заново.

#### Игры:
* Калькулятор. Арифметические выражения, которы нужно вычислить.
* Прогрессия. Поиск пропущенных чисел в последовательности чисел.
* Определение чётного числа.
* Определение набольшего общего делителя у двух чисел.
* Определение простого числа.

## Использование
___
Эта команда полезна при первом клонирование репозитория (или после удаление node_modules).
```rb
install:
    npm ci
```

Запустить любую из существующих игр можно используя терминал:
```rb
brain-games:
    node bin/brain-games.js

brain-even:
    node bin/brain-even.js

brain-calc:
    node bin/brain-calculate.js

brain-gcd:
    node bin/brain-gcd.js

brain-progression:
    node bin/brain-progression.js

brain-prime:
    node bin/brain-prime.js
```
