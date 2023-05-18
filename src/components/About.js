import React,{useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'

export const About = () => {
    const a=useContext(NoteContext)
  return (
    <div>This is about {a.name} and class is {a.class}</div>
  )
}
