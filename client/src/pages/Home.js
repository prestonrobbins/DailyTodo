import React from "react";
import { Box, Typography, Button } from '@mui/material';
import 'react-calendar/dist/Calendar.css';
import CalendarContainer from "../components/CalendarContainer";

const Home = () => {
    return (
        <Box
            sx={{ 
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Typography component={'h1'} variant='h3'>Welcome to your Daily ToDos!</Typography>
            <CalendarContainer />
            <Button variant="contained" disableElevation>
                Start Your Day
            </Button>
        </Box>
    )
}

export default Home