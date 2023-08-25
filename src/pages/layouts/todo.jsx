import React from "react";
import {
    Card,
    CardContent,
    Typography
} from '@mui/material';

const Todo = () => {
    return (
        <div className="todo">
            <Card className="card">
                <CardContent>
                    <Typography variant="h6">Título de la Página TODO</Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Todo;
