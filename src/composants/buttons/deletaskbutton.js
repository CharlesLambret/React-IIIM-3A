import { db} from "../../firebase"
import {doc, deleteDoc} from 'firebase/firestore'
import { Button } from '@mui/material'

export default function DeleteTaskButton({task}){
    const handleDeleteTask= async (task) => {
        const id = task.id
        const reference = doc(db, 'taskdata', id)
        await deleteDoc(reference)
    }
    return(
        <Button className="deletebutton" onClick={handleDeleteTask}>
            Supprimer
        </Button>
    )
}