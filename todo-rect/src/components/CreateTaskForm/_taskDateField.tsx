import React, { FC, ReactElement } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { IDateField } from './interfaces/IDateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import dayjs from 'dayjs'; // Import dayjs for date conversion

export const TaskDateField: FC<IDateField> = (
  props,
): ReactElement => {
  // Destructure props
  const {
    value = new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;

  const dayjsValue = dayjs(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Task Date"
        value={dayjsValue.isValid() ? dayjsValue : null} 
        onChange={onChange}
        views={['year', 'month', 'day']}
        slotProps={{ textField: { fullWidth: true } }}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};

TaskDateField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
