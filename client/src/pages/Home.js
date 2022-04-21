import React from "react";
import { Box, Typography, Button } from '@mui/material';
import 'react-calendar/dist/Calendar.css';
import CalendarContainer from "../components/CalendarContainer";
import CreateToDoModal from "../components/CreateToDoModal";

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
            <Button 
                sx={{
                    m: 1
                }}
                variant="contained" 
                disableElevation
            >
                Start Your Day
            </Button>
        
            <CreateToDoModal/>
        </Box>
    )
}

export default Home