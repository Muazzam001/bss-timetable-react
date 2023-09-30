import '../signIn.scss';
import {Link, useNavigate} from 'react-router-dom';
import Button from '../../../shared/Button';

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
                        type="button"
                        rounded={true}
                        className="p-3"
                        color="blue-dark2"
                        title="Back to Sign In"
                        onClick={() => navigate("/")}
                    />
                </div>
            </div>
        </>
    )
}

export default ResetCard;
