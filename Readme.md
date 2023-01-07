# Для разработки нужно версия NodeJS >=16. Запустить локально проект можно следующими командами:

```
yarn run dev

```

# Ресты для проверки

1. http://localhost:3000/ - 				Страница Login
2. http://localhost:3000/signin - 	Страница регистрации
3. http://localhost:3000/chat - 		Страница чата
4. http://localhost:3000/profile - 	Страница пользователя
5. http://localhost:3000/dialog - 	Страница "модальное окно"

## Использованные технологии

- html
- css
- постпроцессор scss
- шаблонизатор handlebars
- node-сервер express

Ссылка на netlify https://jazzy-griffin-f83301.netlify.app/
## Основные функции папки core

# Шина событий EventEmitter - это модуль который позволяет нам публиковать события (например что компонент готов) и в других местах слушать другие события

# Класс BLOCK это функция от которого будут наследоваться наши компоненты (дает понимание как наш компонент рендериться)

# renderDOM функция принимает на входе экземпляр нашего блока (компонент) и рендерит в ноду #root(DOM элемент)

## Запуск Eslint
# yarn run eslint .eslintrc.json

## Дорожная карта спринта
# https://code.s3.yandex.net/frontend-developer/middleFrontend/roadmaps/sprint2/print_map_2.pdf
