export type Status = {
    statusId: number;
    statusName:string;
    statusIsActive:boolean;
}

export type Priority = {
    priorityId: number;
    priorityName:string;
    priorityIsActive:boolean;
}

export type User = {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
}