export class Todo {
  item: string;
  done: boolean;

  constructor(todo: string) {
    this.item = todo;
    this.done = false;
  }
}
