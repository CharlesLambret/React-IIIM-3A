import { TextField , MenuItem } from "@mui/material"

export default function StatusInput (){
    const statuschoices = [{
        value: 'non démarré',
        label: 'non démarré',
      }
      ,{
        value: 'en cours',
        label: 'en cours',
      }
      ,{
        value: 'recettage',
        label: 'recettage',
      }
      ,{
        value: 'terminé',
        label: 'terminé',
      }
    ]
    return(
        <>
            <TextField class="input"
                name="status"
                size="large"
                label="Statut"
                select
                required
                 
              >
                {statuschoices.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField >
            
        </>
    )
}