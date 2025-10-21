// third.js
import { firstName, lastName } from './first.js';
import { fetchAndLogData } from './second.js';

console.log(firstName);
console.log(lastName);

const apiLink = "API link";
fetchAndLogData(apiLink);
