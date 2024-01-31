import BaseIcon from "@/icons/BaseIcon";
import { twMerge } from "tailwind-merge";

const BaseHeader = ({className,iconSize}: {className?: string,iconSize?:number}) => {
    return(
        <div className={twMerge("flex gap-x-4 items-center",className)}>
            <div className="h-[25px] w-[25px] md:h-[42px] md:w-[42px]">
                <BaseIcon size={iconSize}/>
            </div>
            <span className="block m font-semibold text-2xl text-neutral-900">Base</span>
        </div>
    )
}

export default BaseHeader