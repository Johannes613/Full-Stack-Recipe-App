import { useContext, useEffect, useState } from 'react';
import './Login.css';
import { GlobalContext } from '../GlobalContext';
import google from '../../assets/google-icon.png'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const { accState, setAccState,token,setToken} = useContext(GlobalContext);
    const navigate = useNavigate()
    const [userData,setUserData] = useState({
        username:"",
        email:"",
        password:""
    })


    
  const handleSignUp = async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch('https://recipe-backend-2-cnob.onrender.com/api/users/signup',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify(userData)
      })

      if(!response.ok)
        throw new Error('Error occured')
      const data = await response.json() 
      localStorage.setItem('token',data.token)
      setToken(data.token)

      console.log(response);
      navigate('/')
      
      
    } catch (error) {
      console.log(error)
      
    }

  }
  const handleSignIn = async(e)=>{
    e.preventDefault();
    try {
        const response = await fetch('https://recipe-backend-2-cnob.onrender.com/api/users/login',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify(userData)
          })
          
          if(!response.ok)
            throw new Error('Error occured')
            const data = await response.json() 
            console.log(data);
            localStorage.setItem('token',data.token)
            setToken(data.token)
            navigate('/')

    } catch (error) {
      console.log(error)
      
    }

  }
  const handleGoogle = ()=>{
    fetch('https://recipe-backend-2-cnob.onrender.com/auth/google', {
      method: 'GET',
      credentials: 'include', // Include cookies/auth headers
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

    return ( 
        <div className="login-page">
            <div className="login-cont">
                <h2 className='login-head'> {accState} to Tasty Recipes</h2>
                <button   className='google-auth'><img src={google} alt="" /> {accState} with Google</button>
                <a href="https://recipe-backend-2-cnob.onrender.com/auth/google">google</a>
                <form>
                {accState === 'Sign-up'?<div className="info-input">
                        <p>Name</p>
                        <input type="text" value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})} autoComplete='on'  required />
                    </div>:<></>}
                    <div className="info-input">
                        <p>Email</p>
                        <input type="email" aria-autocomplete='on' value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} autoComplete='on' required />
                    </div>
                    <div className="info-input">
                        <p>Password</p>
                        <input type="password" value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} autoComplete='on' required />
                    </div>
                    {accState === 'Sign-up'?<div className="agreement">
                        <input id='agree' type="checkbox" required />
                        <label for = 'agree'>I agree with the Tasty Recipe's terms and condtions</label>
                    </div>:<></>}

                    <button type='submit' onClick={accState === 'Sign-up'?(e)=>handleSignUp(e):(e)=>handleSignIn(e)} className='sub-btn'>{accState === 'Sign-up'? 'Create Account':'Sign in'}</button>
                    {accState === 'Sign-up'?<div className='check-out'>
                    <p>Already have an account? <span onClick={()=>setAccState('Sign-in')} >Sign In</span></p>
                    

                </div>:
                <div className='check-out'>
                <p>Don't have an account? <span onClick={()=>setAccState('Sign-up')} >Sign Up</span></p>
                
                </div>
                }
                </form>
                
                



            </div>

        </div>
     );
}
 
export default Login;