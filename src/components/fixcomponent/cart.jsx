import React ,{useEffect, useState} from 'react'
import {connect} from "react-redux";
import {useHistory} from "react-router-dom"
import crypto from "crypto"


function Cart(props) {
  const history = useHistory()
  const [state, setstate] = useState([])
  const [showempty, setshowempty] = useState(false)
  const [hide, sethide] = useState(true)
  
  

useEffect(() => {
  fetchdata(props.cartdata)
  
}, [])
 
const ondelete=(id)=>{
   let a =  state.filter((e)=>e.id != id)
   setstate(a)
   if(a.length === 0){
    setshowempty(true)
  }else{
    setshowempty(false)
  }
}  
  
const fetchdata = (data)=>{
  setstate(data)
  }

  const [quantity, setquantity] = useState('')

  const setquantityfield = (whole,value)=>{

    setquantity(value)

     const {id,brandname,info,image,quantity,price} = whole

     

     const totalprice =  value * price;

     const Card = {id,brandname,info,image,quantity:value,price,totalprice}

     var cardindex  = state.findIndex( c=> c.id === id)
  
    const Cards = [...state];

    Cards[cardindex] = Card;

    setstate(Cards)
  
  }


const fetchvalue = (data)=>{
  
 if(data){
  
   return data.map(e=>{
    
     return(
       <div key={e.id} className="col-sm-3 mt-2">
       <div style={{border:"none",background:"#c4f2e0"}} className="card">
         <div className="card-body">
     <h5 className="card-title">{e.brandname}</h5>
       <p className="card-text">{e.info}</p>
           <div style={{display:'flex'}} className='flex'>
           <a href="#" className="btn btn-danger" onClick={ondelete.bind(this,e.id)}>Delete</a>
           <input type="number" className="form-control ml-2" value={e.quantity} onChange={(edata)=>setquantityfield(e,edata.target.value)} id="input1" placeholder="No of product" min='1' />
     </div>
         
         </div>
       </div>
     </div>
     )
   })
 }else if(props.userFound === undefined||null){
    history.push('/register')
 }else{
   
   return <h2 className="text-center">No Items in cart</h2>
 }
}


const tablevalue = (data) =>{
if(data){
  return data.map(e=>{
   return <tr>
      <th scope="row">{e.info}</th>
  <td>{e.quantity === 1 ? e.price : e.totalprice}</td>
  <td>{e.quantity}</td>
     
    </tr>
  })
}
}


const totalpricevalue =(d)=>{
   if(d){

    var total = [];

      d.map(e=>{

        if(e.quantity <=  1){
          total.push(e.price)
        }else if(e.quantity > 1){
          total.push(e.totalprice)
        }

      
     })


     const sum = total.reduce(function(a, b){
      return a + b;
  }, 0);
 return sum
   
   }
  
}

const sendtptice = (state)=>{

  const random = Math.floor(Math.random()*100)

history.push(`/cart/${random}`,{whole:state,data:totalpricevalue(state)})

}


    return (
        <div className="jumbotron">
         <h2 className="text-center display-3 ">Your Cart</h2>
          <div className="row p-2">
  {showempty? <h2 className='display-5 text-center'>No item in cart</h2> : fetchvalue(state)  }
  
</div>

{showempty ? null : 
<table style={{background:"#e3e3e3"}} className="table container jumbotron">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">TotalPrice</th>
      <th scope="col">Quantity</th>
      
    </tr>
  </thead>
  <tbody>
    {tablevalue(state)}
    <tr>
  <th scope="row">Total Price <span style={{fontSize:"17px",color:"orange"}}> &nbsp; {totalpricevalue(state)} </span></th>
      <td colspan="2"><button className='btn btn-primary' onClick={()=>sendtptice(state)}>Checkout</button></td>
     
    </tr>
  </tbody>
</table>
}

       </div>
    )
}

function mapStateToProps(state){

  return{
    cartdata:state.businessinfo.cartall,
    userFound:state.businessinfo.user
  }
}

export default connect(mapStateToProps,null)(Cart)
