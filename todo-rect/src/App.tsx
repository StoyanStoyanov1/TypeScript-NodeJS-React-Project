import React, {FC, ReactElement} from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {customTheme} from "./theme/customTheme";
import { Dashboard } from './pages/dashboard/dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ComposeContext from './context/Compose.context';
import { rootContext } from './context/root.context';

const queryClient = new QueryClient();

const App:FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <ComposeContext>
          <ThemeProvider theme={customTheme}>
            <CssBaseline />
              <Dashboard />
          </ThemeProvider>
        </ComposeContext>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
