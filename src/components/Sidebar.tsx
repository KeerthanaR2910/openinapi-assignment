import BaseIcon from '@/icons/BaseIcon'
import Close from '@/icons/Close'
import { twMerge } from 'tailwind-merge'
import SidebarItems from './SidebarItems'

const Sidebar = ({ show, onClose }: { show?: boolean; onClose: () => void }) => {
    //TODO add border radius for side bar
    return (
        <div
            className={twMerge(
                'w-full md:w-[25%] lg:w-[15%] h-[100vh] bg-white absolute md:static rounded-r-3xl md:rounded-none overflow-hidden',
                !show && 'hidden md:block'
            )}
        >
            <div className="flex items-center justify-between md:justify-center pb-12 p-6 md:p-12">
                <div className="flex gap-x-4 items-center">
                    <BaseIcon />
                    <span className="block m font-semibold text-2xl text-neutral-900">Base</span>
                </div>
                <button className="block md:hidden" onClick={onClose}>
                    <Close />
                </button>
            </div>
            <SidebarItems />
        </div>
    )
}

export default Sidebar
