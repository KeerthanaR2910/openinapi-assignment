import Header from './Header'
import UploadContainer from '@/components/UploadWrapper'
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
                    {/* fontfamily- Figtree */}
                    <span className="text-black font-semibold text-2xl block md:hidden pl-4">Upload CSV</span>
                    <UploadWrapper />
                </div>
            </div>
        </div>
    )
}

export default MainContent
