import BaseWhiteLogin from "@/icons/BaseWhite"
import { twMerge } from "tailwind-merge";


const LoginHeader = () => {
    return ( <div className={twMerge("flex gap-x-4 items-center md:hidden bg-purple w-full h-[80px] pl-7")}>
        <BaseWhiteLogin/>
    <span className="block font-semibold text-xl text-white">Base</span>
</div>
)
}

export default LoginHeader