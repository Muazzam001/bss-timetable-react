import React from 'react';
import AuthHeader from '@/src/shared/authHeader/authHeader.jsx';

const AuthLayout = ({children}) => {
    return (
        <>
            <AuthHeader/>
            {children}
        </>
    )
}

export default AuthLayout