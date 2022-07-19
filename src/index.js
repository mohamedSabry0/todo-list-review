import './style.css';
import AddHandler from './modules/add.js';
import Storage from './modules/storage.js';
import Display from './modules/display.js';
import ClearCompleted from './modules/clear_completed.js';

const taskInput = document.getElementById('new-task');
const storage = new Storage();

const clearCompleted = new ClearCompleted(storage, Display);
const addHandler = new AddHandler(storage, Display);
Display.displayList(storage);

document.getElementById('clear-completed').addEventListener('click', clearCompleted);
taskInput.addEventListener('keyup', addHandler);
