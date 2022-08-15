import React, {component} from 'react';

const SignUp = () => {

    const signUpHandler = (e) => {
        e.preventDefault();

        console.log(e.target.username.value)

        const signUpData = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
            passConfirmed: e.target.passConfirmed

        }

        fetch('http://localhost:3000/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpData)
        })
            .then((res) => res.json())
            .then((data)=> console.log('response after signup:', data))
            .catch((err) => console.log(err));

 
    }

    return (
      <div className="sign-up-page">
        <form className="sign-up-form" onSubmit = {(e) => signUpHandler(e)}>

            <label> 
                Username:
                <input type="text" name="username" />
            </label>

            <label> 
                Email:
                <input type="email" name="email" />
            </label>

            <label> 
                Password:
                <input type="password" name="password" />
            </label>
    
            <label> 
                Confirm Password:
                <input type="password" name="passConfirmed" />
            </label>
                <input type="submit" name="submit-button" />
            <label> 
   
            </label>


        </form>
      </div>
    )
  }
  
  export default SignUp;