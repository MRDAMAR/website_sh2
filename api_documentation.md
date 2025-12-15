# API Documentation --- Shadow Fight 2 Web Project

**Version:** 1.0\
**Author:** MR_DAMAR\
**Based on:** https://swagger.io/

------------------------------------------------------------------------

# 1. ROUTES сайту (Frontend)

  Route                 Метод    Опис
  --------------------- -------- ---------------------------
  `/`                   GET      Головна сторінка сайту
  `#home`               Anchor   Блок з фоном та трейлером
  `#about`              Anchor   Інформація про гру
  `#services`           Anchor   Галерея скріншотів
  `#contacts`           Anchor   Соцмережі та магазини
  `/second_page.html`   GET      Друга сторінка сайту

------------------------------------------------------------------------

# 2. REST API ендпоінти

## 2.1. Authentication API

### POST /api/auth/login

``` json
{
  "email": "user@example.com",
  "password": "123456"
}
```

### POST /api/auth/register

``` json
{
  "email": "user@example.com",
  "password": "123456",
  "username": "Player1"
}
```

### POST /api/auth/logout

``` json
{
  "status": "logged_out"
}
```

------------------------------------------------------------------------

## 2.2. Game Information API

### GET /api/game/info

``` json
{
  "title": "Shadow Fight 2",
  "description": "Fighting + RPG game by Nekki.",
  "platforms": ["Android", "iOS", "Nintendo Switch"]
}
```

------------------------------------------------------------------------

## 2.3. Gallery API

### GET /api/gallery

Отримати всі зображення.

### GET /api/gallery/{id}

Конкретне фото.

### POST /api/gallery

``` json
{
  "imageUrl": "https://...",
  "title": "Screenshot 1"
}
```

------------------------------------------------------------------------

## 2.4. Video API

### GET /api/videos

Отримати всі відео.

------------------------------------------------------------------------

## 2.5. Contacts API

### GET /api/contacts/socials

### GET /api/contacts/stores

------------------------------------------------------------------------

# 3. Models

## User

``` json
{
  "id": 1,
  "username": "Player1",
  "email": "example@mail.com"
}
```

## Image

``` json
{
  "id": 10,
  "url": "https://...",
  "title": "Screenshot 5"
}
```

## Video

``` json
{
  "id": 3,
  "url": "https://youtube.com/...",
  "type": "Trailer"
}
```

------------------------------------------------------------------------

# 4. Статус-коди

  Код                         Опис
  --------------------------- -----------------
  200 OK                      Успіх
  201 Created                 Створено
  400 Bad Request             Помилка
  401 Unauthorized            Нема доступу
  404 Not Found               Не знайдено
  500 Internal Server Error   Помилка сервера

------------------------------------------------------------------------

# 5. Swagger стандарт

https://swagger.io/

