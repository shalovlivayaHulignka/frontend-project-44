#!/usr/bin/env node
import greetings from '../src/greetings.js';
import game from '../src/even_or_not.js';

console.log("Welcome to the Brain Games!");
const userName = greetings();
game(userName);