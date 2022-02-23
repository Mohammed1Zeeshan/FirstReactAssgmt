import axios from'axios'

export const url='http://localhost:3003/users'

export const getuserlist= async()=> {
  return  await axios.get(url)
}
export const addempbyid= async(employee)=> {
    return await axios.post(url,employee)
  }