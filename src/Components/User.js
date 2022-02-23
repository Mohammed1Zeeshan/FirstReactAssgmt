// {} ()
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory,useParams,Link } from 'react-router-dom';
import { Button, Container, FormGroup, Input ,Form} from "react-bootstrap";
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
        {/* <div className='w-75 mx-auto shadow p-5'> 
        <h2>Edit User</h2>
        <Form>
           
        <div className='form-group'>
        <Input type='text'  placeholder="enter id"  name="id" className='form-control form-control-lg'
        value={id} onChange={e=>onInputChange(e)} ></Input>
        </div>
        <div className='form-group'>
        <Input type='text'  placeholder="enter key" name="Key" className='form-control form-control-lg'
        value={Key} onChange={e=>onInputChange(e)}></Input>
        </div>
        <div className='form-group'> 
        <Input type='text'  placeholder="enter value" name="Value" className='form-control form-control-lg'
         value={Value} onChange={e=>onInputChange(e)} ></Input>
        </div>
        <Button onClick={Submit}>Update</Button>
        </Form>
        </div> */}
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