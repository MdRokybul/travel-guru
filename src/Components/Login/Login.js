import React, { useContext, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

const formStyle = {
    width: "45%", 
    margin: "0 auto", 
    border: '1px solid black', 
    padding: "15px",
    textAlign: 'left',
    fontWeight: "bold"
}


const submitButton = {
    background: 'none',
    border: '1px solid black',
    borderRadius: '24px',
    margin: '10px 0',
    width: '100%',
    padding: '8px'
}

const inputStyle = {
    width: '100%'
}

const createAccountButton = {
    padding: "10px", 
    width: "100%", 
    backgroundColor: "gold", 
    border: "none"
}

const Login = () => {
    const [user, setUser] = useContext(UserContext);
    console.log(user)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    ////////////////This is for Login with Google
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSign = () => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signInUser = {name: displayName, email};
            setUser(signInUser);
            history.replace(from);
          }).catch(function(error) {
            
          });
    }


    /////////////////This is for Login with Facebook
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookSign = () => {
      firebase.auth().signInWithPopup(fbProvider).then(function(result) {
        const {displayName, email} = result.user;
            const signInUser = {name: displayName, email};
            setUser(signInUser);
            history.replace(from);
        // ...
      }).catch(function(error) {

      });
    }


    ///////////////////This is for Login with Email and Password
    const [newUser, setNewUser] = useState(true);
    const [loginUser, setLoginUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        passwordNotMatch: false,
        createSuccess: false,
        error : false,
        success: false,
      })
      console.log(loginUser)

    const handleSubmit = (e) => {
      if(newUser && loginUser.email && loginUser.password === loginUser.confirmPassword){
        firebase.auth().createUserWithEmailAndPassword(loginUser.email, loginUser.password)
      .then(res => {
        const newUserInfo = {...loginUser};
        newUserInfo.error = false;
        newUserInfo.createSuccess = true;
        setLoginUser(newUserInfo)
      })
      .catch(err => {
        const newUserInfo = {...loginUser};
        newUserInfo.error = err.message;
        newUserInfo.success = false;
        setLoginUser(newUserInfo);
        console.log(newUserInfo.error);
      })
    }
    else{
      const newUserInfo = {...loginUser};
      newUserInfo.passwordNotMatch = true;
      setLoginUser(newUserInfo)
    }
    

      if(!newUser && loginUser.email && loginUser.password ){
        firebase.auth().signInWithEmailAndPassword(loginUser.email, loginUser.password)
        .then(res => {
          const newUserInfo = {...loginUser};
          const {firstName, lastName, email} = newUserInfo;
          const userData = {name: firstName + lastName, email}
          newUserInfo.success = true;
          setLoginUser(newUserInfo);
          setUser(userData);
          history.replace(from);
        })
        .catch(err =>{
          const newUserInfo = {...loginUser};
          setLoginUser(newUserInfo);
          var errorCode = err.code;
          var errorMessage = err.message;
          console.log(errorCode, errorMessage)
        })
      }

      else{
        const newUserInfo = {...loginUser};
        newUserInfo.passwordNotMatch = true;
        setLoginUser(newUserInfo)
      }
        e.preventDefault();
    }

    ////////////////This is for getting data from input
    const handleBlur = (e) => {
    let isFieldValid;
    console.log(isFieldValid)
 
 
    if (e.target.name === 'firstName') {
      isFieldValid = e.target.value;
    }
    if (e.target.name === 'lastName') {
      isFieldValid = e.target.value;
    }
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'  ) {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(e.target.name === 'confirmPassword'  ) {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }

    if(isFieldValid){
      const newUserInfo = {...loginUser}
      newUserInfo[e.target.name] = e.target.value;
      setLoginUser(newUserInfo);
    }
    }

    const handleLoginButton =() => {
      const newUserInfo = {...loginUser};
      newUserInfo.error = false;
      newUserInfo.passwordNotMatch = false;
      setLoginUser(newUserInfo);
      setNewUser(!newUser)
    }
    return (
      <Container>
          <Row>
            <form onSubmit={handleSubmit} style={formStyle}>
                {
                  newUser ? 
                    <div>
                      <h4>Create an Account</h4>
                      <label for="firstName">First Name</label>
                      <input style={inputStyle} type="text" name="firstName" onBlur={handleBlur} required /> <br /><br />
                      <label for="firstName">Last Name</label>
                      <input style={inputStyle} type="test" name="lastName" onBlur={handleBlur} required /> <br /><br/>
                      <label for="firstName">Email</label>
                      <input style={inputStyle} type="email" name="email" onBlur={handleBlur} required /> <br /><br />
                      <label for="firstName">Password</label>
                      <input style={inputStyle} type="password" name="password" onBlur={handleBlur} required /> <br /><br/>
                      <label for="firstName">Confirm Password</label>
                      <input style={inputStyle} type="password" name="confirmPassword" onBlur={handleBlur} required /> <br /><br/>
                      <input style={inputStyle} type="submit" style={createAccountButton} value="Create an Account" />
                    </div>:
                    <div>
                      <h4>Login</h4>
                        <label for="firstName">Email</label>
                        <input style={inputStyle} type="email" name="email" onBlur={handleBlur} required /> <br /><br />
                        <label for="firstName">Password</label>
                        <input style={inputStyle} type="password" name="password" onBlur={handleBlur} required /> <br /><br/>
                        <label for="firstName">Confirm Password</label>
                        <input style={inputStyle} type="password" name="confirmPassword" onBlur={handleBlur} required /> <br /><br/>
                        <input style={inputStyle} type="submit" style={createAccountButton} value="Login" />
                  </div>
                }
                
                {
                  newUser ? <p onClick={handleLoginButton}> Already have an account? 
                  <span style={{color: 'red', cursor: 'pointer'}}> Login</span></p>
                  : <p onClick={handleLoginButton}> Don't have an account? 
                  <span style={{color: 'red', cursor: 'pointer'}}> Create a new account</span></p>
                }
                {loginUser.error   && <p> {loginUser.error} </p> }
                {loginUser.passwordNotMatch && <p> Password Not Matched!!! </p>}
                {loginUser.createSuccess && <p> Account created successfully!! Go to home and repeat the process again!</p>}
            </form>
          </Row>
          <Row style={{width: '35%', margin:'0 auto'}}>
              <button onClick={handleGoogleSign} style={submitButton}  >Continue with Google</button>
          </Row>
          <Row style={{width: '35%', margin:'0 auto'}}>
              <button onClick={handleFacebookSign} style={submitButton}  >Continue with Facebook</button>
          </Row>
      </Container>
    );
};

export default Login;