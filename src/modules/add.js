import Task from './task.js';

class AddHandler {
  constructor(list, Display) {
    this.list = list;
    this.Display = Display;
  }

  handleEvent(event) {
    if (event.key === 'Enter') {
      this.addHandler(event.target);
    }
  }

  addHandler(target) {
    const task = new Task(target.value, false, this.list.taskList.length);
    this.list.listAdd(task);
    this.Display.addTask(task, this.list);
    target.value = '';
  }
}

export default AddHandler;
