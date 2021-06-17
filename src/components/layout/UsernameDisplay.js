import React from 'react'

const UsernameDisplay = () => {
    const userName = localStorage.getItem("userName");
    
    return (
        <i>
            {(userName !== "" && <span className="text-light me-5 h5">Bem-vindo, {userName}!</span>)}
        </i>
    )
}

export default UsernameDisplay
