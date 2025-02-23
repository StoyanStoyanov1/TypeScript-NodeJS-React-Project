import { Priority } from "../../createTaskForm/enums/Prioritiy";
import { Status } from "../../createTaskForm/enums/Status";

export interface ITaskApi {
    id: string;
    date: string;
    title: string;
    description: string;
    priority: `${Priority}`;
    status: `${Status}`;
}