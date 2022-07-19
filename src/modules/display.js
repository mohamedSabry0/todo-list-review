import EditRemoveHandler from './edit_remove.js';

const listElem = document.getElementById('list');

class Display {
  static addTask(task, storage) {
    const taskCard = document.createElement('li');
    const description = document.createElement('p');
    const completion = document.createElement('input');
    completion.type = 'checkbox';
    description.textContent = task.description;
    completion.checked = task.completed;

    completion.id = 'status';
    description.id = 'description';
    const editRemoveHandler = new EditRemoveHandler(storage);

    taskCard.addEventListener('click', editRemoveHandler);

    listElem.appendChild(taskCard);
    taskCard.append(completion, description);
  }

  static displayList(storage) {
    listElem.innerHTML = '';
    if (storage.getList() !== []) {
      storage.getList().forEach((task) => this.addTask(task, storage));
    }
  }
}

export default Display;
