var data = [{
  id:1,
  brandname:'Apple',
  image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  info:'Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band',
  price:1000,
  quantity:1
},
{
  id:2,
  brandname:'Cocooil',
  image:'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  info:'Coco Soul Cold Pressed Natural Virgin Coconut Oil, 500 ml',
  price:500,
  quantity:1
  
},
{
  id:3,
  brandname:'Cycle',
  image:'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  info:'Prince Mens Nexuss 26" Sports Bicycle Dual disc MAT Black 3088',
  price:800,
  quantity:1
},
{
  id:4,
  brandname:'Nike',
  image:'https://images.unsplash.com/photo-1578021046026-483fa99ffad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  info:'Mens Air Max Advantage 3 Running Shoes',
  price:3000,
  quantity:1
}
]




 export  async function alldata(){
    return{
 
     type:'GET_DATA',
     payload:data
 
 }
       
   }

   var cart = []
   export async function pushdata(value){
    
     cart.push(value)
     
     
    return{
 
     type:'GET_CART',
     payload:cart
 
 }
       
   }

   export  function login(value){
 
   return{

    type:'GET_USER',
    payload:value

}
      
  }



 

