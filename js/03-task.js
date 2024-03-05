// Напишіть функцію, яка приймає об'єкт з іменем та віком користувача і повертає рядок, що містить ім'я та повідомлення про те, скільки років їй або йому.
// Використайте деструктуризацію, щоб отримати доступ до імені та віку з переданого об'єкту.

function getUserInformation(user) {
    const { name, age } = user;
    return `Вітаю! Твоє ім"я ${name}! тобі ${age} років.`
}

const userInfo = {
    name: 'Єгор',
    age: 15
}
const message = getUserInformation(userInfo)
console.log(message);