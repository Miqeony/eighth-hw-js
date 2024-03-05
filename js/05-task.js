//\* Створіть функцію personInfo, яка приймає об'єкт в якості параметра та виконує деструктуризацію цього об'єкта, витягуючи з нього наступні поля: "name", "age", "email", "city". Потім використайте деструктуризовані значення для створення нового об'єкта з наступними полями: "fullName" (значення поля "name" додане до значення поля "age" через пробіл), "contact" (значення поля "email" додане до значення поля "city" через кому). Функція має повертати цей новий об'єкт.

// \* Маємо наступний об'єкт:


const person = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  city: "New York",
};

function personInfo(person) {
    const {name, age, email, city} = person;

    const newPersonInfo = {
        fullName: ` ${name}, ${age}` ,
        contact:  `${email}, ${city}`
    }
    return newPersonInfo
}
console.log(personInfo(person));

//\* Маєте отримати результат:
// contact: "john.doe@example.com, New York"
// fullName: "John Doe, 30"