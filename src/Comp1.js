import React,{useState} from 'react'
import File from './File'
import Food from './Food.jpg'

function Comp1() 
{
const[search,setSearch]=useState("");
const[data,setdata]=useState([]);

const YOUR_APP_ID="9924c67a"
const YOUR_APP_KEY="297ac41244426f09a648960a6abec044"	
const submitkaro=(e)=>
{
  e.preventDefault();
  fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&calories=591-722&health=alcohol-free`).then(res=>res.json()).then((data)=>setdata(data.hits))
  console.log(data)

}

  return (
    <div style={{ backgroundImage:`url(${Food})`,height:"320vh"}}>
      <center>  
        <form onSubmit={submitkaro}>
          <label style={{color:'white'}}><b><h3>Food</h3></b></label><br/>
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} style={{margin:"8px"}} /><br/>
          <button><b>Submit</b></button><br/>
        </form>
         {data.length>1?<File data={data}/>:null}
    
      </center>
      
    </div>
  )
}

export default Comp1
