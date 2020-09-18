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

    var fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookSign = () => {
      
      firebase.auth().signInWithPopup(fbProvider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(result.user);
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorCode, errorMessage)
        // ...
      });
    }

    const [loginUser, setLoginUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
      })


    const [newUser, setNewUser] = useState(true);
    const handleSubmit = (e) => {
      if(newUser && loginUser.email && loginUser.password){
        firebase.auth().createUserWithEmailAndPassword(loginUser.email, loginUser.password)
      .then(res => {
        const newUserInfo = {...loginUser};
        newUserInfo.error = '';
        newUserInfo.success = true;
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

      if(!newUser && loginUser.email && loginUser.password){
        firebase.auth().signInWithEmailAndPassword(loginUser.email, loginUser.password)
        .then(res => {
          const newUserInfo = {...loginUser};
          setLoginUser(newUserInfo);
          const {name, email} = newUserInfo;
          const signInUser = {name, email};
          setUser(signInUser);
        })
        .catch(err =>{
          const newUserInfo = {...loginUser};
          setLoginUser(newUserInfo);
          var errorCode = err.code;
            var errorMessage = err.message;
            console.log(errorCode, errorMessage)
        })
      }
        e.preventDefault();
    }
    const handleBlur = (e) => {
    let isFieldValid;
    if (e.target.type === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.type === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...loginUser}
      newUserInfo[e.target.type] = e.target.value;
      setLoginUser(newUserInfo);
    }
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
                <input style={inputStyle} type="text" name="firstName" required /> <br /><br />
                <label for="firstName">Last Name</label>
                <input style={inputStyle} type="test" name="lastName" required /> <br /><br/>
                <label for="firstName">Email</label>
                <input style={inputStyle} type="email" name="email" onBlur={handleBlur} required /> <br /><br />
                <label for="firstName">Password</label>
                <input style={inputStyle} type="password" name="password" onBlur={handleBlur} required /> <br /><br/>
                <label for="firstName">Confirm Password</label>
                <input style={inputStyle} type="password" name="password" required /> <br /><br/>
                <input style={inputStyle} type="submit" style={createAccountButton} value="Create an Account" />
                
                    </div>
                  :
                  <div>
                        <h4>Login</h4>
                <label for="firstName">Email</label>
                <input style={inputStyle} type="email" name="email" onBlur={handleBlur} required /> <br /><br />
                <label for="firstName">Password</label>
                <input style={inputStyle} type="password" name="password" onBlur={handleBlur} required /> <br /><br/>
                <label for="firstName">Confirm Password</label>
                <input style={inputStyle} type="password" name="password" required /> <br /><br/>
                <input style={inputStyle} type="submit" style={createAccountButton} value="Create an Account" />
                    </div>
                }
                
                {
                  newUser ? <p onClick={() => setNewUser(!newUser)}> Already have an account? 
                  <span style={{color: 'red', cursor: 'pointer'}}> Login</span></p>
                  : <p onClick={() => setNewUser(!newUser)}> Don't have an account? 
                  <span style={{color: 'red', cursor: 'pointer'}}> Create a new account</span></p>
                }
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