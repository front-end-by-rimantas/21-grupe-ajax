// import { ajax } from './components/ajax.js';
// ajax('GET', 'https://front-end-by-rimantas.github.io/21-grupe-ajax/api/users.json', people);

// import { asyncData } from './components/asyncData.js';
// import { people } from './components/people.js';
// asyncData('GET', 'https://front-end-by-rimantas.github.io/21-grupe-ajax/api/users.json', people);

import { asyncPeople } from './components/asyncPeople.js';

asyncPeople('GET', 'https://front-end-by-rimantas.github.io/21-grupe-ajax/api/users.json');