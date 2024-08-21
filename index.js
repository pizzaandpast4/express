import express from 'express';
import { servicesRouter } from './router/servicesRouter.js';
import { teamRouter } from './router/teamRouter.js';
import { discountRouter } from './router/discountRouter.js';
import { studentsRouter } from './router/studentsRouter.js';
import { booksRouter } from './router/booksRouter.js';
import { phonesRouter } from './router/phonesRouter.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/about', (req, res) => {
    return res.send('About page');
});

app.get('/img', (req, res) => {
    return res.send('Images...');
});

app.get('/img/logo.png', (req, res) => {
    return res.send('Images: logo.png turinys :P');
});

app.use('/services', servicesRouter);
app.use('/team', teamRouter);
app.use('/discount', discountRouter);
app.use('/students', studentsRouter);
app.use('/books', booksRouter);
app.use('/phones', phonesRouter);

app.get('*', (req, res) => {
    return res.send('Ups... 404 page 🛸');
});

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
});

/*

/students
Mokosi 1 studentai: Ona.
Mokosi 2 studentai: Petras ir Ona.
Mokosi 3 studentai: Maryte, Petras ir Ona.
Mokosi 4 studentai: Jonas, Maryte, Petras ir Ona.

/students/jonas
/students/Jonas
/students/JoNas
/students/JONAS
Studentas, vardu Jonas yra 99 metu amziaus ir yra vedes.

/students/chuck
Studento, vardu chuck nera.

/students/Chuck
Studento, vardu Chuck nera.

*/