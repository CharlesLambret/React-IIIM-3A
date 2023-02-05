import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; import "./inputs.css"
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Stack } from '@mui/system';
import { TextField } from '@mui/material';

export default function EndDateInput(){

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <Stack spacing={3}>
                    <DesktopDatePicker
                    className='input'
                    label="Date de fin"
                    name="endDate"
                    inputFormat="dd/MM/yyyy"
                    renderInput={(params) => <TextField class="input" {...params} />}
                    size="large"
                    />
                </Stack>
            </LocalizationProvider>
        </>
    )
}