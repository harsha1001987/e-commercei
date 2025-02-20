import React from 'react'
import { useState } from 'react'
function Login() {
    const {email,setEmail} = useState('')
    const {password,setPassword} = useState('')
  return (
    <div>
      <div>
        <div>
            <h1>user login</h1>
        </div>
        <div>
            <form>
                <div>
                    <input type="text" required value={email} placeholder='email'/>
                </div>
                     <input type="text" required value={password} placeholder='password'/>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
