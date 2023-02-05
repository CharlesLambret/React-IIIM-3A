import { useState } from 'react'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; import "./inputs.css"
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Stack } from '@mui/system';
import { TextField } from '@mui/material';

export default function StartDateInput(){

    return (
        <>
        <LocalizationProvider dateAdapter={AdapterMoment}>
        <Stack spacing={3}>
                    <DesktopDatePicker
                    className='input'
                    label="Date de début"
                    name="startDate"
                    size="large"
                    inputFormat="dd/MM/yyyy"
                    renderInput={(params) => <TextField class="input" {...params} />}
                    />
                </Stack>
        </LocalizationProvider>
                
        </>
    )
}