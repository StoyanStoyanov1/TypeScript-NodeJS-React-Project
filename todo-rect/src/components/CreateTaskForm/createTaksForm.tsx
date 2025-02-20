import React, { FC, ReactElement, useState } from "react";
import {
    Box, 
    Typography, 
    Stack,
    LinearProgress,
    Button,
    Alert,
    AlertTitle,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";

import { TaskTitleField } from "./_taskTitleField";
import { TaskDescriptionField } from "./_taskDescriptionField";
import { TaskDateField } from "./_taskDateField";
import { TaskSelectField } from "./_taskSelectField";
import { Status } from './enums/Status';
import { Priority } from "./enums/Prioritiy";
import dayjs from "dayjs";
import { sendApiRequest } from "../../helpers/sendApiRequest";
import { ICreateTask } from "../taskArea/interfaces/ICreateTask";


export const CreateTaskForm: FC = (): ReactElement => {
    //declare component states

    const [title, setTitle] = useState<string | undefined>(undefined);

    const [description, setDescription] = useState<string | undefined>(undefined);

    const [date, setDate] = useState<dayjs.Dayjs | null>(dayjs);
    const [status, setStatus] = useState<string>(Status.todo);
    const [priority, setPriority] = useState<string>(Priority.normal);

    const createTaskMutation = useMutation({
        mutationFn: async (data: ICreateTask) => {
            return sendApiRequest<ICreateTask>(
                'http://localhost:3200/tasks',
                'POST',
                data
            );
        }
    });
    
    function createTaskHandler() {
        if (!title || !date || !description) {
            return;
        }

        const task: ICreateTask = {
            title,
            description,
            date: date.toString(),
            status,
            priority,
        };
        createTaskMutation.mutate(task);
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            px={4}
            my={6}
        >
            <Alert
            severity="success"
            sx={{width: '100%', marginBottom: '16px'}}
            >
                <AlertTitle>Success</AlertTitle>
                The task has been created successfully
            </Alert>
            <Typography mb={2} component="h2" variant="h6">Create A Task</Typography>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <TaskTitleField 
                onChange={(e) => setTitle(e.target.value)}
                />
                <TaskDescriptionField 
                onChange={(e) => {setDescription(e.target.value)}}    
                />
                <TaskDateField 
                value={date}
                onChange={(date) => setDate(date)}
                />
                <Stack sx={{ width: '100%'}} spacing={2} direction="row">
                    <TaskSelectField 
                        label="Status"
                        name="Status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as string)}
                        items={[
                            {
                                value: Status.todo,
                                label: Status.todo.toUpperCase(),
                            },
                            {
                                value: Status.inProgress,
                                label: Status.inProgress.toUpperCase(),
                            },
                        ]}
                    />
                    <TaskSelectField 
                        label="Priority"
                        name="priority"
                        value={priority} 
                        onChange={(e) => setPriority(e.target.value as string)}
                        items={
                            [
                                {
                                    value: Priority.low,
                                    label: Priority.low,
                                },
                                {
                                    value: Priority.normal,
                                    label: Priority.normal,
                                },
                                {
                                    value: Priority.high,
                                    label: Priority.high,
                                },
                            ]
                        }
                    />

                </Stack>
                <LinearProgress />
                <Button
                onClick={createTaskHandler}
                variant="contained"
                size="large"
                fullWidth
                >Create A Task</Button>
            </Stack>
           
           
        </Box>
    )
}