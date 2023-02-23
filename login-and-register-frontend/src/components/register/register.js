import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Modal, ModalHeader } from "reactstrap"
import Login from "../login/login"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from "../../header/header"

const Register = () => {

    const history = useHistory()
    const [ modal, setModal] = useState(false)
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (

      <div className="content">
      <Header/>


        <div className="register">

          
  <Modal size="lg"
            isOpen={modal}
            toggle={()=>setModal(!modal)}
            >

                <ModalHeader
                            toggle={()=>setModal(!modal)}

                >
           <Login/>
                </ModalHeader>
            </Modal>
            {console.log("User", user)}
            {/* <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input> */}
            {/* <div className="button" onClick={() => history.push("/login")}>Login</div> */}















            <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className="label">Name</Form.Label>
          <Form.Control type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange } />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label className="label">Email</Form.Label>
          <Form.Control  type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange } />
        </Form.Group>
      </Row>

      

    

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange } />
        </Form.Group>



        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label className="label">Conform password</Form.Label>
          <Form.Control  type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm Password" onChange={ handleChange } />
        </Form.Group>
     

      <Form.Group as={Col} controlId="formGridZip">
          <Form.Label placeholder="Phone Number">Phonehone</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      

     

    
    </Form>

    <div className="button " onClick={()=>{register();setModal(true)}} >Signup</div>

        </div>

         </div>
    )
}

export default Register