import {Button} from '@mui/material'
import {useNavigate} from 'react-router'

export default function DiscoverProductButton() {
    let navigate = useNavigate();
    const NavigateKanban = () => { navigate("/home") }
    return (
        <Button variant="contained" id="bouton1" onClick={NavigateKanban} >Découvrir</Button>
    )
}