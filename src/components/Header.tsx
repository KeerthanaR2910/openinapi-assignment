import BaseHeader from "@/components/BaseHeader";
import BurgerIcon from "@/icons/Burger";
import Bell from "@/icons/Bell";
import Image from "next/image";
import profile from "@/icons/profile.png"

type HeaderProps = {
    onBurgerClick: () => void
}
const Header = ({ onBurgerClick}: HeaderProps) => {
    return (
        <div>
            <div className="flex justify-between md:p-12 bg-white md:bg-grayish-white p-7">
                <div className="md:hidden flex gap-x-4">
                    <button onClick={onBurgerClick}>
                        <BurgerIcon/>
                    </button>
                    <BaseHeader iconSize={30}/>
                </div>
                <span className="text-black font-semibold text-2xl hidden md:block">
                    Upload CSV
                </span>
                <div className="flex items-center gap-x-7">
                    <Bell />
                    <Image alt="profile-pic" src={profile} width={30} height={30} className={"rounded-full object-cover h-[30px] w-[30px]"}/>
                </div>
            </div>
        </div>
    )
}

export default Header