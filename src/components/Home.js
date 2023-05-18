import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { Notes } from './Notes'
export const Home = (props) => {
   const contex=useContext(NoteContext)
   const note=contex.note
   const setNote=contex.setNote
   const {showAlert}=props
  return (
    <div>
        
        <Notes showAlert={showAlert}/>
        
    </div>
  )
}
