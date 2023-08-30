import React from "react";
import { useSelector } from "react-redux";
import { appSelector } from "../../redux/appRedux"; 
import {
    Grid,
    Paper,
    Box
} from '@mui/material';

const Dashboard = () => {
    const tasks = useSelector(appSelector.todo);    
    const completedTasks = tasks.filter(task => task.completed);
    const pendingTasks = tasks.filter(task => !task.completed); 

    return (
            <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Box>
                        Tareas Completadas {'  -  '}   
                        {completedTasks.length} / {tasks.length}                  
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Box>
                        Tareas Pendientes {'  -  '}   
                        {pendingTasks.length} / {tasks.length}
                    </Box>
                </Paper>
            </Grid>
        </Grid>
        
    );
};
export default Dashboard;