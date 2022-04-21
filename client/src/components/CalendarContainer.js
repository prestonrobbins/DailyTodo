import React from "react";
import Box from "@mui/material/Box"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../assets/calendar.css'

const CalendarContainer = () => {
    return (
        <Box
            sx={{
                m: 2
            }}
        >
            <Calendar className={"calendar"}/>
        </Box>
    )
}

export default CalendarContainer