import React,{useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'
export const Noteitem = (props) => {
    const {note,updateNode}=props
    const contex=useContext(NoteContext)
    // const note=contex.note
     const DeleteNote=contex.DeleteNote
   //  const updatenode=props.updatenode
     
  return (
    <div className='col-md-3'>
    
     <div className="card" >
 
  <div className="card-body">
    
    <div className="d-flex align-item-center ">
    <h5 className="card-title">{note.title}</h5>
    <i class="fa-solid fa-trash-can mx-2" onClick={()=>{DeleteNote(note._id)
props.showAlert("Deleted successfully","success")
    }}></i>
   <i class="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNode(note)}}></i>
    </div>
   <p>{note.description}</p>
  
    
  </div>
</div>
    </div>
  )
}
