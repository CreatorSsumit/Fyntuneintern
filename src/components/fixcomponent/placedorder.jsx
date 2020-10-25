import React,{useState} from 'react'
import {useHistory}from "react-router-dom"

function Placedorder(props) {
  const history =  useHistory()

  const data = props.location.state;

  
  const random = Math.floor(Math.random()*1000000000); 
  
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h5 class="display-5">#{random}</h5>
    <p class="lead">Hello your Order is placed</p>
  </div>
</div>
        </div>
    )
}

export default Placedorder
