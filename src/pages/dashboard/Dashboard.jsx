import React from "react";
import {
    Grid,
    Paper,
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Link
} from '@mui/material';

const Dashboard = () => {
    return (
        /*<Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Box>
                        Dashboard
                    </Box>
                </Paper>
            </Grid>
        </Grid>*/

        <Grid container spacing={3}>
            <Grid item xs={5}>
                <Paper sx={{ p: 2 }}>
                    <Box>
                        <Card className="card">
                            <CardContent>
                                <Typography variant="h6">Todo</Typography>
                                <Button component={Link} to="/todo">Ir a Todo</Button>
                            </CardContent>
                        </Card>
                        <Card className="card">
                            <CardContent>
                                <Typography variant="h6">Fetchlist</Typography>
                                <Button component={Link} to="/fetchlist">Ir a Fetchlist</Button>
                            </CardContent>
                        </Card>
                        </Box>
                </Paper>
            </Grid>
        </Grid>
        
    );
};
export default Dashboard;