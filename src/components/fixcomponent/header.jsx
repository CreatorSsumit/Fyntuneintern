import React from 'react';
import {Link} from "react-router-dom"

export default function header() {
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <Link to='/' style={{color:"white"}} class="navbar-brand" href="#">Product</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
   <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
   
      <li class="nav-item d-flex">
      <Link style={{color:"white"}} class="nav-link" to='/register'>Login</Link>
      </li> 
      <li class="nav-item d-flex">
      <Link style={{color:"white"}} class="nav-link" to='/cart'>Cart</Link>
      </li> 
     
    </ul>
  </div> 
</nav>
  )
}
