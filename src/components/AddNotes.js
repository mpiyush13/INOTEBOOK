import React ,{useContext,useState} from 'react'
import NoteContext from '../context/notes/NoteContext'
export const AddNotes = (props) => {
    const contex=useContext(NoteContext)
   // const note=contex.note
    const Addnote=contex.Addnote
    const [val,setVal]=useState({title:"",description:"",tag:"Default"})
 const handlesubmit=(e)=>{
e.preventDefault()
Addnote(val.title,val.description,val.tag)
props.showAlert("Added succefully","success")

 }
 const onChange=(e)=>{
    setVal({...val,[e.target.name]:e.target.value})
 }
  return (
    <div className='container my-5'>
        <h1>Add Note</h1>
        <form className='my-5'>
  <div class="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={onChange} placeholder="Enter email"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Description</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="description" onChange={onChange}placeholder="Password"/>
  </div>
 
  <button type="submit" onClick={handlesubmit} class="btn btn-primary">Submit</button>
</form>
        </div>
  )
}
