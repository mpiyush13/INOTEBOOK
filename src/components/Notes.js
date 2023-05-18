import React,{useContext,useEffect,useRef,useState} from 'react'
import NoteContext from '../context/notes/NoteContext'
import { Noteitem } from './Noteitem'
import { AddNotes } from './AddNotes'
import { useNavigate } from 'react-router-dom';

export const Notes = (props) => {
  const navigate = useNavigate();
    useEffect(()=>{
      console.log("this is token :",localStorage.getItem('token'))
      if(localStorage.getItem('token'))
      {
        getallnote()
      }
        else{
     navigate("/login")
        }
        //estlint-disable-next-line
    },[])
    const {showAlert}=props
    const contex=useContext(NoteContext)
    const note=contex.note
    const editNote=contex.editNote
    const getallnote=contex.getallnote
    const [val,setVal]=useState({id:"",etitle:"",edescription:"",etag:"Default"})
    const ref=useRef(null)
    const refClose=useRef(null)
    const updateNode=(notes)=>{
          ref.current.click()
          setVal({id:notes._id,etitle:notes.title,edescription:notes.description})
          
          console.log("edit click")
    }
    
    const handlesubmit=(e)=>{
      editNote(val.id,val.etitle,val.edescription,val.etag)
      refClose.current.click()
      showAlert("edited succesfully","success")
   

   //Addnote(val.title,val.description,val.tag)
   
    }
    const onChange=(e)=>{
       setVal({...val,[e.target.name]:e.target.value})
    }
  return (
    <>
        <AddNotes showAlert={showAlert}/>
       
        <button ref={ref} type="button" class="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form className='my-5'>
  <div class="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="etitle" onChange={onChange} value={val.etitle}placeholder="Enter email"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Description</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="edescription" onChange={onChange} value={val.edescription}placeholder="Password"/>
  </div>
 
 
</form>
      </div>
      <div class="modal-footer">
        <button ref={refClose} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button  type="button" class="btn btn-primary" onClick={handlesubmit}>Edit note</button>
      </div>
    </div>
  </div>
</div>



        <h2>Your Notes</h2>
        <div className='row my-3 d-flex'>
    
   {
    note.map((notes)=>{
        return <Noteitem updateNode={updateNode} note={notes} showAlert={showAlert}/>
    })
   }
    </div>
    </>
    
  )
}
