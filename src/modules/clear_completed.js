class ClearCompleted {
  constructor(storage, Display) {
    this.storage = storage;
    this.Display = Display;
  }

  handleEvent() {
    this.storage.listRemoveCompleted();
    this.Display.displayList(this.storage);
  }
}

export default ClearCompleted;
