// Завдання 1
const movies = {
  action: ['Die Hard', 'John Wick', 'The Matrix'],
  comedy: ['The Hangover', 'Bridesmaids', 'Step Brothers'],
  drama: ['The Shawshank Redemption', 'The Godfather', "Schindler's List"],
  horror: ['The Shining', 'A Nightmare on Elm Street', 'The Exorcist'],

  listMoviesByGenre: function (genre) {
    if(!this[genre]) return console.log('No movies in this genre');
    console.log(this[genre]);

} }


movies.listMoviesByGenre('comedy');

movies.listMoviesByGenre('sci-fi');

movies.listMoviesByGenre('action');


// Завдання 2
let student = {
    subjects: [],
    addSubject(input) {
        let result = !this.subjects.includes(input) ? this.subjects.push(input) : console.log('Ви вже вивчаєте цей предмет');
        return result;
    },
    removeSubject (input) {
        for (let now of this.subjects) {
            if (now === input) {
                this.subjects.splice(this.subjects.indexOf(now), 1);
                return `Ви вивчаєте предмет ${input}`;
            } 
        }
        return `Ви не вивчаєте предмет ${input}`;
    }
} 


 student.addSubject('Математика');
 student.addSubject('Математика');
 student.addSubject('Історія');
 student.removeSubject('Математика');
 student.addSubject("Математика");
 console.log(student.subjects);

