import React from 'react'

const Register = () => {
    return (
        <div className='form-container'>
            <div className='form-header'>
                <span className='app-logo'><img src='https://cdn-icons-png.flaticon.com/128/3481/3481038.png' alt='logo' /></span>
                <span className='app-title'>Chat App</span>
            </div>
            <div className='form-wrapper'>
                <form>
                    <input type='text' name='username' placeholder='UserName' />
                    <input type='email' name='email' placeholder='Email Id' />
                    <input type='password' name='password' placeholder='Password'/>
                    <input type='file' name='file' id='file' />
                    <label htmlFor='file' className='file'>
                        <img src='https://cdn-icons-png.flaticon.com/128/4170/4170295.png' alt='file' />
                        <span>Add your avatar</span>
                    </label>
                    <button className='register btn'>Register</button>
                </form>
            </div>
            <p>Already have an account? <a href=''>Login</a></p>
        </div>
    )
}

export default Register
