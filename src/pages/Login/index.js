import React from 'react'
import LoginBox from '../../components/LoginBox'
import './index.css'

export default function Login(props) {
    return (
        <div className = 'login'>
            <LoginBox {...props}/>
        </div>
    )
}
