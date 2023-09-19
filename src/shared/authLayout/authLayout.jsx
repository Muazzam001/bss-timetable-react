import React from 'react';
import AuthHeader from '../authHeader/authHeader';

const AuthLayout = ({ children }) => {
  return (
    <>
          <AuthHeader/>
          {children}
    </>
  )
}

export default AuthLayout