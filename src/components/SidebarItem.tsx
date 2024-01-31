import {twMerge} from "tailwind-merge";

type SidebarItemProps = {
    icon: () => JSX.Element,
    label: string,
    active?: boolean
}

const SidebarItem = ({icon:Icon, label, active}: SidebarItemProps) => {
    return(
        <div className="flex gap-x-4">
            <Icon />
            <span className={twMerge(" text-light-gray font-medium text-base",active && "text-purple")}>{label}</span>
        </div>
    )
}

export default SidebarItem