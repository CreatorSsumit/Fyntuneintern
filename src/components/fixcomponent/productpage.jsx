import React , { useState,useEffect } from 'react';
import {alldata,pushdata} from "../../actions/index"
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import {useHistory} from "react-router-dom" 

function Productpage(props) {

    const history = useHistory()

const [datavalue, setdatavalue] = useState([])

useEffect(() => {
 setvalue()
 
},[])

 const setvalue = ()=>{
    props.alldata();
}



  

const product = (e)=>{ 
history.push(`/product/${e.id}`,{e})
}


const fetchdata = (data)=>{

    if(data){
        return data.map((e)=>{
            return(
                <div key={e.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div style={{background:"#efefef"}} className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-40 rounded w-full object-cover object-center mb-6" src={`${e.image}`} alt="content" />
            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{e.brandname}</h3>
            <h2  className="text-lg text-gray-900 font-medium title-font mb-4">{e.info}</h2>
            <h2  className="text-lg text-primary font-medium title-font mb-4">Price: &nbsp; {e.price}</h2>
                  <button className="flex  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>product(e)}>Buy</button>
                
                </div>
            </div>
            )
        })
    }
}

    return (
        <div>
            <h3 className="display-4 text-center mt-3">Top Deals</h3>
            <div className="flex flex-wrap m-2">
                
   {fetchdata(props.allcards.show)}
     
            </div>
        </div>
    )
}
function mapStateToProps(state){
   
    return {
       allcards:state.businessinfo
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({alldata,pushdata},dispatch)
    }


    
export default connect(mapStateToProps,mapDispatchToProps)(Productpage)
