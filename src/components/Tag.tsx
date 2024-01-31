import TagClose from '@/icons/TagClose'

const Tag = ({ label, onClose }: { label: string; onClose: (tag: string) => void }) => {
    if (label !== '') {
        return (
            <div className=" bg-purple rounded-lg w-fit flex items-center p-2">
                <span className="text-white text-xs pr-2">{label}</span>
                <button onClick={() => onClose(label)} className="hover:text-white">
                    <TagClose />
                </button>
            </div>
        )
    }
    return null
}

export default Tag
