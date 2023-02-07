import {Button} from '@mui/material'
import {useNavigate} from 'react-router'

export default function DiscoverProductButton() {
    let navigate = useNavigate();
    const NavigateKanban = () => { navigate("/home") }
    return (
        <Button className="bouton1" variant="contained" onClick={NavigateKanban} >Découvrir</Button>
    )
}