import React ,{useEffect, useState} from "react";
import noteContext from "./NoteContext";
const NoteState=(props)=>{
   
   const host="http://localhost:5000"
   
   const [note,setNote]=useState([])
 
  const getallnote=async()=>{
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // body data type must match "Content-Type" header
      });
      const json=await response.json();
      console.log(json)
      setNote(json)
  }


const Addnote=async(title,description,tag)=>{
   
     
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
      });
      const notes= await response.json()
      setNote(note.concat(notes))
}
const DeleteNote=async(id)=>
{
  const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "auth-token":localStorage.getItem('token')
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
     // body data type must match "Content-Type" header
  });
  console.log("this id id going to deleted" ,id)
  const newnote=note.filter((notee)=>{return notee._id!==id})
  setNote(newnote)
}
const editNote=async(id,title,description,tag)=>{
   
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
      });
      const json=response.json();
    let newNote=JSON.parse(JSON.stringify(note))
    for(let i=0;i<note.length;i++)
    {
        const element=newNote[i];
        if(element._id===id)
        {
          newNote[i].title=title
          newNote[i].description=description
          newNote[i].tag=tag
          break;
        }

    }
    setNote(newNote)
}

    return(
        <noteContext.Provider value={{note,Addnote,DeleteNote,getallnote,editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;