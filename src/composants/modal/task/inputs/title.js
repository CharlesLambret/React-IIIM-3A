import { TextField } from "@mui/material" 
import "./inputs.css"
export default function TitleInput ( ){
    return (
        <>
            <TextField class="input"
                name="title"
                label="Titre"
                required
                size="large"
            />
        </>
    )
}