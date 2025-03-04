export interface Todo {
    id: string | number,
    description: string,
    status: TodoStatus,
    createdAt: string | Date
}

export enum TodoStatus {
    emtpy,
    inProgress,
    finished
}