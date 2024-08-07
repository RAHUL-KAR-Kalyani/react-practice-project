import React, { useState } from 'react'

function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistered, setIsRegistered] = useState(false)
    const [isLogIn, setIsLogIn] = useState(false)
    const [users,setUsers]=useState([])
    
    function handleAuthentication() {
        if (isRegistered) {
            //Login
            const user=users.find((u)=>u.email===email && u.password===password)
            if (user) {
                setIsLogIn(true)                
            }
            else{
                alert('login failed')
            }
        }
        else{
            //Register
            const newUser={email,password}
            setUsers([...users,newUser])
            localStorage.setItem('users',JSON.stringify([...users,newUser]))
            setIsLogIn(true)
        }
    }

    function handleLogout() {
        setIsLogIn(false)
        setEmail('')
        setPassword('')
    }
    return (
        <div className='login'>
            {
                isLogIn ? (
                    <div>
                        <h2>Welcome, {email}</h2>
                        <button onClick={handleLogout}>logout</button>
                    </div>
                ) : 
                (
                    <div>
                        <h2>{isRegistered ? 'Login' : 'Register'}</h2>
                        <br/>
                        
                        <form>
                            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                            <button onClick={handleAuthentication}>
                                {
                                    isRegistered ? 'Login' : 'Register'
                                }
                            </button>
                        </form>
                        <br />
                        <p>
                            {isRegistered ? "Don't have an account.pls register. " : "already have an account.login. "}
                            <a onClick={() => setIsRegistered(!isRegistered)} style={{cursor:"pointer",color:"blue"}}>
                            {
                                isRegistered ? 'Register' : 'Login'
                            }
                            </a>
                        </p>                        
                    </div>
                )
            }
        </div>
    )
}

export default LogIn