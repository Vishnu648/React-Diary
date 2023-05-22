import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [date,setDate]=useState("");
    const [body,setBody]=useState('');
    const goBack=useNavigate();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const memory={date,body};

        fetch('http://localhost:5000/memories/',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(memory)
        }).then(
            goBack('/')
        )
    }


  return (
    <div className="createDiary">
      <form onSubmit={handleSubmit} className="newDiary">
      <h2>New Diary</h2><br />
        <label>Date:</label>
        <input type="date" id="date" required value={date} onChange={e=>setDate(e.target.value)}/>
        <label>Body</label>
        <textarea id="body" cols="30" rows="10" required value={body} onChange={e=>setBody(e.target.value)}></textarea>
        <button className="addBtn">Add</button>
      <button className="backbtn" onClick={()=>goBack("/")}>back</button>
      </form>
    </div>
  )
}

export default Create
