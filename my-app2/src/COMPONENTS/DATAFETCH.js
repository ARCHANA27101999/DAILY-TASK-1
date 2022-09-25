import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
function DATAFETCH() {
  const [search, setsearch] = useState("name")
    const [Movie1, setMovie] = useState([])
    const [Searchterm, setSearchterm] = useState("")

    console.log(Movie1);


    function s(){
      axios.get("https://omdbapi.com/?s=movie&apikey=6556e5a8").then((res)=>{
        setMovie(res.data.Search);
    })

    }
    useEffect(() => {
        //
       
      s()
    
     
    },[])
    function sub(){
        // console.log(Searchterm)
      
         setMovie(Movie1.filter(pre=>(pre.Title.toUpperCase().includes(Searchterm.toUpperCase()))))
        


        

    }
  
    function clear(){

    s()
 

    console.log(search);
      
   

  }
    

  return (
    <div>
        <input type="text" placeholder={search} style={{color:"purple"}} onChange={(e)=>{setSearchterm(e.target.value)}}></input>
        <button  style={{background:"grey",color:"purple"}} onClick={sub}>submit</button>
        <button style={{background:"grey",color:"purple"}} onClick={clear}>clear</button>
       
        <h1 style={{color:"grey"}}> MOVIES .. .. ...</h1>

<Table  style={{border :"1px solid purple "}} striped bordered hover>
      <thead>
        <tr>
          <th style={{width:"874px",height:"41px",color:"purple",background:"grey"}}>Title</th>
          <th style={{width:"874px",height:"41px",color:"purple",backgroundColor:"yellow"}}>Type</th>
          <th style={{width:"874px",height:"41px",color:"purple",background:"grey"}}>Year</th>
          
        </tr>
      </thead>
      <tbody>
    
      
         { Movie1.map((item)=>{
            return<>
              <tr> 
             
       
        <th  style={{width:"874px",height:"41px",color:"purple",backgroundColor:"yellow"}}> {item.Title}</th>
    
        <td style={{width:"874px",height:"41px",color:"purple",backgroundColor:"grey"}}> {item.Type}</td>
       
        <td style={{width:"874px",height:"41px",color:"purple",backgroundColor:"yellow"}} > {item.Year}</td>
       
        </tr>
       
     
            
            </>
         }
         )
          
        }
          
      
    

      </tbody>

        
       
      
    </Table>
        
    


      
  
{/* <td style={{height:"700px",width:"40%"}}> <img  alt ="" src={item.Poster}></img></td> */}
    {/* //error undefined reading map comes when usestate give empty */}
 
      
    
               

         





   
    


        

    </div>
   

  )
   


 
  }
  
  
export default DATAFETCH