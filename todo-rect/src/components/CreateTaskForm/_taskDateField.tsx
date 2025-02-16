import React, { FC, ReactElement, useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, { Dayjs } from 'dayjs';

export const TaskDateField: FC = (): ReactElement => {
    const [date, setDate] = useState<Dayjs | null>(dayjs());

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                label="Task Date"
                value={date}
                onChange={(newValue) => setDate(newValue)}
                views={['year', 'month', 'day']}
                slotProps={{ textField: { fullWidth: true } }}
            />
        </LocalizationProvider>
    );
}
