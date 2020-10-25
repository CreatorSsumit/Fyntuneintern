import React,{useState,useEffect} from 'react'
import {useHistory}from "react-router-dom"

function Placedorder(props) {
  const history =  useHistory()
  const [state, setstate] = useState('')

  const data = props.location.state;

  useEffect(()=>{
 setstate(data.state)
 
  },[])



  
  
  const random = Math.floor(Math.random()*1000000000); 
  
    return (
        <div>
            <div style={{background:"#cbf2e7"}} class="jumbotron jumbotron-fluid">
  <div class="container">
    <h5 class="display-5">#{random}</h5>
    <h2 class="display-5">Hello <span style={{fontWeight:400,color:"#25c499"}}> {state.name} </span> your Order is placed</h2>
    <button onClick={()=>history.push("/")} className="btn btn-warning mt-3">Go Home</button>
  </div>
</div>
        </div>
    )
}

export default Placedorder
