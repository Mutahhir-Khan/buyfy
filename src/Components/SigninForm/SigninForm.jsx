import React, {useState} from 'react'
import { connect } from 'react-redux';
import { signin } from '../../Redux/authRedux/authActions';

const SigninForm = ({signin}) => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    var handleFormSubmit = (e) => {
        e.preventDefault()
        var cred = {
            email,
            password
        }
        signin(cred)
        
        console.log(email, password)
        // console.log(email)
        // console.log(password)
    }

    

    return (
        <div>
            <h1>
                Signinp form
                <form onSubmit={handleFormSubmit} type="submit">
                    <input onChange={(e) => setemail(e.target.value)} value={email} type="text" placeholder="email"></input>
                    <input onChange={(e) => setpassword(e.target.value)} value={password} type="text" placeholder="password"></input>
                    <button type="submit">submit</button>
                </form>
            </h1>
        </div>
    )
}

var actions = {
    signin
}

export default connect(null, actions)(SigninForm)
