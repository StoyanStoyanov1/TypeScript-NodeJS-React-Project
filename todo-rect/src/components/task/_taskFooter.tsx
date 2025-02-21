import React, { useState, FC, ReactElement } from 'react';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';
import PropTypes from 'prop-types';
import { Status } from '../createTaskForm/enums/Status';

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  //  Destructure props
  const {
    id,
    status,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  // Add state for Switch
  const [isInProgress, setIsInProgress] = useState(status === Status.inProgress);

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsInProgress(e.target.checked);
    onStatusChange(e, id); // Call the prop function to notify the parent component
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            checked={isInProgress}  // controlled state
            onChange={handleSwitchChange}
            color="warning"
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(e) => onClick(e, id)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
};
