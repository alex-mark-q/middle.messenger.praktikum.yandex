# Чат

* Макет в Figma: [https://www.figma.com/file/GYtBFev8rv4UY70nzyODSs/Chat_external_link-(Copy)?node-id=0%3A1&t=8kqjuSEsvNpGH4YL-0](https://www.figma.com/file/GYtBFev8rv4UY70nzyODSs/Chat_external_link-(Copy)?node-id=0%3A1&t=8kqjuSEsvNpGH4YL-0)
* Опубликованное в Netlify приложение: [https://jazzy-griffin-f83301.netlify.app/](https://jazzy-griffin-f83301.netlify.app/)

## Что это?

Учебный проект, который выполняется в рамках обучения на курсе [Мидл фронтенд-разработчик](https://praktikum.yandex.ru/middle-frontend/) от [Яндекс.Практикум](https://praktikum.yandex.ru).

### Сборка и запуск проекта
* `npm run build`
* `npm run start` - webpack serve

## Спринт 1

* Свёрстан макет приложения чат в Figma. [Ссылка на макет](https://www.figma.com/file/GYtBFev8rv4UY70nzyODSs/Chat_external_link-(Copy)?node-id=0%3A1&t=8kqjuSEsvNpGH4YL-0)
* Настроена сборка с использованием [Parcel](https://parceljs.org/) и раздача статики сервером на Express
* Свёрстаны основные страницы приложения с использованием шаблонизатора
* Приложение автоматически деплоится на [Netlify](https://www.netlify.com/) из ветки `deploy`. [Ссылка на приложение](https://jazzy-griffin-f83301.netlify.app/)


## Спринт 2

* Переход на TypeScript
* Реализация шины событийной модели (`src/core/EventBus.ts`)
* Реализация главного компонента (`src/core/Block.ts`)
* Приложение переписано с учётом новых компонентов
* На основных формах реализована клиентская валидация

## Спринт 3

* Реализация клиентского роутера (classes/Route.ts, classes/Router.ts)
* Добавлен слой api
* Использован WebSocket для сообщений чата
* В приложении реализованы следующее возможности:
    * Регистрация
    * Логин
    * Выход
    * Обновление данных профиля
    * Изменение аватара
    * Создание и удаление чата
    * Отправка и получение текстовых сообщений
