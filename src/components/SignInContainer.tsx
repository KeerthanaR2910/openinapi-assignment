import Apple from '@/icons/Apple'
import Google from '@/icons/Google'
import ExternalSignIn from './ExternalSignIn'
import SignInForm from './SignInForm'

const SignInContainer = () => {
    return (
        <div className="md:w-[50%] h-full w-full flex justify-center items-center p-5">
            <div className="flex flex-col gap-y-4 w-full max-w-[400px]">
                <span className=" font-montserrat text-4xl font-bold text-black ">Sign In</span>
                <span className=" font-lato text-base font-normal text-black ">Sign in to your account</span>
                <div className="flex justify-around gap-x-4">
                    <ExternalSignIn label="Sign in with Google" icon={Google} />
                    <ExternalSignIn label="Sign in with Apple" icon={Apple} />
                </div>
                <SignInForm />
                <div className=" flex flex-col md:flex-row justify-center gap-2 items-center">
                    <p className=" text-secondary-gray font-lato">Don't have an account?</p>
                    <p className=" text-blue font-lato">Register here</p>
                </div>
            </div>
        </div>
    )
}

export default SignInContainer
