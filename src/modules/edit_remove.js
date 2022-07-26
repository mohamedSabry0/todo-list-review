import deleteIcon from '../images/icons8-delete-64.png';

const getDisplayIndex = (t) => [...t.parentElement.parentElement.children].indexOf(t.parentElement);

class EditRemoveHandler {
  constructor(list) {
    this.list = list;
  }

  handleEvent(event) {
    if (event.target.id === 'status' || event.target.id === 'description') this[event.target.id](event.target);
  }

  // update status
  status(target) {
    const index = getDisplayIndex(target);
    this.list.taskList[index].completed = !this.list.taskList[index].completed;
    this.list.updateTask(this.list.taskList);
  }

  // update description
  description(target) {
    const index = getDisplayIndex(target);
    const editField = document.createElement('input');
    const removeBtn = document.createElement('img');

    // removeBtn.className = 'remove';
    removeBtn.src = deleteIcon;
    const oldDesc = this.list.taskList[index].description;
    editField.value = oldDesc;
    const { parentElement } = target;
    parentElement.replaceChild(editField, target);
    parentElement.appendChild(removeBtn);
    removeBtn.addEventListener('click', this.removeTask.bind(this));
    editField.addEventListener('keyup', this.update.bind(this));
  }

  update(event) {
    if (event.key === 'Enter') {
      const index = getDisplayIndex(event.target);
      const newDesc = document.createElement('p');
      newDesc.id = 'description';
      newDesc.textContent = event.target.value;
      this.list.taskList[index].description = event.target.value;
      this.list.updateTask();
      event.target.parentElement.getElementsByClassName('remove')[0].remove();
      event.target.parentElement.replaceChild(newDesc, event.target);
    }
  }

  removeTask(event) {
    const index = getDisplayIndex(event.target);
    this.list.listRemove(index);
    event.target.parentElement.remove();
  }
}

export default EditRemoveHandler;
