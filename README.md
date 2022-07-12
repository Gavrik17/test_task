# Тестовое задание для Сервер Молл
Node.js v14.17.3.
## Роутинг ##
### POST запрос localhost:3000/issue  
Отдает все Issue по выбранному репозиторию  
Пример передаваемого JSON:
```
{
    "owner":"vocollapse",
    "repo":"Blockinger"
}
```

### POST запрос localhost:3000/comments
Отдает комментарии для выбранного Issue  
Пример передаваемого JSON:
```
{
    "owner":"vocollapse",
    "repo":"Blockinger",
    "number":"15"
}
```

### POST запрос localhost:3000/issuebydate  
Выборка Issue по дате  
Пример передаваемого JSON:
```
{
    "owner":"vocollapse",
    "repo":"Blockinger",
    "date":"2021-10-05"
}
```
### Примечание
Перед началом работы необходимо указать токен гитхаба в файле issue-repository.js  
Токены лучше не хранить в коде, однако в рамках тествого задания этим было пренебрежено 
