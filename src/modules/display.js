import EditRemoveHandler from './edit_remove.js';
// import deleteIcon from '../images/icons8-delete-64.png';

const listElem = document.getElementById('list');

class Display {
  static addTask(task, storage) {
    const taskCard = document.createElement('li');
    const description = document.createElement('p');
    const completion = document.createElement('input');
    completion.type = 'checkbox';
    description.textContent = task.description;
    completion.checked = task.completed;

    const listSpan = document.createElement('span');

    listSpan.className = 'remove';
    // listSpan.src = deleteIcon;

    completion.id = 'status';
    description.id = 'description';
    const editRemoveHandler = new EditRemoveHandler(storage);

    taskCard.addEventListener('click', editRemoveHandler);

    listElem.appendChild(taskCard);
    taskCard.append(completion, description, listSpan);
  }

  static displayList(storage) {
    listElem.innerHTML = '';
    if (storage.getList() !== []) {
      storage.getList().forEach((task) => this.addTask(task, storage));
    }
  }
}

export default Display;
