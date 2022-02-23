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
import { getEmp } from '../Services/Api';
import axios from 'axios';
//<></>
function VView() 

{

  const [emp,setEmp]=useState(
    {
      id:"",
      Key:"",
      Value:"" 
    }
  );

  const [a,setA]=useState('ZEESHAN')

  
  /* useEffect(()=>{
        getAllEmp();
    },[])

    const getAllEmp= async()=>{
     const reponse=  await getEmp();
     console.log(reponse.data)
     setEmployees(reponse.data)

    }*/

  const {id}=useParams();
  useEffect(()=>
  {
    empp();
  },[])
  const empp=async()=>{
    const res=await axios.get(`http://localhost:3003/ ${id}`);
    console.log(res.data)
    setEmp(res.data);  
  }
  return (
    <div>
      <Card>
      <CardBody>
      <CardTitle>{a}</CardTitle>
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

export default VView

