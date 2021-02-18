import React, {useState} from 'react'
import { connect } from 'react-redux';
import { signup } from '../../Redux/authRedux/authActions';

const SignupForm = ({signup}) => {
    const [fullName, setfullName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    var handleFormSubmit = (e) => {
        e.preventDefault()

        var cred = {
            email, fullName, password
        }
        signup(cred)
        
    }

    

    return (
        <div>
            <h1>
                Signup form
                <form onSubmit={handleFormSubmit} type="submit">
                    <input onChange={(e) => setfullName(e.target.value)} value={fullName} type="text" placeholder="full name"></input>
                    <input onChange={(e) => setemail(e.target.value)} value={email} type="text" placeholder="email"></input>
                    <input onChange={(e) => setpassword(e.target.value)} value={password} type="text" placeholder="password"></input>
                    <button type="submit">submit</button>
                </form>
            </h1>
        </div>
    )
}

var actions ={
    signup
}

export default connect(null, actions)(SignupForm)
