import AuthHeader from "../authHeader/authHeader.jsx";

const AuthLayout = ({children}) => {
    return (
        <>
            <AuthHeader/>
            {children}
        </>
    )
}

export default AuthLayout;