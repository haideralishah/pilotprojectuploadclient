export class Todo {

    todo: string;
    desc: string;
    status: number;
    datePerform: string;
    constructor(todo: string, desc: string, status?: number) {
        this.todo = todo;
        this.desc = desc;
       
    }
}