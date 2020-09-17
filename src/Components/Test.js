import React from 'react';

const inputStyle = {
    width: '100%'
}

const Test = () => {
    return (
        <div >
            <form style={{width: "45%",border: '1px solid black', margin: "0 auto", padding: "15px", textAlign:"left", fontWeight: "bold"}}>
                <h4>Create an Account</h4>
                <label for="firstName">First Name</label>
                <input style={inputStyle} type="text" name="firstName" required /> <br /><br />
                <label for="firstName">Last Name</label>
                <input style={inputStyle} type="test" name="lastName" required /> <br /><br/>
                <label for="firstName">Email</label>
                <input style={inputStyle} type="email" name="email" required /> <br /><br />
                <label for="firstName">Password</label>
                <input style={inputStyle} type="password" name="password" required /> <br /><br/>
                <label for="firstName">Confirm Password</label>
                <input style={inputStyle} type="password" name="password" required /> <br /><br/>
                <input style={inputStyle} type="submit" style={{padding: "10px", width: "100%", backgroundColor: "gold", border: "none"}} value="Create an Account" />
            </form>
        </div>
    );
};

export default Test;