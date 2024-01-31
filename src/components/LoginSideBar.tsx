import BaseWhiteIcon from '@/icons/BaseWhiteIcon'
import Discord from '@/icons/Discord'
import Github from '@/icons/Github'
import LinkedIn from '@/icons/LinkedIn'
import Twitter from '@/icons/Twitter'

const LoginSidebar = () => {
    return (
        <div className="w-[100%] h-full border-t-[100vh] border-t-solid border-purple border-r-[15vh] border-r-transparent hidden md:block">
            <div className="absolute top-0 h-full w-[50%]">
                <div className="flex flex-col h-full w-full justify-between p-14">
                    <BaseWhiteIcon />
                    <div className="w-[70%] flex justify-center">
                        <span className=" text-7xl font-bold text-white">BASE</span>
                    </div>

                    <div className="w-[70%] flex gap-x-10 justify-center">
                        <Github />
                        <Twitter />
                        <LinkedIn />
                        <Discord />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSidebar
