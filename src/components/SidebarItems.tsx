import Calendar from '@/icons/Calendar'
import Dashboard from '@/icons/Dashboard'
import Invoice from '@/icons/Invoice'
import Schedule from '@/icons/Schedule'
import UploadMenuIcon from '@/icons/UploadMenuIcon'
import Notification from '@/icons/Notification'
import SidebarItem from './SidebarItem'
import Settings from '@/icons/Settings'
import { useState } from 'react'

const SidebarItems = () => {
    const [activeMenu, setActiveMenu] = useState('Upload') // Add onclick for all items
    return (
        <div className="pl-8 pr-8 flex gap-y-11 flex-col h-full">
            <SidebarItem icon={Dashboard} label="Dashboard" />
            <SidebarItem icon={UploadMenuIcon} label="Upload" active={activeMenu === 'Upload'} />
            <SidebarItem icon={Invoice} label="Invoice" />
            <SidebarItem icon={Schedule} label="Schedule" />
            <SidebarItem icon={Calendar} label="Calendar" />
            <SidebarItem icon={Notification} label="Notification" />
            <SidebarItem icon={Settings} label="Settings" />
        </div>
    )
}

export default SidebarItems
