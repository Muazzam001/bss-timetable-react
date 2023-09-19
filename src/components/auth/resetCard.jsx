import React from 'react'
import Button from '../../shared/button/button'
import {Link, useNavigate} from 'react-router-dom'
import './signIn.scss'

const ResetCard = ({className}) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="card-wrapper">
                <div className="flex flex-col items-center justify-center">
                    <h4 className='text-dark/80 text-h5 xl:text-h4 font-primary'>Check your inbox</h4>
                    <p className='text-dark/80 text-xs text-center font-primary'>We’ve sent a reset link to your inbox.
                        If it doesn’t show up soon, check your spam folder.</p>
                </div>

                <Link className="text-blue-dark1 text-sm cursor-pointer text-center mx-auto font-primary">Resend
                    email</Link>

                <div className="flex flex-col gap-y-5 w-full">
                    <Button
                        rounded={true}
                        type="button"
                        onClick={() => navigate("/")}
                        title="Back to Sign In"
                        color="blue-dark2"
                        className="p-3"
                    />
                </div>
            </div>
        </>
    )
}

export default ResetCard
