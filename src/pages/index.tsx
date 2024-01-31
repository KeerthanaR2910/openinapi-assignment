import MainContent from '@/components/MainContent'
import Sidebar from '@/components/Sidebar'
import { useState } from 'react'

export default function Home() {
    const [showSideBar, setShowSideBar] = useState(true)
    return (
        <div className="w-full h-full relative md:flex md:static">
            <Sidebar show={showSideBar} onClose={() => setShowSideBar(false)} />
            <MainContent onBurgerClick={() => setShowSideBar(!showSideBar)} />
        </div>
    )
}
