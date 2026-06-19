import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {
  MDBContainer, MDBRow, MDBCol, MDBInput,
  MDBBtn, MDBIcon, MDBCheckbox
} from 'mdb-react-ui-kit';

import Swal from "sweetalert2";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password
    };

    axios.post("http://localhost:8080/login", loginData)
      .then((response) => {
        const res = response.data;

        if (res.status === true) {
          Swal.fire("Success", res.message || "Login Successful", "success");
          navigate("/dashboard");

        } else {
          Swal.fire("Error", res.message || "Invalid email or password", "error");
        }
      })
      
      .catch((error) => {
        console.log(error);
        Swal.fire("Error", "Server problem or backend not running", "error");

      });
  };

  return (
    <>
      <MDBContainer fluid className="p-3 my-5 h-custom">

        <MDBRow>

          <MDBCol col='10' md='6'>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </MDBCol>

          <MDBCol col='4' md='6'>

            <div className="d-flex flex-column align-items-center justify-content-center">

  <p className="lead fw-normal mb-3">
    Sign in with
  </p>

  <div>
    <MDBBtn floating size="md" tag="a" className="me-2">
      <MDBIcon fab icon="facebook-f" />
    </MDBBtn>

    <MDBBtn floating size="md" tag="a" className="me-2">
      <MDBIcon fab icon="twitter" />
    </MDBBtn>

    <MDBBtn floating size="md" tag="a" className="me-2">
      <MDBIcon fab icon="linkedin-in" />
    </MDBBtn>
  </div>

</div>
            <div className="divider d-flex align-items-center justify-content-center my-4">
                  <hr className="flex-grow-1 me-3" />
                    <p className="fw-bold mb-0">Or</p>
                  <hr className="flex-grow-1 ms-3" />
            </div>

            <MDBInput
              wrapperClass='mb-4'
              label='Email address'
              id='emailInput'
              type='email'
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <MDBInput
              wrapperClass='mb-4'
              label='Password'
              id='passwordInput'
              type='password'
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <hr />

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>

            <div className='d-flex align-items-center justify-content-between mt-4 pt-2'>
              <MDBBtn className="mb-0 px-5" size='lg' onClick={handleSubmit}>
                Login
              </MDBBtn>

              <p className="small fw-bold mb-0">
                Don't have an account?
                <a href="#!" className="link-danger" onClick={() => navigate('/register')}> Register</a>
              </p>
            </div>

          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </>
  );
};

export default Login;