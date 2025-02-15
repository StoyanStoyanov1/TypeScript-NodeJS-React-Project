import React, {FC, ReactElement} from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {customTheme} from "./theme/customTheme";
import { Dashboard } from './pages/dashboard/dashboard';

const App:FC = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
          <Dashboard />
    </ThemeProvider>
  );
}

export default App;
