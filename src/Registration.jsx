import React, { useState } from 'react'

function Registration() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogIn, setIsLogIn] = useState(true)
    const [isRegistered, setIsRegistered] = useState(false)
    const [users, setUsers] = useState([])
    function anthentication() 
    {
        if (isRegistered) {
            const user = users.find((e) => e.email === email && e.password === password)
            if (user) {                
                setIsLogIn(true)
            }
            else {
                alert('login failed')  
            }

        }
        else {
            //register
            const newUser={email,password}
            setUsers([...users,newUser])
            localStorage.setItem('users',JSON.stringify([...users,newUser]))
            setIsLogIn(true)
        }        
    }
    function logout() {
        setIsLogIn(false)
        setEmail('')
        setPassword('')
    }
    return (
        <div>
            {
                isLogIn ? (
                    <div>
                        <h2>Welcome, {email}</h2>
                        <button onClick={logout}>logout</button>
                    </div>
                ) :
                    (
                        <div>
                            <h2>{isRegistered ? 'Login' : 'Register'}</h2>
                            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            <button onClick={anthentication}>{isRegistered ? 'Login' : 'Register'}</button>
                            <p>
                                {isRegistered ? 'create an account. ' : 'already have an account. '}
                                <a onClick={() => setIsRegistered(!isRegistered)} style={{ cursor: "pointer" }}>
                                    {isRegistered ? 'register' : 'login'}
                                </a>
                            </p>
                        </div>
                    )
            }

        </div>
    )
}

export default Registration