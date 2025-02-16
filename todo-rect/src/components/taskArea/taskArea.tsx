import React, { FC, ReactElement } from 'react';
import {Grid, Box} from "@mui/material";
import { format } from 'date-fns'

export const TaskArea: FC = (): ReactElement => {
    return (
        <Grid item md={8} px={4}>
          <Box mb={8} px={4}>
            <h2>Status Of Your Task As On {format(new Date(), 'PPPP')}</h2>
          </Box>
          <Grid 
            container 
            display="flex"
            justifyContent="center"
          >
            <Grid 
              item
              container 
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              md={10}
              xs={12}
              mb={8}
            >
              <Box>Task Counter</Box>
              <Box>Task Counter</Box>
              <Box>Task Counter</Box>
            </Grid>
            <Grid 
               item
               container 
               display="flex"
               flexDirection="column"
               md={8}
               xs={12}
            >
              <Box>Tasks Will Come Over Here</Box>
              <Box>Tasks Will Come Over Here</Box>
            </Grid>

          </Grid>
      </Grid>
    )
}