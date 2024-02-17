Task 1 Створити об'єкт, який містить список фільмів та їх жанри. Напишіть метод,
який виводить на екран список фільмів у вибраному жанрі.

```js
const movies = {
  action: ['Die Hard', 'John Wick', 'The Matrix'],
  comedy: ['The Hangover', 'Bridesmaids', 'Step Brothers'],
  drama: ['The Shawshank Redemption', 'The Godfather', "Schindler's List"],
  horror: ['The Shining', 'A Nightmare on Elm Street', 'The Exorcist'],

  // Метод, який виводить список фільмів в заданому жанрі
  listMoviesByGenre: function (genre) {},
};
```

// Вивести список комедій

```js
movies.listMoviesByGenre('comedy');
```

// Вивести список фільмів в жанрі "sci-fi"

```js
movies.listMoviesByGenre('sci-fi');
```

Task 2 Створити об'єкт "Студент" з методами для додавання та видалення
предметів, які він вивчає.

```js
let student = {
  subjects: [],
};

student.addSubject('Математика'); // Предмет Математика додано.
student.addSubject('Історія'); // Предмет Історія додано.
student.addSubject('Математика'); // Ви вже вивчаєте предмет Математика.
console.log(student.subjects); // ["Математика", "Історія"]
student.removeSubject('Історія'); // Предмет Історія видалено.
console.log(student.subjects); // ["Математика"]
student.removeSubject('Англійська'); // Ви не вивчаєте предмет Англійська.
```
