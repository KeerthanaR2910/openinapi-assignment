import LoginHeader from "@/components/LoginHeader";
import LoginSidebar from "@/components/LoginSideBar";
import SignInContainer from "@/components/SignInContainer";

const Login = () => {
    return  <div className="w-full h-[100vh] flex flex-col md:flex-row bg-darker-white">
            <div className="md:w-[50%] w-full">
                <LoginSidebar />
                <LoginHeader />
            </div>
            <SignInContainer />
</div>
}

export default Login;
