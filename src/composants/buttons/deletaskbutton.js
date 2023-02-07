import { db} from "../../firebase"
import {doc, deleteDoc} from 'firebase/firestore'
import { Button } from '@mui/material'

export default function DeleteTaskButton(task){
    async function handleDeleteTask(task)  {
        try{
            const reference = doc(db, 'taskdata', task.id)
            await deleteDoc(reference)
        }catch(error){
            console.log(error)
        }
      
        
    }
    return(
        <Button className="bouton1 deletebutton"  onClick={handleDeleteTask}>
            Supprimer
        </Button>
    )
}