import Header from './Header'
import UploadWrapper from '@/components/UploadWrapper'

type MainContentProps = {
    onBurgerClick: () => void
}

const MainContent = ({ onBurgerClick }: MainContentProps) => {
    return (
        <div className="w-full h-[100vh] bg-grayish-white">
            <div className="p-0 h-full">
                <Header onBurgerClick={onBurgerClick} />
                <div className=" bg-grayish-white">
                    <span className="text-black font-semibold text-2xl block md:hidden pl-4 font-figtree">
                        Upload CSV
                    </span>
                    <UploadWrapper />
                </div>
            </div>
        </div>
    )
}

export default MainContent
