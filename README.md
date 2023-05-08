# Установка
Для работы необходимо вытянуть зависимости командой 
`npm ci`

# Code convention
#### 1. Константы:
- Имя константы - существительное/несколько слов обозначающих предмет, сущность.
- У константы указан тип при объявлении.
- `type TrainingListResponse = TrainingResponse[]`. TrainingListResponse избыточен, можно сократить и во всех методах использовать сразу TrainingResponse[].
- project -> projectTitle
- folder -> folderTitle
- content -> contentTitle
- user -> userName
- department -> departmentName
- group -> groupName
- Если объявляется общая константа на весь файлик, то сначала пишутся типы, а потом данные константы
