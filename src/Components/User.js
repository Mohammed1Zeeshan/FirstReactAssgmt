
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import { Button, Container} from "react-bootstrap";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle
    
  } from 'reactstrap'; 


function User() 
{
   

    const [user,setUser]=useState({
        id:'',
        Key:'',
        Value:''
    })
    const {id}=useParams();
    
    useEffect(()=>{ 
        loaduser();

    },[])
    const loaduser=async ()=>{ 
        const res=await axios.get(`http://localhost:3003/users/${id}`);
     setUser(res.data)
        console.log(res.data)
    }
  return (
    <div className='container'>
        
        <div>User</div>
        
        <div className='w-75 mx-auto shadow p-5'>
        <Container>
         <Card>
      <CardBody>
      
      <CardTitle>View user {user.id}</CardTitle>
      <CardTitle>{user.Key}</CardTitle>
      <CardTitle>{user.Value}</CardTitle>
      <CardSubtitle>

      <Button as={Link} to= {`/Edit/${user.id}`} style={{marginRight:10 }} >Edit</Button>
      <Button as={Link} to='/cancle' style={{marginRight:10 }}>Cancle</Button>
      </CardSubtitle>
      </CardBody>
      </Card>
      </Container>
    </div>
       

    </div>
  )
}


export default User;