import { TextField } from "@mui/material"

export default function DescriptionInput(){
    return (
        <>
            <TextField
                name="description"
                label="Description"
                multiline
                rows={4}
                required
            />
        </>
    )
}