import { TextField } from "@mui/material" 
import "./inputs.css"

export default function DescriptionInput(){
    return (
        <>
            <TextField class="input"
                name="description"
                label="Description"
                multiline
                rows={4}
                required
                size="large"
            />
        </>
    )
}