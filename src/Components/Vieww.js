/*for practise*/
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle
    
  } from 'reactstrap'; 
  import { Button, TabContainer, Table } from 'react-bootstrap';
  import { Link, NavLink } from 'react-router-dom'
  import { useParams } from 'react-router-dom';
  import axios from 'axios';

function Vieww() 
{
    
    const [emp,setEmp]=useState(
        {
          id:"",
          Key:"",
          Value:"" 
        }
      );
      
      const {id}=useParams();
  useEffect(()=>
  {
    empp();
  },[])
  const empp=async()=>{
    const res=await axios.get(`http://localhost:3003/users/${id}`);
    console.log(res.data)
    setEmp(res.data);  
  }



  return (
    <div className='w-75 mx-auto shadow p-5'>
         <Card>
      <CardBody>
      <CardTitle>vieww</CardTitle>
      <CardTitle>{emp.Key}</CardTitle>
      <CardTitle>{emp.Value}</CardTitle>
      <CardSubtitle>
      <Button as={Link} to='/Edit' style={{marginRight:10 }}>Edit</Button>
      <Button as={Link} to='/cancle' style={{marginRight:10 }}>Cancle</Button>
      </CardSubtitle>
      </CardBody>
      </Card>
    </div>
  )
}

export default Vieww