import { ajax } from './components/ajax.js';
import { people } from './components/people.js';

ajax('GET', 'https://front-end-by-rimantas.github.io/21-grupe-ajax/api/users.json', people);