export default class Task {
  constructor(){
    this.title = title;
    this.description = this.description;
    this.complete = false;
  }
}

Task.prototype.changeTitle = function(newTitle) {
  return this.title = newTitle
}

Task.prototype.changeDescription = function(newDescription) {
  return this.description = newDescription
}