import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom"
import {connect} from "react-redux";

function Header(props) {
  
  const [state, setstate] = useState();

  useEffect(()=>{
    setstate(props.userfound)
  })


  const founduser = ()=>{
    
     if(state === undefined||null){
       return   <Link style={{color:"white"}} class="nav-link" to='/register'>Login</Link>
     }else{
     return <h6 className="mt-2">hello <span className="mt-1" style={{color:"#d0e1e5"}}>{state.name}</span></h6>
     }
  }



  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <Link to='/' style={{color:"white"}} class="navbar-brand" href="#">Product</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
   <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item d-flex">
      <Link style={{color:"white"}} class="nav-link" to='/'>Home</Link>
      </li> 
      <li class="nav-item d-flex">
    {founduser()}
      </li> 
      <li class="nav-item d-flex">
      <Link style={{color:"white"}} class="nav-link" to='/cart'>Cart</Link>
      </li> 
     
    </ul>
  </div> 
</nav>
  )
}

function stateProps(state){
 
  return{
userfound: state.businessinfo.user
  }
}

export default connect(stateProps,null)(Header)
