/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Container,  Image} from 'react-bootstrap'
import {  useEffect, } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import nagefyLogo from "../../assets/nagefyLogo200.png"
import { url } from '../../redux/actions/action'


const Verification = () => {


const params = useParams()
const email = params.email
const navigate = useNavigate()

const verifyEmail = async () =>{

  try{
    
    await fetch(`${url}/auth/verify-client/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
    });
    
  } catch (error) {
    console.log(error);
    
  }
}

useEffect(() => {
  if(email){
 verifyEmail()
  }
 
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [email])




  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <Image src={nagefyLogo} alt="nagefy_logo" />
    <Container className="m-3 shadow-lg container-custom rounded-4 p-5 d-flex justify-content-center align-content-center flex-column">
        <h1 className='text-center'>GRAZIE</h1>
      <h3 className='p-3 text-center'><strong>Email confermata con successo!</strong></h3>
     
      
      <Button type="submit" className="mb-3 mt-5 mx-auto border-0" onClick={() => navigate("/login-client")} style={{backgroundColor: "blueviolet"}}>Vai al Login</Button>
    </Container>
  </div>
  )
}

export default Verification