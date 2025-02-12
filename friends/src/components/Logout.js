import React, { useEffect } from 'react'
import axiosWithAuth from './../utilities/axiosWithAuth'

const Logout = (props) => {

    useEffect(()=> {
        axiosWithAuth()
            .post('/logout')
            .then(res=> {
                localStorage.removeItem("token");
                props.history.push('/login');
            });

    }, );

    return(
        <div>

        </div>
    )
}

export default Logout