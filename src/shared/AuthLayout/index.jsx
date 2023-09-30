import AuthHeader from "../AuthHeader";

const AuthLayout = ({children}) => {
    return (
        <>
            <AuthHeader/>
            {children}
        </>
    )
}

export default AuthLayout;