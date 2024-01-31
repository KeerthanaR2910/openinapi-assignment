import { FormEvent, useState } from "react"
import { useRouter } from "next/router";


const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        router.push("/")
      }

    return (
        <div className=" bg-white rounded-lg">
            <form className=" flex flex-col font-lato text-black justify-between gap-y-4 p-8" onSubmit={handleSubmit}>
                <label>
                    Email address
                </label>
                <input 
                type={"text"}
                className="appearance-none bg-dark-white rounded-md h-[40px] p-2 focus:outline-none focus:outline-black"
                value={email}
                onChange={(event) => setEmail(event.target.value)}/>
                <label>
                    Password
                </label>
                <input 
                type={"password"}
                className=" appearance-none bg-dark-white rounded-md h-[40px] p-2 focus:outline-none focus:outline-black" 
                value={password} 
                onChange={(event) => setPassword(event.target.value)}/>
                <button className="appearance-none text-md text-blue self-start">Forgot Password?</button>
                <button type="submit" className="appearance-none bg-purple text-white rounded-lg font-bold text-md h-[40px] font-montserrat">
                    Sign in
                </button>
            </form>
        </div>
    )
}

export default SignInForm