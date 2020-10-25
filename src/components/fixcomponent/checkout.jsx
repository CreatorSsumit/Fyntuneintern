import React,{useEffect, useState} from 'react';
import {connect} from "react-redux";
import {useHistory} from "react-router-dom"

function Checkout(props) {
  const history = useHistory()

  var data = props.location.state.whole
  var totalprice = props.location.state.data


  const [state, setstate] = useState('')
  const [registeruser, setregisteruser] = useState('')

const [name, setname] = useState('');
const [email, setemail] = useState('');
const [number, setnumber] = useState('')
  const [address, setaddress] = useState('');
  const [street, setstreet] = useState('');
  const [city, setcity] = useState('')
  
  const [zip, setzip] = useState('')

  useEffect(()=>{
 setstate(data)
   if(props.user === undefined||null){
    history.push('/register')
   }else{
    setregisteruser(props.user)
    setname(props.user.name)
    setemail(props.user.email)
    setnumber(props.user.number)
   }
  },[])

  const onupdate = (e)=>{
  e.preventDefault();

  var upadte = {name,email,number,address,street,zip}
  
  setregisteruser(upadte)
  history.push('/cart/orderconfirm' ,{state:upadte})
}



    return (
        <div className="jumbotron">
          <h3 style={{fontWeight:300}} className="display-5 text-center mt-4">Add Your address and info</h3>
  <form className="container mt-5 p-4" onSubmit={onupdate}>
  <div class="form-row">
  <div class="form-group col-md-6">
      <label for="inputPassword4">Name</label>
      <input type="text" class="form-control"  value={name} onChange={(e)=>setname(e.target.value)}  id="inputPassword4" placeholder="Name" required/>
    </div>

    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email" required/>
    </div>
    
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" value={address} onChange={(e)=>setaddress(e.target.value)} placeholder="Enter address" required/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Street</label>
    <input type="text" class="form-control" id="inputAddress2" value={street} onChange={(e)=>setstreet(e.target.value)} required/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity" value={city} onChange={(e)=>setcity(e.target.value)} required/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Number</label>
      <input type="number" class="form-control" id="inputZip" value={number} onChange={(e)=>setnumber(e.target.value)} placeholder="Number" required/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="number" class="form-control" id="inputZip" placeholder="zip" value={zip} onChange={(e)=>setzip(e.target.value)} required/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" required/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="alert alert-primary" role="alert">
  Total price - {totalprice}
</div>
  <button type="submit" class="btn btn-primary w-100">Placed Order</button>
</form>






  </div>
    )
}

function mapStateToProps(state){
  
  return{
 user:state.businessinfo.user
  }
}


export default connect(mapStateToProps,null)(Checkout)
