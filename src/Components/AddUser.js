// {} () <></>
import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';


import { Button,  Input ,Form} from "reactstrap";

function AddUser()

{
   const historyy=useHistory()
    
    const [user,setUser]=useState({
        id:'',
        Key:'',
        Value:''
    })
    const {id,Key,Value}=user;

    const onInputChange =e=>{
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user);
    }
    const Submit= async e=>{
          e.preventDefault();
          await axios.post('http://localhost:3003/users',user)
          historyy.push('')
          
    }

  return (
    <div className='container'>
        
        <div className='w-75 mx-auto shadow p-5'> 
        <h2>Add User</h2>
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
        <Button as={Link} to=''  onClick={Submit}>Add</Button>
       
        </Form>
        </div>
       

    </div>
  )
}

export default AddUser;