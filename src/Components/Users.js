// {} ()
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom'
import { Button, TabContainer, Table } from 'react-bootstrap';
// import {getuserlist} from './Service'


function Users()
{
  const [users,setUsers]=useState([]);

useEffect(()=>{
  loadData();
},[])

 const loadData=async ()=>{
   const res= await axios.get('http://localhost:3003/users')
   console.log(res.data);
   setUsers(res.data);
 } 
 const deleteuser=async id=>{
   await axios.delete(`http://localhost:3003/users/${id}`)
   loadData();
 }


  return (
    <div>
      <Table  striped bordered hover className='table table-borderless'>
            <thead className='thead-dark'>
            <tr>
            <th>KEY</th>
            <th>VALUE</th>
            <th>ACTION</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map(emp=>(
                    <tr>
                        <th>{emp.Key}</th>
                        <th>{emp.Value}</th>
                         <th>
                        <Button as={Link} to=  {`/user/${emp.id}`} style={{marginRight:10 }}>View</Button>
                             
                             <Button as={Link} to='/View' onClick={()=> deleteuser(emp.id)}>Delete</Button>
                         </th>
                    </tr>  
                )) 
            }
            </tbody>

        </Table>
    </div>

  )
}

export default Users