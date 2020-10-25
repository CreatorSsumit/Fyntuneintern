import React , { useState,useEffect } from 'react';
import {useHistory} from "react-router-dom";
import {login} from "../../actions/index"

import {connect} from "react-redux"
import {bindActionCreators} from "redux";


 function Homepage(props) {
  const history = useHistory();
  const [namefield, setnamefield] = useState('')
  const [emailfield, setemailfield] = useState('')
  const [passwordfield, setpasswordfield] = useState('')
  const [numberfield, setnumberfield] = useState('')
  const [emailerror, setemailerror] = useState(false)
  const [users, setusers] = useState()
 
  const erorors = ()=>{
  if(!emailfield.includes('@')){
    setemailerror('Email not valid')
  }else{
    setemailerror(false)
  }
  }


const emailvalueset = (e) =>{
  setemailfield(e.target.value)
    erorors()
   }

const handledata=(e)=>{

e.preventDefault();
const userdata = {
  name:namefield,
  email:emailfield,
  password:passwordfield,
  number:numberfield
}
 setusers(userdata)
 props.login(users)
 
}


   

    return (
        <div>
         
 <form className='jumbotron container' onSubmit={handledata}>
 <h4 className="display-4 text-center">Login</h4>
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" style={{borderColor:'#dadada'}} className="form-control" id="exampleInputEmail1" value={namefield} onChange={(e)=>setnamefield(e.target.value)} aria-describedby="emailHelp" required/>

  
 </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email"  style={{borderColor:`${emailerror ? 'red':'#dadada'}`}} className="form-control" id="exampleInputEmail1" value={emailfield} onChange={(e)=> emailvalueset(e) } aria-describedby="emailHelp" required/>
    <small id="emailHelp"   className="form-text text-danger">{emailerror}</small>
  </div>

  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password"  style={{borderColor:'#dadada'}} className="form-control" id="exampleInputPassword1" value={passwordfield} onChange={(e)=>setpasswordfield(e.target.value)} required/>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Number</label>
    <input type="number"  style={{borderColor:'#dadada'}} className="form-control" id="exampleInputEmail1" value={numberfield} onChange={(e)=>setnumberfield(e.target.value)} aria-describedby="emailHelp" required />
  </div>

  <button type="submit"  style={{borderColor:'#dadada'}} className="btn btn-primary">Submit</button>
</form>

        </div>
    )
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({login,},dispatch)
}


export default connect(null,mapDispatchToProps)(Homepage)